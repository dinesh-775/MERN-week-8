import { userApp } from "./APIs/UserAPI.js"
import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors";


config()
const app = exp();
app.use(cors());
app.use(exp.json());

async function connectDB() {
    try {
        await connect(process.env.DB_URL);
        console.log("DataBase Connected Successfully!")
        const port = process.env.PORT;
        app.listen(port, () => console.log(`Server is runnin on ${port}`))
    }
    catch (error) {
        console.log("Error: DataBase Failed to Connect!" + error)
    }
}
connectDB();

app.use((err, req, res, next) => {
    // Mongoose validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({
            message: "Validation failed",
            errors: err.errors,
        });
    }
    // Invalid ObjectId
    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid ID format",
        });
    }
    // Duplicate key
    if (err.code === 11000) {
        return res.status(409).json({
            message: "Duplicate field value",
        });
    }
    res.status(500).json({
        message: "Internal Server Error",
    });
});

app.use("/user-api", userApp);
