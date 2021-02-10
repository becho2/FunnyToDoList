const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

// form과 input을 이미 greeting.js 에서 사용했으므로, const선언은 같은 이름을 쓰면 충돌함.
// 모듈을 분리하면 괜찮은데 그 방법은 유튜브클론 강의에 있다고 함.

const TODOS_LS = 'toDos';

// function saveToDos(text){
//     localStorage.setItem(TODOS_LS, text);
// }

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.value = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentToDoValue = toDoInput.value;
    paintToDo(currentToDoValue);
    // saveToDos(currentToDoValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        // toDoList.innerText = `${toDos}`;
    }

}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();
