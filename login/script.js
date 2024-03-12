function login(){
    var userNome = $('#user').val();
    var password = $('#password').val();
    

    if(userNome && password && userNome === "vitor" && password === "admin"){
        const userNome ={
            name: userNome,
            entrydate: new Date(),
            id: Math.floor(Math.random() * 100000),
        }

        localStorage.setItem("user", JSON.stringify(userNome))
        window.location.href = "#"
        console.log("deu boa")
    }else{
        document.getElementById("error-modal").style.display = "flex";
        document.getElementById("user").style.display = "2px solid red";
        document.getElementById("password").style.display = "2px solid red";
    }
}

function closeError(){
    document.getElementById("error-modal").style.display = "flex";
    document.getElementById("user").style.display = "2px solid rgb(173, 20, 54)";
    document.getElementById("password").style.display = "2px solid rgb(173, 20, 54)";
}

function showpassword(){
    var inputPassword = document.querySelector('#password')

    if(inputPassword.getAttribute("type") === "password"){
        inputPassword.setAttribute("type", "text")
    } else{
        inputPassword.setAttribute("type", "password")
    }
}
    
function format(intem){
    var options = {
        month:"numeric",
        day:"numeric",
        hour: "numeric",
        minute:"numeric",
        second:"numeric",
    }
    return intem.toLocaleString("pt-BR",options)
}