function verNome(){
    let aon = document.getElementById("Nome").value;
      if(aon == null || aon == ""){
          aux6=document.getElementById("Nome").style.backgroundColor = "Red";
          document.getElementById("erroNome").innerHTML = "Digite seu Nome";
          document.getElementById("erroNome").style.color = "Red";
      }
      else{
          document.getElementById("Nome").style.backgroundColor = "white";
          document.getElementById("erroNome").style.borderColor = "white";
          document.getElementById("erroNome").style.backgroundColor = "white";
      }
  }
function KeyNome(){
    let aux = document.getElementById("Nome").value;
     if(aux.match(/[0-9]/gi)){
       document.getElementById("erroNome").style.color = "rgb(255, 28, 28)";
       document.getElementById("erroNome").innerHTML = "Digite apenas letras";
     }
     else{
      document.getElementById("Nome").style.backgroundColor = "white";
         document.getElementById("erroNome").innerHTML = "";
     }
     aux = aux.replace(/[^a-z]/gi , "");
     document.getElementById("Nome").value = aux;
 }
 function verEmail() {
    var aux5 = document.getElementById("Imail").value;
    aux5.trim();
    if (aux5 == null || aux5 == "") {
        document.getElementById("Imail").style.backgroundColor = "Red";
        document.getElementById("erroI").innerHTML = "Digite seu Email";
        document.getElementById("erroI").style.color = "Red";
    }
    else {
        if (aux5.match(/[@]/g) && aux5.match(/[gmail hotmail outlook]/g) && aux5.includes(".com")) {
            document.getElementById("Imail").style.borderColor = "white";
            document.getElementById("Imail").style.backgroundColor = "white";
            document.getElementById("erroI").style.color = "Green";
            document.getElementById("erroI").innerHTML = "Confirmado";
        }
        else {
            document.getElementById("Imail").style.backgroundColor = "Red";
            document.getElementById("Imail").style.borderColor = "Red"
            document.getElementById("erroI").innerHTML = "Digite corretamente";
            document.getElementById("erroI").style.color = "Red";
        }
    }
}