import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import connectDatabase from "./config/database.js";
import { userRouter } from "./routes/userRouter.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

connectDatabase();


app.use("/api", userRouter);



app.use((err, req, res, next) => {
  res.status(404).json({ success: false, status: 500, message: "Something went wrong!"});
});

app.use((req, res) => {
  res.status(404).json({ success: false, status: 404, message: "Not found" });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(
    `The server connection is now established and running on port ${port}`
  );
});
