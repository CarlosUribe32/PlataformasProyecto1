function guardarLocalS(email, username, pass){
    if(email == "" || email == null || username == "" || username == null || pass == "" || pass == null){
        alert("Ingrese todos los campos");
        return;
    }
    var a = localStorage.getItem(email);
    if(a != null){
        alert("Este correo ya esta resgistrado");
        return;
    }
    a = localStorage.getItem(username);
    if(a != null){
        alert("Este usuario ya esta resgistrado");
        return;
    }
    localStorage.setItem(email, username);
    localStorage.setItem(username, pass);
    alert(localStorage.getItem(email)+", tu registro se hizo correctamente");

    window.open('','_parent','');
    window.close();
    window.open("login.html");
}

function ingresarLocalS(username, pass){
    if(username == "" || username == null || pass == "" || pass == null){
        alert("Ingrese todos los campos");
        return;
    }
    var a = localStorage.getItem(username);
    if (a == null){
        alert("Aun no estas registrado");
        window.open('','_parent','');
        window.close();
        window.open("registro.html");
        return;
    }
    else if(a==pass){
        alert("Bienvenido "+username);
        window.open('','_parent','');
        window.close();
        window.open("galeria.html");
    }
    else{
        alert("Contraseña incorrecta");
        return;
    }
}

function recordar(username, email){
    if(username == "" || username == null || email == "" || email == null){
        alert("Ingrese todos los campos");
        return;
    }
    var a = localStorage.getItem(username);
    var b = localStorage.getItem(email);
    if(a==null){
        alert("Este usuario no esta registrado");
        return;
    }
    else if(b == null){
        alert("Este correo no esta registrado");
        return;
    }
    else if (b != username){
        alert("El correo y el username no concuerdan");
        return;
    }
    else {
        alert(username+", la contraseña es "+a);
        window.open('','_parent','');
        window.close();
        window.open("login.html");
    }
}