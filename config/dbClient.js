import mongoose from "mongoose";


class mongoNewsClient {

    constructor(){
        this.connnectMongo()
    }

    async connnectMongo(){

        try {
            const query_string_connection = process.env.MONGO_URI
            await mongoose.connect(query_string_connection)
            console.log("connected to mongo")
        } catch (e) {
            console.log(e.error)
        }

    }

    async closeConnection() {
        try {
            await mongoose.connection.close()
            console.log("connection to mongo closed")
        } catch (e) {
            console.log(e.error)
        }
    }
}

export default new mongoNewsClient()