var fonteGrande = false;

$("#aumentar-fonte").click(function() {
  if (fonteGrande) {
    $("body").css("font-size", "100%");
    $("#mp").css("padding", "14px 0");
    $(this).css("background", "#fff");
    fonteGrande = false;
  } else {
    $("body").css("font-size", "125%");
    $("#mp").css("padding", "10px 0");
    $("#linha3").css("height", "350px");
    $(this).css("background", "#ccc");
    fonteGrande = true;
  }
});

$("#diminuir-fonte").click(function() {
});
