import newsModel from "../models/newsModel.js"

class newsController {

    async create(req,res) {
        try{
            const data = await newsModel.create(req.body)
            res.status(201).json(data)
        }catch(e){
            console.log(e.message)
            res.status(404).send(e.message)
        }
    }

    async update(req,res) {
        try{
            const { id } = req.params
            const data = await newsModel.update(id,req.body)
            res.status(200).json(data)
        }catch(e){
            console.log(e.message)
            res.status(404).send(e.message)
        }
    }

    async delete(req,res) {
        try{
            const { id } = req.params
            const data = await newsModel.deleteOne(id)
            res.status(200).json(data)
        }catch(e){
            console.log(e.message)
            res.status(404).send(e.message)
        }
    }

    async getAll(req,res) {
        try{
            const { type } = req.params
            const data = await newsModel.getAll(type)
            res.status(200).json(data)
        }catch(e){
            console.log(e.message)
            res.status(404).send(e.message)
        }
    }

    async getOne(req,res) {
        try{
            const { id } = req.params
            const data = await newsModel.getOne(id)
            res.status(200).json(data)
        }catch(e){
            console.log(e.message)
            res.status(404).send(e.message)
        }
    }
}

export default new newsController()