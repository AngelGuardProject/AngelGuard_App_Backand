const express = require("express");

const app = express();

const port = 5000;

const userRouter = require("./routes/user");
const dthRouter = require("./routes/dthmb");

app.use("/user", userRouter);
app.use("/dth", dthRouter);

app.listen(port,()=>{
    console.log("http:/localhost:5000")
})