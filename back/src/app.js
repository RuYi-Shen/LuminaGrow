import cors from "cors";
import express from "express";
import 'dotenv/config'
//import "express-async-errors";
//import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
//import router from "./routers/index.js";
import { prisma } from "./database.js";
const app = express();

app.use(cors());
app.use(express.json());

//app.use(router);
const entity = await prisma.entity.findUnique({
    where: {
        id: '3E22523B-4C0A-4A73-A598-8DF0B6154B65',
    },
})
console.log(entity)
//app.use(errorHandlerMiddleware);

export default app;