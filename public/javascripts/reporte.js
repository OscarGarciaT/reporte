const setupFilters = async () => {
  var productos = [];

  //   const response = await fetch("http://localhost:3000/productos");
  //   const productosResponse = Object.values(response.json());

  //   productosResponse.forEach((c) => {
  //     productos.indexOf(c.weapon) === -1 ? productos.push(c.weapon) : true;
  //   });

  var selectProducto = document.getElementById("productoSelect");

  productos.forEach((o) => {
    let option = document.createElement("option");
    option.textContent = o;
    option.setAttribute("value", o);
    selectProducto.appendChild(option);
  });

  selectProducto.addEventListener("change", (event) => {
    const value = event.target.value;
    filterTable(value);
  });
};

const filterTable = (value) => {
  var table, tr, i, currRow;
  table = document.getElementById("reporteTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    currRow = tr[i].getElementsByTagName("td")[1];
    if (currRow) {
      currRowValue = currRow.textContent || currRow.innerText;
      if (currRowValue === value) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

window.addEventListener("DOMContentLoaded", (event) => {
  setupFilters();
});
