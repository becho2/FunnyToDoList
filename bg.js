
// const UNSPLASH_API_KEY = "u6tWjbvOWBGP-qtcuKtMOlRSbJ-_mgw2UhmahMp6nMI";
const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(imgNumber){
    // const unsplash = unsplash.photos.getPhoto(`UNSPLASH_API_KEY`);
	// console.log('unsplash');
    const image = new Image();
    image.src = `imgs/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
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
