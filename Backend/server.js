import express from "express";
const app = express();
import userRouter from "./Router/user.js";
import adminRouter from "./Router/admin.js";
import connectDb from "./config/connect.js";
import cors from "cors";
import { errorHandler, notFound } from "./Midleware/ErrorMiddleware.js";
import path from "path";
connectDb();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());

app.use(cors(corsOptions));
app.use("/admin", adminRouter);
app.use("/", userRouter);

app.use(notFound);
app.use(errorHandler);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("Frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(4000, () => {
  console.log("server is running");
});
