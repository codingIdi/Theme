const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");




// Check and apply saved theme on page load
document.addEventListener("DOMContentLoaded", () =>{
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme == "light"){
        applylightTheme();
        
    }else{
        applydarkTheme();
    }
})

toggle.addEventListener("click", function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle("bi-brightness-high-fill")){
       applylightTheme();
       localStorage.setItem("theme", "light"); //save light theme
        
    }else{
        applydarkTheme();
        localStorage.setItem("theme", "dark"); //save dark theme
        


    }
    
})

function applylightTheme(){
    body.style.background = "white";
    body.style.color ="black";
    body.style.transition = "2s";
    toggle.classList.remove("bi-moon");
    toggle.classList.add("bi-brightness-high-fill");
}

function applydarkTheme(){
    body.style.background = "black";
        body.style.color = "white"
        body.style.transition = "2s";
        toggle.classList.remove("bi-brightness-high-fill");
        toggle.classList.add("bi-moon");

}