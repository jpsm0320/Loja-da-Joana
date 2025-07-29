document.addEventListener('DOMContentLoaded', () => {
    fetchProdutos();
    validarFormulario();
});

function fetchProdutos() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container');
            produtos.slice(0, 6).forEach(produto => {
                const card = `
          <div class="col-md-4">
            <div class="card h-100">
              <img src="${produto.image}" class="card-img-top p-4" alt="${produto.title}" style="height:300px; object-fit:contain;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${produto.title}</h5>
                <p class="card-text text-truncate">${produto.description}</p>
                <p class="mt-auto fw-bold">R$ ${produto.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        `;
                container.innerHTML += card;
            });
        });
}

function validarFormulario() {
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function (e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}
