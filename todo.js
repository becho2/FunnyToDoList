const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

// form과 input을 이미 greeting.js 에서 사용했으므로, const선언은 같은 이름을 쓰면 충돌함.
// 모듈을 분리하면 괜찮은데 그 방법은 유튜브클론 강의에 있다고 함.

const TODOS_LS = 'toDos';
const toDos = [];

function saveToDos(array){
 
    // toDos = toDos.push(text);
    // console.log(toDos);
    localStorage.setItem(TODOS_LS, JSON.stringify(array));
} 
//혼자 해보려다 실패

function handleDelBtn(event){
    const currentToDo_li = event.target.id;
    currentToDo_li.remove();

}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");    
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(toDos);
}

function handleSubmit(event){
    event.preventDefault();
    const currentToDoValue = toDoInput.value;
    paintToDo(currentToDoValue);
    // saveToDos(currentToDoValue); 
    toDoInput.value = "";
}

function loadToDos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null){
        // toDoList.innerText = `${toDos}`;
    }

}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
 
    toDoList.addEventListener("click", handleDelBtn);
}
init();
