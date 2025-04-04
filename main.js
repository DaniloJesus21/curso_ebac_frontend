document.addEventListener('DOMContentLoaded', () => {
  const endpoint = 'https://api.github.com/users/DaniloJesus21';
  const avatarElemento = document.getElementById('avatar')
  const nomeElemento = document.getElementById('name')
  const usernameElemento = document.getElementById('username')
  const repositorioElemento = document.getElementById('repositorio')
  const seguidoresElementos = document.getElementById('seguidores')
  const seguindoElementos = document.getElementById('seguindo')
  const linkElemento = document.getElementById('link')

  fetch(endpoint)
    .then(function(resposta){
      return resposta.json();
    })
    .then(function(json){
      avatarElemento.src = json.avatar_url 
      nomeElemento.innerText = json.name
      usernameElemento.innerText = json.login
      repositorioElemento.innerText = json.public_repos
      seguidoresElementos.innerText = json.followers
      seguindoElementos.innerText = json.following
      linkElemento.href = json.html_url
    })
})