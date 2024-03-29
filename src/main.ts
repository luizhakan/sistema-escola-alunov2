import express from "express";
import { addAluno, aluno, alunocpf, changeDateAluno, deleteAluno } from "./routes/routes";

const app = express();
app.use(express.json());

app.post("/aluno", addAluno);
app.get("/aluno", aluno);
app.get("/alunocpf", alunocpf);
app.put("/aluno/:id", changeDateAluno);
app.delete("/aluno/:id", deleteAluno);

app.listen(3000, () => {
	console.log("Servidor iniciado na porta 3000");
});
