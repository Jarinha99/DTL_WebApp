var count = new Number();
var count = 1;

function start(){
    if((count - 1) >= 0){
        count = count - 1;
        if(count == 0){
            window.location.replace("Game.html");
        }
        if(count > 0){
            $("#DivCronometro h5").fadeIn(500);
            $("#DivCronometro h5").fadeOut(500);
        }
        else{
            $("#DivCronometro h5").fadeIn(500);
        }
        $("h5").html(count);
        setTimeout('start();',1000);
    }
}       


