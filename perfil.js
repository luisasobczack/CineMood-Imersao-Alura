document.querySelectorAll('.profile a').forEach((link) => {
  link.addEventListener('click', () => {
    const figure = link.querySelector('figure')
    const nome = figure.querySelector('figcaption').textContent
    const imagem = figure.querySelector('img').src

    localStorage.setItem('perfilAtivoNome', nome)
    localStorage.setItem('perfilAtivoImagem', imagem)
  })
})
