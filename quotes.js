
const footer = document.querySelector('footer');

let quotes = [
    "넌 할 수 있어",
    "잠시 쉬어도 괜찮아",
    "내가 좋아하는 것을 해야 나 자신이 좋아진다",
    "나는 날마다 더 좋아지고 있다",
    "우리는 존재하는 그대로의 모습 자체로 이미 충분하며, 소원을 이루고 행복을 누리기에 충분한 존재입니다.",
    "나라도 내 말을 잘 들어주자",
    "나에게 맛있는 걸 먹여주자",
    "나에게 재밌는 걸 보여주자",
    "길은 잃어버리는 것이 아니며 헤매는 것은 길을 찾는 것이 아니며 그것이 길임을 알아가는 과정이지요 - 박해선",
    "사실 우리는 우리의 건강과 삶에 대해 우리가 배운 것보다 훨씬 큰 통제력을 갖고 있다. - <치유(HEAL)>, 켈리 누넌 고어스",
    "아무것도 할 수 없는 날이 딱 이틀 있다. 하나는 어제이고, 하나는 내일이다. 오늘이 바로 사랑하고, 믿고, 행하고, 무엇보다도 '살아갈' 바로 그날이다. - 달라이 라마"
]

const countQuotes = quotes.length;

function paintQuotes(random){
    footer.innerText = `${quotes[`${random}`]}`
}

function genRandomQuotes(){
    const randomQuotes = Math.floor(Math.random() * countQuotes);
    return randomQuotes;
}

function init(){
    const randomQuotesNum = genRandomQuotes();
    paintQuotes(randomQuotesNum);
}

init();
