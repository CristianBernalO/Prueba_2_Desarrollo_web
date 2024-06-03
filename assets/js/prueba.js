// Iniciando jQuery
$(document).ready(function () {
  // Creando constante para reiniciar el HTML
  const BORRARHTML = "";
  // Asignando estructura de la tabla a poblar en un formato String
  var divTabla =
    '<div id="reducir-tabla" class="col-lg-12"><table class="table"><thead><tr class="table-info rounded"><th scope="col">#</th><th scope="col">Nombre</th><th scope="col">Descripción</th><th scope="col">Acciones</th></tr></thead><tbody id="body-categorias"></tbody></table></div><div id="tabla-extra"></div>';

  // Agregando la estructura de la tabla al HTML
  $("#tabla-row").append(divTabla);

  // Utilizando las funcionalidades de jQuery para ejecutar una función al hacer click en el
  // elemento designado con el id consultar
  $("#consultar").on("click", function () {
    var htmlSpinner = '<div class="spinner mx-auto"></div>';
    $("#body-categorias").html(BORRARHTML);
    // Agregando el spinner
    $("#spinner").append(htmlSpinner);

    // Consultando la API
    $.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
      function (data) {
        // Quitando el spinner al cargar la API
        $("#spinner").html("");
        // Recorriendo el apartado de "categories" del JSON
        $.each(data.categories, function (i, items) {
          // Guardando la estructura de la tabla junto a la información en la API
          // en un tipo de dato String
          var filaHtml =
            '<tr id="fila-' +
            items.idCategory +
            '"><th scope="row">' +
            items.idCategory +
            "</th><td>" +
            items.strCategory +
            "</td><td>" +
            items.strCategoryDescription +
            "</td><td><button onclick=\"verMas('" +
            items.strCategory +
            '\')" class="btn btn-info"><i class="fa-solid fa-magnifying-glass-plus"></i> Ver más</button></td></tr>';
          // Agregando cada fila de información al HTML
          $("#body-categorias").append(filaHtml);
        });
      }
    );
  });
});
