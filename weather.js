const API_KEY = "e001c360e380e962aae65ca7b9713afb";
//좌표 라는 뜻
const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // javascript에서 객체의 key값과 변수명을 같게 해서 object에 저장할 때는 아래와같이 :를 생략해버릴 수있다
        latitude,
        longitude
    };
    // console.log(coordsObject);
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Can't access geo location");

}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords ===null){
        askForCoords();
    } else {
        //get Weather
    }
}

function init(){
    loadCoords();

}

init();