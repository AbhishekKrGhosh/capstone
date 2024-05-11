import express from 'express'
import { getUserDetails, getCourseDetails, createLearner, createCourse } from '../controllers/posts.js'

const router = express.Router()

router.get('/user', getUserDetails)
router.get('/course', getCourseDetails)
router.post('/user', createLearner)
router.post('/course', createCourse)

export default router