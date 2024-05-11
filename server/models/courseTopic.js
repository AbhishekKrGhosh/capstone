import mongoose from "mongoose";

const courseTopicSchema = mongoose.Schema({
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
    tag: [String]
})

const CourseTopic = mongoose.model("CourseTopic", courseTopicSchema)

export default CourseTopic