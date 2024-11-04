const express = require('express');
const app = express();
const port = 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/processar-formulario', (req, res) => {
    const { nome, cpf, dataNascimento, email, senha } = req.body;

    console.log("Nome:", nome);
    console.log("CPF:", cpf);
    console.log("Data de Nascimento:", dataNascimento);
    console.log("Email:", email);
    console.log("Senha:", senha);

    res.json({ mensagem: "Dados recebidos e processados com sucesso!" });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
