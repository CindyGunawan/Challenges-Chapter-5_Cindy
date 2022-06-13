import { Router,json } from "express";
import data from "./static/data.json" assert {type: "json"};;

const routes = Router ();

routes.use(json());

routes.get("/data", (req,res) => {
    return res.status(200).json(data);
});

routes.post("/data", (req, res) => {
    const { username, password } = req.body;

    if (req.body.username === data.data.username &&
        req.body.password === data.data.password){
        return res.status(200).json({
            message:"success",
            username: data.data.username
        })

    }else {
       return res.status (400).json ('error login');
    }
    
});

export default routes;