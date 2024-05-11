import mongoose from "mongoose";

const learnerSchema = mongoose.Schema({
    userEmail: String,
    name: String,
    given_name: String,
    family_name: String,
    category: String,
    interest: [String],
    liked: [String],
    disliked: [String]
})

const Learner = mongoose.model("Learner",learnerSchema)

export default Learner