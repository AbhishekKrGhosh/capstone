import mongoose from "mongoose";

const learnerSchema = mongoose.Schema({
    userEmail: String,
    firstName: String,
    lastName: String,
    category: String,
    interest: [String],
    liked: [String],
    disliked: [String]
})

const Learner = mongoose.model("Learner",learnerSchema)

export default Learner