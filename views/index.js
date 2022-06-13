import axios from "axios";
import express, {Router} from "express";
var user;

const routes = Router ();

routes.use(express.urlencoded({extended: true}));

routes.use('/style', express.static("views/style"));

routes.use('/js', express.static("views/js"));

routes.get("/", (req,res) => {
    res.render("index",{username:user});
    res.end ();
})

routes.get("/game", (req,res) => {
    res.render("game");
    res.end ();
})


routes.get("/login", async (req, res) => {
    return res.render("login", {
        onSubmit: () => {
            console.log("here");
        },
        test: "Hallo"
    });
});

routes.post("/login", async (req, res) => {
    const {username, password} = req.body;
    try {
        const data = await axios({
            url: "http://localhost:4040/api/v1/data",
            method: "POST",
            data: {
                username,
                password
            },
        });
        
        user= data.data.username;

        return res.status(302).redirect("/");
  
    } catch (error) {
        return res.status(400).json({
            message: "Terjadi Kesalahan"
        });
    }
});

export default routes;