function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && "password" == "admin1234"){
        alert("Login successfully");
        return false;
    
    }
    else{
        alert("Login failed");
    }
    
}