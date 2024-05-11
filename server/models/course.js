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
    likeCount: {
        type: Number,
        default: 0
    },
    tag: [String],
    courseTopicId: String,
    title: String,
    description: String,
    videoTitle: String,
    videoUrl: String,
    videoDuration: String
})

const Course = mongoose.model("Course", courseSchema)

export default Course