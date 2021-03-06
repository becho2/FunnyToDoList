const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

// form과 input을 이미 greeting.js 에서 사용했으므로, const선언은 같은 이름을 쓰면 충돌함.
// 모듈을 분리하면 괜찮은데 그 방법은 유튜브클론 강의에 있다고 함.

const TODOS_LS = 'toDos';
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
} 
//혼자 해보려다 실패

// function handleDelBtn(event){
//     const currentToDosId = event.target.id;
//     const currentToDosLi = toDoList.querySelector(`#${currentToDosId}`);
//     // currentToDosLi.remove();
//     // toDos.splice()
// }
// function filterFn(toDo){
//     return toDo.id === 1;
// }

function deleteToDo(event){
    // console.dir(event);
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    // console.log(toDoList);
    // console.dir(toDoList);
    toDoList.removeChild(li);
    // console.log(li.id);
    const cleanToDos = toDos.filter(function(toDo){

        return toDo.id !== parseInt(li.id);
    });
    // console.log(cleanToDos);
    // cleanToDos가 의도한대로 클릭된 것을 제외한 Array로 나오는 걸 확인했으니, ToDos를 replace해준다.
    // 이를 위해 const로 선언했던 toDos를 let으로 바꿔준다
    toDos = cleanToDos; 
    // console.log(toDos);
    saveToDos();
    // localStorage.setItem(TODOS_LS, JSON.stringify(cleanToDos));
    // loadToDos();
 
    // const deleteLi = event.target.parentNode;
    // deleteLi.remove();
    // const currentToDosId = event.target.id;
    
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");    
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
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
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentToDoValue = toDoInput.value;
    paintToDo(currentToDoValue);
    // saveToDos(currentToDoValue); 
    toDoInput.value = "";
}

// function paintParsedToDo(toDo){
//     paintToDo(toDo.text);
// }

function loadToDos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null){
        // toDoList.innerText = `${toDos}`;
        // JSON형태로 저장돼있는 ToDos array를 다시 javascript 데이터타입으로 가져오자
        const parsedToDos = JSON.parse(loadedTodos);
        // foreach의 괄호 안에 바로 함수를 만들기
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    // toDoList.addEventListener("click", handleDelBtn);
}
init();
