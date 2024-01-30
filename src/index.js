import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: "./.env"
})




connectDB()










/*
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            console.log("connected to database")
            app.on("error", (error) => {
                console.log("ERROR: ", error);
            })
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on PORT ${process.env.PORT}`)
            })
        } catch (error) {
            console.error("ERROR: ", error);
            throw error
        }
    })()

*/