function verMas(nombreCategoria) {
  const BORRARHTML = "";
  var tabla =
    '<table class="table rounded"><thead><tr class="table-info"><th scope="col">#</th><th scope="col">Preparación</th><th scope="col">Imagen</th></tr></thead><tbody id="body-preparaciones"></tbody></table>';
  $("#tabla-extra").html(BORRARHTML);
  $("#reducir-tabla").removeClass("col-lg-12").addClass("col-lg-6");
  $("#tabla-extra").addClass("col-lg-6").html(tabla);
  var htmlSpinner = '<div class="spinner mx-auto"></div>';
  $("#spinner").append(htmlSpinner);
  $.get(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + nombreCategoria,
    function (data) {
      $("#spinner").html("");
      var divNuevaTabla = '<div id="tabla-extra" class="col-lg-6"></div>';

      $("#tabla-row-2").append(divNuevaTabla);
      $("#body-preparaciones").html(BORRARHTML);
      $.each(data.meals, function (i, items2) {
        var filaHtml =
          '<tr><th scope="row">' +
          (i + 1) +
          "</th><td>" +
          items2.strMeal +
          '</td><td><img src="' +
          items2.strMealThumb +
          '" width="100"></td></tr>';
        $("#body-preparaciones").append(filaHtml);
      });
      divNuevaTabla += "";
      //$("#tabla-row").html(BORRARHTML);
    }
  );
}
