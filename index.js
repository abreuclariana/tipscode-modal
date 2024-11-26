// Selecionar elementos
const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Abrir o modal ao clicar no botão
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fechar o modal ao clicar no botão de fechar
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) { // target: se refere ao elemento que foi realmente clicado. 
    modal.style.display = "none"; // serve para esconder o modal "o fundo escuro fora do conteúdo"
  }
});

// Fechar o modal ao pressionar a tecla "Esc"
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { //  O key é o valor da tecla que foi pressionada, nome da tecla "Esc" 
    modal.style.display = "none";
  }
});

