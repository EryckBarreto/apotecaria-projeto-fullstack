// app.js

const form = document.getElementById('form');
const nomeCompleto_input = document.getElementById('nomeCompleto-input');
const email_input = document.getElementById('email-input');
const senha_input = document.getElementById('senha-input');
const repete_senha_input = document.getElementById('repete-senha-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let errors = [];
    if (nomeCompleto_input) {
        errors = getSignupFormErrors(nomeCompleto_input.value, email_input.value, senha_input.value, repete_senha_input.value);
    } else {
        errors = getLoginFormErrors(email_input.value, senha_input.value);
    }

    if (errors.length > 0) {
        error_message.innerText = errors.join(". ");
        return;
    }

    const formData = {
        completeNameUser: nomeCompleto_input ? nomeCompleto_input.value : undefined,
        emailUser: email_input.value,
        passwordUser: senha_input.value,
        cpfUser: document.getElementById('cpf-input') ? document.getElementById('cpf-input').value : undefined,
    };

    const repeteSenha = repete_senha_input ? repete_senha_input.value : undefined;

    if (formData.passwordUser !== repeteSenha) {
        error_message.innerText = 'As senhas não coincidem';
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
            alert('Usuário criado com sucesso!');
            form.reset();
        } else {
            error_message.innerText = result.errors.map(error => error.msg).join(', ');
        }
    } catch (error) {
        error_message.innerText = 'Erro na requisição: ' + error.message;
    }
});

function getSignupFormErrors(nomeCompleto, email, senha, repeteSenha) {
    let errors = [];

    if (!nomeCompleto) {
        errors.push('Nome completo é obrigatório');
        nomeCompleto_input.parentElement.classList.add('incorreto');
    }
    if (!email) {
        errors.push('Email é obrigatório');
        email_input.parentElement.classList.add('incorreto');
    }
    if (!senha) {
        errors.push('Senha é obrigatória');
        senha_input.parentElement.classList.add('incorreto');
    } else if (senha.length < 6) {
        errors.push('A senha deve ter pelo menos 6 caracteres');
        senha_input.parentElement.classList.add('incorreto');
    }
    if (senha !== repeteSenha) {
        errors.push('A senha não corresponde à senha repetida');
        senha_input.parentElement.classList.add('incorreto');
        repete_senha_input.parentElement.classList.add('incorreto');
    }

    return errors;
}

function getLoginFormErrors(email, senha) {
    let errors = [];

    if (!email) {
        errors.push('Email é obrigatório');
        email_input.parentElement.classList.add('incorreto');
    }
    if (!senha) {
        errors.push('Senha é obrigatória');
        senha_input.parentElement.classList.add('incorreto');
    }

    return errors;
}

const allInputs = [nomeCompleto_input, email_input, senha_input, repete_senha_input].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorreto')) {
            input.parentElement.classList.remove('incorreto');
            error_message.innerText = '';
        }
    });
});
