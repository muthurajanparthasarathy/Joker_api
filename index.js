import express, { response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';


const port = 3000;

const app = express();

const API_URL = 'https://v2.jokeapi.dev/joke';


app.get("/", (req, res) => {

    res.render("index.ejs", { content: "API response" })

})


app.get("/noAuth", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/Any`)

        res.render("index.ejs", { content: JSON.stringify(response.data) })
    }
    catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response) })
    }
})




app.get("/noAuthparameter", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/Any`,
            {
                params: {
                    amount: 3
                },
            })

        res.render("index.ejs", { content: JSON.stringify(response.data) })
    }
    catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response) })
    }
})



app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})