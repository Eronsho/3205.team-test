import { Server } from "socket.io";
import { createServer } from "http";
import express, { Router } from "express";
import { config } from "dotenv";
import cors from "cors";
import path from "path";
import { router as userMCardsRouter } from "./routes/cards";
config();
const app = express();
app.use(express.json());
app.use(cors());

const server = createServer(app);
const PORT = 5000;
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${PORT}`,
  },
});

//start our server
server.listen(PORT, async () => {
  try {
    console.log(`Server started on port ${PORT} :)`);
    app.use(userMCardsRouter);
    // const Logs = await AddProject.drop();
  } catch (error) {
    console.log(error);
  }
});
