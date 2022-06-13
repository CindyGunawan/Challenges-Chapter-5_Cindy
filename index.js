// Server

import express from 'express';
import views from './views/index.js';
import apis from './apis/index.js';
import bodyparser from 'body-parser';

const port = 4040;
const app = express ();

app.use (bodyparser.json())
app.use (bodyparser.urlencoded({extended:true}))


app.use(express.json());

app.set("view engine", "ejs");

app.use("/", views);

app.use("/api/v1", apis);

app.listen(4040, () => {
    console.log(`Server running on ${port}`);
});
