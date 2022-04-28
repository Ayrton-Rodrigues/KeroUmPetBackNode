import express, { Request, Response } from "express";
import cors from "cors";
import routerUser from "./routes/user.routes";
import routerPets from "./routes/pet.routes";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.use("/user", routerUser);
app.use("/pets", routerPets);

app.listen(port, () => {
  console.log(`Servidor disponível na porta: ${port}`);
});
