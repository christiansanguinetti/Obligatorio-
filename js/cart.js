const dato = document.getElementById("correo")
const agregar_usuario = localStorage.getItem('usuario')
const info_carrito = "https://japceibal.github.io/emercado-api/user_cart/25801.json"


function pongo_correo() {
  if (agregar_usuario) {
    dato.innerHTML = agregar_usuario;
  }
}

function menu() {
  const poner_correo = document.getElementById("aca_correo")
  //const agregar = localStorage.getItem('usuario')
  if (agregar_usuario) {
    poner_correo.innerHTML = ` 
    <div class="btn-group">
    <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${agregar_usuario}
  </a>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
    <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
    <li><a class="dropdown-item" href="index.html">Cerrar Sesión</a></li>
  </ul>
    `
  }


}
menu()
const tabla = document.getElementById("tabla")
document.addEventListener('DOMContentLoaded', async function () {
  let dato = await getJSONData(info_carrito)
  tabla.innerHTML = ""
  tabla.innerHTML += `
  <thead>
  <tr>
    <th scope="col"></th>
    <th scope="col">Nombre</th>
    <th scope="col">Costo</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Subtotal</th>
  </tr>
</thead>`
  for (let arr of dato.data.articles) {
    tabla.innerHTML += `
 <tbody>
  <tr>
    <th scope="row"><img src="${arr.image}" class="img-thumbnail"> </th>
    <td>${arr.name}</td>
    <td>${arr.unitCost}</td>
    <td><input type="number" id="input"></td>
    <td>${arr.currency}${arr.unitCost}
  </tr>
  `}
  for (let costo of dato.data.articles) {
    if (input)
      input * costo

  }
})

function carrito(input) {
  if (input){
    (input *costo)
  }

}

addEventListener("input", () => {
carrito()
})