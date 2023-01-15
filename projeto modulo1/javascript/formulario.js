function verCPF() {
    var aux2 = document.getElementById("CPF").value;
    aux2 = aux2.trim();
    if (aux2 == null || aux2 == "" && aux2.match(/[,*&!@#$%¨"'';:|_]/g)) {
        document.getElementById("CPF").style.backgroundColor = "Red";
        document.getElementById("erroCPF").innerHTML = "Digite seu CPF";
        document.getElementById("erroCPF").style.color = "Red";
    }
    else {
        if (aux2.match(/[0-9.-]/g)) {
            document.getElementById("CPF").style.borderColor = "green";
            document.getElementById("CPF").style.backgroundColor = "white";
            document.getElementById("erroCPF").style.color = "Green";
            document.getElementById("erroCPF").innerHTML = "Confirmado";
            document.getElementById("CPF").value = aux2.substring(0 , 3)+ "." + aux2.substring(3,6) + "." + aux2.substring(6,9)+ "-" + aux2.substring(9);
            
        }
        else {
            document.getElementById("CPF").style.backgroundColor = "Red";
            document.getElementById("CPF").style.borderColor = "Red"
            document.getElementById("erroCPF").innerHTML = "Digite caracters validos";
            document.getElementById("erroCPF").style.color = "Red";
        }
    }
}
function cpfkey(){
    var aux2 = document.getElementById("CPF").value;
            aux2 = aux2.replace(/[a-z]/gi , "");
            aux2 = aux2.replace(".","");
            aux2 = aux2.replace("--","");
            aux2 = aux2.replace("-","");
            document.getElementById("CPF").value = aux2;
}
function verTel() {
    var aux3 = document.getElementById("Tel").value;
    if (aux3 == null || aux3 == "" && aux3.match(/[,*&!@#$%¨"'';:|.-_]/g)) {
        document.getElementById("Tel").style.backgroundColor = "Red";
        document.getElementById("erroT").innerHTML = "Digite seu Telefone";
        document.getElementById("erroT").style.color = "Red";
    }
    else {
        if (aux3 >= 0) {
            document.getElementById("Tel").style.borderColor = "white";
            document.getElementById("Tel").style.backgroundColor = "white";
            document.getElementById("erroT").style.color = "Green";
            document.getElementById("erroT").innerHTML = "Confirmado";
            document.getElementById("Tel").value= aux3.substring(0,0) + "(" + aux3.substring(0,2)+ ") " + aux3.substring(2,7) +"-" + aux3.substring(7)
        }
        else {
            document.getElementById("Tel").style.backgroundColor = "Red";
            document.getElementById("Tel").style.borderColor = "Red"
            document.getElementById("erroT").innerHTML = "Digite caracters validos";
            document.getElementById("erroT").style.color = "Red";
        }
    }
}
function Telkey(){
    aux3 = document.getElementById("Tel").value;
    aux3 = aux3.replace(/[a-z]/g , "");
    aux3 = aux3.replace("(" , "");
    aux3 = aux3.replace(")" , "");
    aux3 = aux3.replace("-","");
    aux3 = aux3.replace(".","");
    document.getElementById("Tel").value = aux3;
}