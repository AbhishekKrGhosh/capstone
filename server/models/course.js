import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    courseFor: String,
    courseType: String,
    creatorName: String,
    createdDate: {
        type: Date,
        default: new Date()
    },
    courseName: String,
    likeCount: Number,
    tag: [String],
    title: String,
    description: String,
    videoTitle: String,
    videoUrl: String,
    videoDuration: String
})

const Course = mongoose.model("Course", courseSchema)

export default Course