import express from 'express';

const PORT = process.env.port || 8080

const app = express()

// app.use(express.json())

app.listen(PORT, () => console.log(`server started on post ${PORT}`))