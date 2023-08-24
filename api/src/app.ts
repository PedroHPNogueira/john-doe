import express from "express"
import "express-async-errors"
import { handleError } from "./errors/handleError"
import customerRouter from "./routes/customers.routes"
import { handleJsonError } from "./errors/handleJsonError"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use(handleJsonError)

app.use("/customers", customerRouter)

app.use(handleError)

export default app
