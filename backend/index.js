import express, { response } from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoute from './routes/bookRoutes.js';
import cors from 'cors';

const app=express();

app.use(express.json());

app.use(cors());

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("Hello World");
});

app.use('/books',booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App Connected to DB");
        app.listen(PORT,()=>{
            console.log(`App is running in http://localhost:${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });

