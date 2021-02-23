import express, { response } from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.send({message: "Hello World"})
});

app.post("/", (req, res) => {
    return res.json({message: "Recebido"})
})

app.listen(8080, () => console.log('Server is running!'));