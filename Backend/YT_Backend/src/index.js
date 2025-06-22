import mongoose, { connect } from "mongoose";
import { DB_NAM } from "./constants";
import express from "express";

connectDB()
















// ;( async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI} ${DB_NAM}`)
//         application.on("error",(error)=>{
//             console.log("Error connecting to MongoDB")
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.log("ERROR:" , error)
//         throw error


//     }
// })()


