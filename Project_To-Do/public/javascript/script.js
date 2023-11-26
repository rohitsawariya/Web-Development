    const inputBox = document.getElementById('input-box');
const ul = document.getElementById("ul");

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
inputBox.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
ul.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData() {
    localStorage.setItem("data",ul.innerHTML);
}
function showTask() {
    ul.innerHTML = localStorage.getItem("data");
}
showTask();
