window.addEventListener("DOMContentLoaded", () => {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const checkoutLista = document.getElementById("checkoutLista");
  const checkoutTotal = document.getElementById("checkoutTotal");

  if (carrinho.length === 0) {
    checkoutLista.innerHTML = `<li class="list-group-item">Seu carrinho está vazio.</li>`;
    return;
  }

  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `
      <div class="d-flex justify-content-between">
        <div>
          <strong>${item.nome}</strong>
          <br>
          <small>Quantidade: ${item.quantidade || 1}</small>
        </div>
        <span>R$ ${(item.preco * (item.quantidade || 1)).toFixed(2)}</span>
      </div>
    `;
    checkoutLista.appendChild(li);
    total += item.preco * (item.quantidade || 1);
  });

  checkoutTotal.textContent = `R$ ${total.toFixed(2)}`;
});

// Botão para finalizar a compra
document.getElementById("finalizarCompra").addEventListener("click", () => {
  alert("Compra finalizada com sucesso! Obrigado pela preferência.");
  localStorage.removeItem("carrinho"); // Limpa o carrinho
  window.location.href = "index.html"; // Redireciona para a página inicial
});