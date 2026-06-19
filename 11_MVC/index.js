const express = require("express");
const { connectMongoDB } = require("./connection");

const { logReqRes } = require("./middlewares");

const userRouter = require("./routes/user");


const app = express();
const PORT = 8000;

// Connection
connectMongoDB("mongodb://127.0.0.1:27017/yt-app-1")
    .then(() => console.log("MongoDB Connected"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("Backend/11_MVC/log.txt"));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
});