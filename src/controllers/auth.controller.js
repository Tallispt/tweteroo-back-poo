import { User } from "../classes.js";

export const signUp = (req, res) => {
  const user = new User({...req.body});
  
  if (user.isValid()) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }
  
  user.addUser();
  res.status(200).send('OK deu tudo certo');
}