import mongoose from "mongoose";

const courseTypeSchema = mongoose.Schema({
    courseFor: String,
    courseType: String
})

const CourseType = mongoose.model("CourseType", courseTypeSchema)

export default CourseType