import express, { Request, Response } from "express";
import { ValidatePasswordMiddleware } from "./middleware/validatePasswordMiddleware";

const PORT = 3333;
const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`🚀 Server running at: https://localhost:${PORT}`));

app.post('/validate-password', [ValidatePasswordMiddleware], async (req: Request, res: Response) => {
  return res.status(204).send();
});

// Requisitos
// - [] Verificar se a senha possui pelo menos 08 caracteres.
// - [] Verificar se a senha contém pelo menos uma letra maiúscula.
// - [] Verificar se a senha contém pelo menos uma letra minúscula.
// - [] Verificar se a senha contém pelo menos um dígito numérico.
// - [] Verificar se a senha contém pelo menos um caractere especial (e.g, !@#$%).