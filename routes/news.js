import express from "express"
import newsController from "../controllers/newsController.js"

const newsRouter = express.Router()

newsRouter.post("/",newsController.create)
newsRouter.get("/:type",newsController.getAll)
newsRouter.get("/new/:id",newsController.getOne)
newsRouter.put("/:id",newsController.update)
newsRouter.delete("/:id",newsController.delete)

export default newsRouter