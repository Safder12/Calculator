// function saf() {

//     // alert("yes");

//     var a = 2;
//     var b = 3;
//     var c = a + b;
//     document.getElementsByClassName("safder")[0].innerHTML = c;

//     var ss = value;
//     document.getElementById("ali")[1].innerHTML = ss;

// }

    function cal(){
        var opr1 = document.getElementById("first").value;
        var opr2 = document.getElementById("Second").value;
        var ope = document.getElementById("oper").value;

    if (ope == "+"){
        var ss = parseInt(opr1) + parseInt(opr2);
    }
    // alert(ss);
    // document.getElementById("saf").value = ss

    if (ope == "-"){
        var ss = parseInt(opr1) - parseInt(opr2);
    }
    // alert(ss);

    if (ope == "*"){
        var ss = parseInt(opr1) * parseInt(opr2);
    }
    // alert(ss);

    if (ope == "/"){
        var ss = parseInt(opr1) / parseInt(opr2);
    }
    document.getElementById("saf").value = ss;    
}