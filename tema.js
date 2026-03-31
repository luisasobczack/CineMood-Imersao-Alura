// Alterna entre tema dark e light usando emojis de sol e lua
// Adicione <script defer src="tema.js"></script> antes do </body> no HTML

// Cria o botão de alternância de tema
const themeToggle = document.createElement('button') // Cria um botão
themeToggle.setAttribute('id', 'theme-toggle') // Define o id do botão
themeToggle.setAttribute('aria-label', 'Alternar tema') // Acessibilidade
themeToggle.style.position = 'fixed' // Fixa no topo
themeToggle.style.top = '1rem' // Distância do topo
themeToggle.style.right = '1rem' // Distância da direita
themeToggle.style.zIndex = '1000' // Fica acima dos outros elementos
themeToggle.style.background = 'none' // Sem fundo
themeToggle.style.border = 'none' // Sem borda
themeToggle.style.fontSize = '2rem' // Tamanho do emoji
themeToggle.style.cursor = 'pointer' // Cursor de mão
themeToggle.style.outline = 'none' // Sem contorno

document.body.appendChild(themeToggle) // Adiciona o botão ao body

// Função para aplicar o tema
function setTheme(theme) {
  if (theme === 'light') {
    // Se for light
    document.documentElement.setAttribute('data-theme', 'light') // Seta atributo
    themeToggle.textContent = '🌙' // Emoji de sol
  } else {
    // Se for dark
    document.documentElement.setAttribute('data-theme', 'dark') // Seta atributo
    themeToggle.textContent = '🌞' // Emoji de lua
  }
  localStorage.setItem('theme', theme) // Salva preferência
}

// Alterna o tema ao clicar
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') // Tema atual
  setTheme(current === 'dark' ? 'light' : 'dark') // Alterna
}

themeToggle.addEventListener('click', toggleTheme) // Clique no botão alterna

// Inicializa o tema com base no localStorage ou padrão dark
const savedTheme = localStorage.getItem('theme') // Busca tema salvo
setTheme(savedTheme === 'light' ? 'light' : 'dark') // Aplica tema inicial
