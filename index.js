//importing express and cors
const express = requires(`express`)
const cors = requires(`cors`)
//app variable declaration
const app = express()

//dictating that JSON objects are used in server response
app.use(express.json())
