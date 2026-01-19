import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from "../models/DoctorModel.js"
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"
import userModel from "../models/userModel.js"

// API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file 

            // ✅ 1. Check if all required fields are provided
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address ) {
            return res.json({success:false, message:"Missing Details"})
        }

        // ✅ 2. validating email formate
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter valid Email"})
                
        }

        // 3. validating strong password
        if (password.length < 8) {
            return res.json({success:false, message:"Please enter Strong Password"})
            
        }

        // 4. Hashing Doctor Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // 5. Upload image to cloudinary
        const imageupload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
        const imageUrl = imageupload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password: hashedPassword,
            speciality, 
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)

        // ✅ 5. Save doctor
        await newDoctor.save();

        // ✅ 6. Send success response
        res.json({success:true, message: "Doctor Added"})

        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message })
        
    }

}



// API for admin Login
const loginAdmin = async (req,res) => {
    try {

        const { email, password } = req.body;

        // 2. Match with environment variables
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            
             // 3. Generate JWT token
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, token})



        } else{
            return res.json({ success: false, message: "Invalid credentials" });
        }

        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message })
    }

}

// API Get all doctors list for admin panel
const allDoctors = async (req,res) => {

    try {

        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})

        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message })
    }

}

// API to get all appointment list 
const appointmentsAdmin = async (req,res) => {

    try {
        
        const appointments = await appointmentModel.find({})
        res.json({success:true, appointments})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message })
    }

}

// API for cancelled appoint from admin
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

    // releasing doctor slot
    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);

    if (doctorData?.slots_booked?.[slotDate]) {
      doctorData.slots_booked[slotDate] = doctorData.slots_booked[slotDate].filter(
        (e) => e !== slotTime
      );
      await doctorModel.findByIdAndUpdate(docId, { slots_booked: doctorData.slots_booked });
    }

    res.json({ success: true, message: "Appointment cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// API to get dashbord data for admin panel
const adminDashbord = async (req, res) => {
    try {

        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0,5)

        }

        res.json({success:true, dashData})
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}



export {addDoctor, loginAdmin, allDoctors, appointmentsAdmin, appointmentCancel, adminDashbord}