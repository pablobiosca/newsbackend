import news from "../schemas/newSchema.js"
import mongoose from "mongoose"

class newsModel {
    
    async create(new_obj) {
        try {
            console.log("nueva new =>",new_obj)
            return await news.create(new_obj)
        } catch (error) {
            throw new Error(`Error creating news: ${error.message}`)
        } 
    }

    async getAll(type) {
        try {
            const filter = {}
    
            if (type === "news") {
                filter.archiveDate = { $in: [null, undefined] }
            } else if (type === "archived") {
                filter.archiveDate = { $ne: null }
            }
    
            return await news.find(filter, { content: 0 })
        } catch (error) {
            throw new Error(`Error fetching news: ${error.message}`)
        }
    }

    async getOne(id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error("Invalid ID format")
            }
            const newsItem = await news.findOne({ _id: id })
            console.log("desde getone =>",newsItem)
            return await news.findById(id)
        } catch (error) {
            throw new Error(`Error fetching news by ID: ${error.message}`)
        }
    }

    async update(id, new_obj) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error("Invalid ID format")
            }
            console.log("before update\n",new_obj)
            return await news.findByIdAndUpdate(id, new_obj, { new: true })
        } catch (error) {
            throw new Error(`Error updating news: ${error.message}`)
        }
    }

    async deleteOne(id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error("Invalid ID format")
            }
            return await news.findByIdAndDelete(id)
        } catch (error) {
            throw new Error(`Error deleting news: ${error.message}`)
        }
    }

}

export default new newsModel()