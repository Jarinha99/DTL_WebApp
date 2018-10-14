titulo = localStorage.getItem("titulo");
estilo = localStorage.getItem("estilo");
nota = localStorage.getItem("nota");


function Preencher1() {
    $("#ImgStar1").attr("src", "Images/estrela-v1.png");
    $("#ImgStar2").attr("src", "Images/estrela-v2.png");
    $("#ImgStar3").attr("src", "Images/estrela-v2.png");
    $("#ImgStar4").attr("src", "Images/estrela-v2.png");
    $("#ImgStar5").attr("src", "Images/estrela-v2.png");
    localStorage.setItem("nota", 1);
    nota = localStorage.getItem("nota");
    console.log(nota)

    finalizaVoto()
}
function Preencher2() {
    $("#ImgStar1").attr("src", "Images/estrela-v1.png");
    $("#ImgStar2").attr("src", "Images/estrela-v1.png");
    $("#ImgStar3").attr("src", "Images/estrela-v2.png");
    $("#ImgStar4").attr("src", "Images/estrela-v2.png");
    $("#ImgStar5").attr("src", "Images/estrela-v2.png");
    localStorage.setItem("nota", 2);
    nota = localStorage.getItem("nota");
    console.log(nota)

    finalizaVoto()
}
function Preencher3() {
    $("#ImgStar1").attr("src", "Images/estrela-v1.png");
    $("#ImgStar2").attr("src", "Images/estrela-v1.png");
    $("#ImgStar3").attr("src", "Images/estrela-v1.png");
    $("#ImgStar4").attr("src", "Images/estrela-v2.png");
    $("#ImgStar5").attr("src", "Images/estrela-v2.png");
    localStorage.setItem("nota", 3);
    nota = localStorage.getItem("nota");
    console.log(nota)

    finalizaVoto()
}
function Preencher4() {
    $("#ImgStar1").attr("src", "Images/estrela-v1.png");
    $("#ImgStar2").attr("src", "Images/estrela-v1.png");
    $("#ImgStar3").attr("src", "Images/estrela-v1.png");
    $("#ImgStar4").attr("src", "Images/estrela-v1.png");
    $("#ImgStar5").attr("src", "Images/estrela-v2.png");
    localStorage.setItem("nota", 4);
    nota = localStorage.getItem("nota");
    console.log(nota)

    finalizaVoto()

}
function Preencher5() {
    $("#ImgStar1").attr("src", "Images/estrela-v1.png");
    $("#ImgStar2").attr("src", "Images/estrela-v1.png");
    $("#ImgStar3").attr("src", "Images/estrela-v1.png");
    $("#ImgStar4").attr("src", "Images/estrela-v1.png");
    $("#ImgStar5").attr("src", "Images/estrela-v1.png");
    localStorage.setItem("nota", 5);
    nota = localStorage.getItem("nota");
    console.log(nota)

    finalizaVoto()

}

function finalizaVoto(){

    // Salvando dados via API
    var form = new FormData();
    form.append("nome", titulo);
    form.append("estilo", estilo);
    form.append("nota", nota);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://127.0.0.1:8000/registro/",
        "method": "POST",
        "headers": {
            "Cache-Control": "no-cache",
            "Postman-Token": "b598e1aa-8f4d-4da3-acab-9d8aabc1b4d7"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
    }
    console.log(form)
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    // Retornar Ao inicio
    // window.location.replace("Index.html");

}