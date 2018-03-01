$(document).ready(function () {


    //Cuando hace click en next
    $("#comment").keyup(function () {
        var comment = this.value;
        //  console.log(comment);
        $("#preview").html(comment);
    }); //final de boton 1 (singup)




    //Cuando hace click en clase .mod
    $(".mod").click(function () {
        var petition = (this.dataset.function);
        var element = document.getElementById("preview");
        if (petition === "large") {
            var baseFont = $('#preview').css('font-size');
            baseFont = parseInt(baseFont, 10);
            $('#preview').css('font-size', baseFont * 1.5);
        } //final de large
        if (petition === "medium") {
            var baseFont = $('#preview').css('font-size');
            baseFont = parseInt(baseFont, 10);
            $('#preview').css('font-size', baseFont - 1.5);
        } //final de large
        if (petition === "small") {
            var baseFont = $('#preview').css('font-size');
            baseFont = parseInt(baseFont, 10);
            $('#preview').css('font-size', baseFont / 2.5);
        } //final de large
        if (petition === "colortext") {
            var color =  prompt("Coloca aquí el color que quieres usar");
            $('#preview').css('color', color);
          } //final de large
          if (petition === "colorback") {
            var color =  prompt("Coloca aquí el color que quieres usar");
            $('#preview').css('background-color', color);
          } //final de large
          if (petition === "left") {
            $('#preview').css('text-align', "left");
          } //final de large
          if (petition === "center") {
            $('#preview').css('text-align', "center");
          } //final de large
          if (petition === "right") {
            $('#preview').css('text-align', "right");
          } //final de large
    }); //final de click mod



});