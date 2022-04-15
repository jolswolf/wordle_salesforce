({
    setPalabra: function(component, event, helper) {
        document.getElementById("jugando").innerHTML = "0";
        document.getElementById("vidas").innerHTML = "6";
        var palabraCorrecta = event.getParam("palabraCorrecta");
        document.getElementById("palabraCheck").innerHTML = palabraCorrecta;
    },

    comprobarPalabra : function(component, event, helper) {
        var palabra =  component.find("palabra").getElement().value;
        var palabraCorrecta = document.getElementById("palabraCheck").innerHTML;
        var vidas = document.getElementById("vidas").innerHTML;
        var jugandoNum = document.getElementById("jugando").innerHTML;
        var jugando = false;
        if (jugandoNum == "0") {
            jugando = true;
        }

        palabra = palabra.toLowerCase();
        palabraCorrecta = palabraCorrecta.toLowerCase();

        var palabraDescompuesta = [...palabra];
        var palabraCorrectaDescompuesta = [...palabraCorrecta];

        tablero = document.getElementById("tablero");

        console.log(palabraCorrecta);   
        if (jugando){
            if(palabra == palabraCorrecta){
                console.log("Palabra correcta");
                alert("Palabra correcta!!!");
            }else{
                console.log("Palabra incorrecta");
                palabraDescompuesta.forEach(function (letra, count){
                    if (letra == palabraCorrectaDescompuesta[count]) {
                        palabraCorrectaDescompuesta[count] = "1";
                        tablero.innerHTML += "<span style='background-color: green;'>" + letra + "</span>";
                    }else if (palabraCorrecta.includes(letra)) {
                        palabraCorrectaDescompuesta[count] = "2"; 
                        tablero.innerHTML += "<span style='background-color: red;'>" + letra + "</span>";
                    }else{
                        tablero.innerHTML += "<span>" + letra + "</span>";
                    }
                });
                tablero.innerHTML += "<br/>";
                console.log(palabraCorrectaDescompuesta);
                vidas--;
                document.getElementById("vidas").innerHTML = vidas;
                if(vidas == 0){
                    alert("Perdiste!!!");
                    jugando = false;
                    document.getElementById("jugando").innerHTML = "1";
                    tablero.innerHTML += "<span style='background-color: black;'>00000000000000</span>";
                    tablero.innerHTML += "<br/>";
                }
            }
        }else{
            alert("No tienes vida!!!");
        }
    }
})
