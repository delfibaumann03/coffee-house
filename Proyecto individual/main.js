function validar(){
    var form=document.form;
    
    if(form.Nombre.value==0){
        alert("Por favor introduzca un nombre");
        form.Nombre.value="";
        form.Nombre.focus();
        return false;
    }

    if(form.Apellido.value==0){
        alert("Por favor introduzca un apellido");
        form.Apellido.value="";
        form.Apellido.focus();
        return false;
    }

    if(form.Contraseña.value==0){
        alert("Por favor introduzca una contraseña");
        form.Contraseña.value="";
        form.Contraseña.focus();
        return false;
    }

    alert("Tu cuenta fue creada exitosamente");
    form.submit();
}