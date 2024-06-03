//Inicianco Jquery
$(document).ready(function () {

  const BORRARHTML = "";
  var divTabla =
    '<div id="reducir-tabla" class="col-lg-12"><table class="table border border-primary"><thead><tr class="table-info border border-primary rounded"><th scope="col">#</th><th scope="col">Nombre</th><th scope="col">Descripción</th><th scope="col">Acciones</th></tr></thead><tbody id="body-categorias"></tbody></table></div><div id="tabla-extra" class="rounded"></div>';

  $("#tabla-row").append(divTabla);

  $("#consultar").on("click", function () {
    var htmlSpinner = '<div class="spinner mx-auto"></div>';
    $("#body-categorias").html(BORRARHTML);
    $("#spinner").append(htmlSpinner);

    $.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
      function (data) {
        $("#spinner").html("");
        $.each(data.categories, function (i, items) {
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
          $("#body-categorias").append(filaHtml);
        });
      }
    );
  });
});
