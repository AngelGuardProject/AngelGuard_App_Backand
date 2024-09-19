const express = require("express");

const app = express();

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/user");
const dthRouter = require("./routes/dthmb");
const eatRouter = require("./routes/eating")

app.use("/user", userRouter);
app.use("/dth", dthRouter);
app.use("/eat",eatRouter);

app.listen(port,()=>{
    console.log("http:/localhost:5000")
})