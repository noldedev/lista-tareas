const listContainer = document.querySelector("#list-container")
const inputBox = document.querySelector("#input-box")
const boton = document.querySelector("#boton");

const agregarTarea = () =>{
    if(inputBox.value === ""){
        alert("Por favor ingrese un dato");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value ="";
}

boton.addEventListener("click", agregarTarea);

inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      agregarTarea();
    }
  });

listContainer.addEventListener("click", (e) =>{
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})
