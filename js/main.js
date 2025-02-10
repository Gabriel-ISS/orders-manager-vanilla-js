import { guaraniFormatter } from "./guaraniFormatter.js";
import { $ } from "./helpers.js";
import ItemsManager from "./ItemsManager.js";
import ClientsDB from "./ClientsDB.js";

const $form = $("form");
const $items = $("items");
const $total = $("total");
const $totalIva = $("total-iva");
const $totalAndIva = $("total-and-iva");

// Inputs del pedido
const $codeInput = $("code");
const $productNameInput = $("product-name");
const $priceInput = $("price");
const $ivaInput = $("iva");
const $quantityInput = $("quantity");

// Inputs del cliente
const $rucInput = $("ruc");
const $nameInput = $("name");
const $addressInput = $("address");

// Agregar el item y guardar cliente
$form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtención de datos
  const item = {
    code: $codeInput.value,
    name: $productNameInput.value,
    price: Number($priceInput.value),
    iva: Number($ivaInput.value),
    quantity: Number($quantityInput.value),
    client: {
      ruc: $rucInput.value,
      name: $nameInput.value,
      address: $addressInput.value,
    },
  };

  // Actualizar datos en memoria
  const newItem = ItemsManager.add(item);

  // Actualizar datos en la interfaz
  $total.innerHTML = guaraniFormatter.format(ItemsManager.total);
  $totalIva.innerHTML = guaraniFormatter.format(ItemsManager.totalIva);
  $totalAndIva.innerHTML = guaraniFormatter.format(ItemsManager.totalAndIva);


  $items.innerHTML += `
    <tr class="table__body__row">
      <td class="table__body__cell">${item.code}</td>
      <td class="table__body__cell">${item.name}</td>
      <td class="table__body__cell table__cell--numeric">${item.price}</td>
      <td class="table__body__cell table__cell--numeric">${item.quantity}</td>
      <td class="table__body__cell table__cell--numeric">${guaraniFormatter.format(newItem.total)}</td>
      <td class="table__body__cell table__cell--numeric">${item.iva}</td>
      <td class="table__body__cell table__cell--numeric">${guaraniFormatter.format(newItem.totalIva)}</td>
      <td class="table__body__cell table__cell--numeric">${guaraniFormatter.format(newItem.totalAndIva)}</td>
      <td class="table__body__cell">${item.client.ruc}</td>
    </tr>
  `;

  // Guardar cliente
  ClientsDB.add(item.client);

  // Limpiar formulario
  $form.reset();

  // Mostrar alerta en caso de superar el 1.000.000 Gs
  if (ItemsManager.total > 1000000) {
    alert("¡Ha superado el millón de guaraníes!");
  }
});

// Auto-completar cliente
$rucInput.addEventListener("input", (e) => {
  const client = ClientsDB.getById(e.target.value);

  if (client) {
    $nameInput.value = client.name;
    $addressInput.value = client.address;
  }
});
