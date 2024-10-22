function Add(){
    let input = document.getElementById("input");
    let ul = document.getElementById("to-list");
    if(input.value === ""){
        alert("Remplir le champs")
    }else{
        let li = document.createElement("li")
        li.textContent = input.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input.value = "";
}
let input = document.getElementById("input");
let ul = document.getElementById("to-list");

ul.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});
