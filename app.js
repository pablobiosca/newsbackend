import express from "express"
import "dotenv/config"
import cookieParser from "cookie-parser"
import newsRouter from "./routes/news.js"
import logger from "morgan"
import mongoNewsClient from "./config/dbClient.js"
import dbClient from "./config/dbClient.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",newsRouter)


const port = process.env.PORT || 5001
const server = app.listen(port, () => {
    console.log("Server listen on port => "+port)
})

process.on("SIGINT", async () => {
    console.log("Server shutting down...")
    await dbClient.closeConnection()
    server.close(() => {
        console.log("Server closed")
        process.exit(0)
    })
})