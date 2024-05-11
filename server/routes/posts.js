import express from 'express'
import { getUserDetails, getCourseDetails, createLearner, createCourse, getCourseTopicDetails, getVideoDetails, createCourseTopic, createVideo } from '../controllers/posts.js'

const router = express.Router()

router.get('/user', getUserDetails)
router.get('/course', getCourseDetails)
router.get('/courseTopic', getCourseTopicDetails)
router.get('/video', getVideoDetails)
router.post('/user', createLearner)
router.post('/course', createCourse)
router.post('/courseTopic', createCourseTopic)
router.post('/video', createVideo)

export default router