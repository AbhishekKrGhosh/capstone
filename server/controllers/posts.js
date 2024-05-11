import mongoose from "mongoose"
import Learner from "../models/learner.js"
import Course from "../models/course.js"

export const getUserDetails = async (req, res)=>{
    try {
        const learner = await Learner.find()
        res.status(200).json(learner)
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const getCourseDetails = async (req, res)=>{
    try {
        const course = await Course.find()
        res.status(200).json(course)
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}


export const createLearner = async (req, res)=> {
    const learner = req.body
    const newLearner = new PostMessage(learner)
    try {
        await newLearner.save()
        res.status(201).json(newLearner)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const createCourse = async (req, res)=> {
    const course = req.body
    const newCourse = new PostMessage(course)
    try {
        await newCourse.save()
        res.status(201).json(newCourse)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}
