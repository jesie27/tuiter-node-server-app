import express from 'express';
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
        || 'mongodb://127.0.0.1:27017/tuiter'
//const CONNECTION_STRING ='mongodb+srv://jesiefu11:corgi27@cluster0.hrvnww7.mongodb.net/tuiter?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());

HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000);