import mongoose from "mongoose"
import Learner from "../models/learner.js"
import Course from "../models/course.js"
import CourseTopic from "../models/courseTopic.js"
import Video from "../models/video.js"

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

export const getCourseTopicDetails = async (req, res)=>{
    try {
        const courseTopic = await CourseTopic.find()
        res.status(200).json(courseTopic)
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}
export const getVideoDetails = async (req, res)=>{
    try {
        const video = await Video.find()
        res.status(200).json(video)
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

export const createCourseTopic = async (req, res)=> {
    const courseTopic = req.body
    const newCourseTopic = new PostMessage(courseTopic)
    try {
        await newCourseTopic.save()
        res.status(201).json(newCourseTopic)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const createVideo = async (req, res)=> {
    const video = req.body
    const newVideo = new PostMessage(video)
    try {
        await newVideo.save()
        res.status(201).json(newVideo)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}
