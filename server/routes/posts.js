import express from 'express'
import { getUserDetails, getCourseDetails, createLearner, createCourse, getCourseTopicDetails, getVideoDetails, createCourseTopic, createVideo, getCourseTypeDetails, createCourseType } from '../controllers/posts.js'

const router = express.Router()

router.get('/user', getUserDetails)
router.get('/course', getCourseDetails)
router.get('/courseTopic', getCourseTopicDetails)
router.get('/courseType', getCourseTypeDetails)
router.get('/video', getVideoDetails)
router.post('/user', createLearner)
router.post('/course', createCourse)
router.post('/courseTopic', createCourseTopic)
router.post('/courseType', createCourseType)
router.post('/video', createVideo)

export default router