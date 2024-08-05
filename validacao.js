const form = document.getElementById('form')
const nomeCompleto_input = document.getElementById('nomeCompleto_input')
const email_input = document.getElementById('email-input')
const senha_input = document.getElementById('senha_input')
const repete_senha_input = document.getElementById('repete_senha_input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  let errors = []

  if(nomeCompleto_input){
    errors = getSignupFormErrors(nomeCompleto_input.value, email_input.value, senha_input.value, repete_senha_input.value)
  }
  else{
    errors = getLoginFormErrors(email_input.value, senha_input.value)
  }

  if(errors.length > 0){
    e.preventDefault()
    error_message.innerText  = errors.join(". ")
  }
})

function getSignupFormErrors(nomeCompleto, email, senha, repeteSenha){
  let errors = []

  if(nomeCompleto === '' || nomeCompleto == null){
    errors.push('Nome completo é obrigatório')
    nomeCompleto_input.parentElement.classList.add('incorreto')
  }
  if(email === '' || email == null){
    errors.push('Email é obrigatório')
    email_input.parentElement.classList.add('incorreto')
  }
  if(senha === '' || senha == null){
    errors.push('Senha é obrigatória')
    senha_input.parentElement.classList.add('incorreto')
  }
  if(senha.length < 6){
    errors.push('A senha deve ter pelo menos 8 caracteres')
    senha_input.parentElement.classList.add('incorreto')
  }
  if(senha !== repeteSenha){
    errors.push('A senha não corresponde à senha repetida')
    senha_input.parentElement.classList.add('incorreto')
    repete_senha_input.parentElement.classList.add('incorreto')
  }


  return errors;
}

function getLoginFormErrors(email, senha){
  let errors = []

  if(email === '' || email == null){
    errors.push('Email é obrigatório')
    email_input.parentElement.classList.add('incorreto')
  }
  if(senha === '' || senha == null){
    errors.push('Senha é obrigatório')
    senha_input.parentElement.classList.add('incorreto')
  }

  return errors;
}

const allInputs = [nomeCompleto_input, email_input, senha_input, repete_senha_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorreto')){
      input.parentElement.classList.remove('incorreto')
      error_message.innerText = ''
    }
  })
})