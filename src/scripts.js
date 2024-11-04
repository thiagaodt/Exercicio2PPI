document.getElementById('meuFormulario').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const dataNascimento = document.getElementById('dataNascimento').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Realiza a validação conforme explicado anteriormente
    let formularioValido = true;
    // Código de validação omitido para simplificação

    if (formularioValido) {
        try {
            const response = await fetch('http://localhost:5500/processar-formulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
                },
                body: JSON.stringify({ nome, cpf, dataNascimento, email, senha }) // Envia os dados como JSON
            });

            const data = await response.json();
            alert(data.mensagem);
        } catch (error) {
            alert('Erro ao enviar dados: ' + error.message);
        }
    }
});
