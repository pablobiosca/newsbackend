import mongoose from "mongoose"

const newsSchema = new mongoose.Schema(
    
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        archiveDate: {
            type: Date,
            default: null
        },
        imageUrl: {
            type: String,
            
        }
    },{
        timestamps:true,
        strict:true
    }
)

export default mongoose.model("news",newsSchema)