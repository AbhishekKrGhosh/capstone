import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import postRoutes from './routes/posts.js'

dotenv.config()

const port = process.env.PORT
const uname = process.env.UNAME
const pword = process.env.PWORD

const app = express()
app.use(bodyParser.json({limit: "30mb", extended: "true"}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}))
app.use(cors())
app.use('/posts', postRoutes)

const url = `mongodb+srv://${uname}:${pword}@cluster0.lhyaalt.mongodb.net/`

mongoose.connect(url)
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server running at port : ${port}`)
    })
})
.catch((error)=>{
    console.log(error)
})

