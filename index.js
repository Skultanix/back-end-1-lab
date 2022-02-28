//importing express and cors
const express = require(`express`)
const cors = require(`cors`)
//app variable declaration
const app = express()

//dictating that JSON objects are used in server response
app.use(express.json())

//creation of endpoints
app.get(`/api/users`, (req, res) => {
    let friends = [`Nitin`, `Eric`, `Jeddy`, `Cameron`, `Riley`]
    return res.status(200).send(friends)
})

app.get(`/weather/:temperature`, (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today.</h3>`;
    return res.status(200).send(phrase)
})

//dictating that server listen on port 4000
app.listen(4000, () => {
    console.log(`Server running on port 4000.`)
})