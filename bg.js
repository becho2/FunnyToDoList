
const UNSPLASH_API_KEY = "u6tWjbvOWBGP-qtcuKtMOlRSbJ-_mgw2UhmahMp6nMI";
const PEXELS_API_KEY = "563492ad6f91700001000001eb1ada34adf94785a7842601fbf05d6d";
const body = document.querySelector("body");


function getBgImage(lat, lon){
    //데이터를 얻는 방법은 간단해 fetch를 이용하면 돼 
    fetch(
        `https://api.pexels.com/v1`
    ).then(function (response){
        console.log(response);
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

// function handleImgLoad(){
//     console.log("finished log")
// }

function paintImage(imgNumber){
    const unsplash = unsplash.photos.getPhoto(`UNSPLASH_API_KEY`);

	console.log('unsplash');
    const image = new Image();
    // image.src = `https://source.unsplash.com/category/nature/weekly`;
    image.classList.add("bgImage");
    body.appendChild(image);
    // image.addEventListener("loadend",handleImgLoad)

    // body.style.backgroundRepeat = "no-repeat";
    // body.style.backgroundImage = `url('imgs/${imgNumber + 1}.jpg')`;
    // body.style.backgroundSize = "100%";
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    getBgImage();
}

init();
