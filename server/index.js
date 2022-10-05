import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import posts from "./routers/PostRouter.js";

const app = express();
const port = 5000;
const URI =
    "mongodb+srv://huuthang01:huuthang01@cluster0.cp2cxjp.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
        app.listen(port, () => console.log(`Server started on port ${port}`));
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/posts", posts);
