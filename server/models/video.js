import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    tag: [String],
    courseTopicId: String,
    videoTitle: String,
    videoUrl: String,
    videoDuration: String
})

const Video = mongoose.model("Video", videoSchema)

export default Video