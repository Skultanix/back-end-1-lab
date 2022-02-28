//importing express and cors
const express = require(`express`)
const cors = require(`cors`)
//app variable declaration
const app = express()

//dictating that JSON objects are used in server response
app.use(express.json())

//dictating that server listen on port 4000
app.listen(4000, () => {
    console.log(`Server running on port 4000.`)
})