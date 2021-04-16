import compression from "compression";
import cors from "cors";
import express from "express";
const path = require('path')
// import connectDB from "./config/db";
// import registerRoutes from "./routes";

const app = express();
const port = process.env.PORT || 5678;


async function startServer() {
  //Connect DB
  // await connectDB()

  //Middleware
  app.use(cors())
  app.use(compression())
  app.use(express.json({ extended: false }));
  app.use(express.urlencoded({ extended: true }))

  //Home
  app.get("/", (req, res) => {
    res.send(`Welcome to Olde Town on port:${port}`);
  });
  //Define Routes
  // registerRoutes(app);


  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });

}
try {
  startServer();
} catch (err) {
  console.error(err);
  process.exit(1);
}