
const UNSPLASH_API_KEY = "u6tWjbvOWBGP-qtcuKtMOlRSbJ-_mgw2UhmahMp6nMI";
const body = document.querySelector("body");

const IMG_NUMBER = 3;


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
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
