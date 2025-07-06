// Função genérica para salvar em localStorage
function saveData(key, data) {
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  existing.push(data);
  localStorage.setItem(key, JSON.stringify(existing));
}

// Cadastro de empresa
const formEmpresa = document.getElementById("formEmpresa");
if (formEmpresa) {
  formEmpresa.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formEmpresa).entries());
    saveData("empresas", data);
    alert("Empresa cadastrada!");
    formEmpresa.reset();
  });
}

// Cadastro de produto
const formProduto = document.getElementById("formProduto");
if (formProduto) {
  formProduto.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formProduto).entries());
    saveData("produtos", data);
    alert("Produto cadastrado!");
    formProduto.reset();
  });
}

// Envio de requerimento
const formRequerimento = document.getElementById("formRequerimento");
if (formRequerimento) {
  formRequerimento.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formRequerimento).entries());
    data.status = "pendente";
    saveData("requerimentos", data);
    alert("Requerimento enviado!");
    formRequerimento.reset();
  });
}