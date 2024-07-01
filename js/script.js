const arrOfParagraphs = [];
let randomParagraph = "";
let word = "";
let wordPerMinute = 0;
let correctWords = 0
let errorCount = 0;
let characterCountTotal = 0
let arrOfParagraphWords;

const current_paragraph = document.querySelector(".current_paragraph");
const arrOfWords = [];

const minutesLeft = document.querySelector(".minutes");
const secondsLeft = document.querySelector(".seconds");

const word_per_minute = document.querySelector(".word_per_minute");
const accuracy = document.querySelector(".accuracy");
const error = document.querySelector(".error");
const characterCount = document.querySelector(".characterCount")

const start_button = document.querySelector(".start_button");
// const stop_button = document.querySelector(".stop_button");
const try_again_button = document.querySelector(".try_again_button");

const user_input = document.querySelector(".user_input");

async function fetchParagraph(url){
    const request = await fetch(url);
    const reponse = await request.json();
    return reponse
}

async function addParagraphToArr(){
    const obectOfParagraphs = await fetchParagraph("./text.json")
    for(let x in obectOfParagraphs){
        arrOfParagraphs.push(obectOfParagraphs[x]);
    }
}

function getRandomParagraph(arrName){
    let randomArrElementIndex = Math.floor(Math.random() * arrName.length);
    return arrName[randomArrElementIndex]
}

function countDownTimer(minutes, seconds){
    minutesLeft.textContent = minutes;
    secondsLeft.textContent = seconds;
    minutesLeft.textContent--
   if(seconds !== 0){
    let timerInterval = setInterval(()=>{
        secondsLeft.textContent--
        if(secondsLeft.textContent < '1'){
            minutesLeft.textContent--
            secondsLeft.textContent = seconds;
        }
        if(randomParagraph.split(" ").length === wordPerMinute){
            minutesLeft.textContent = minutes
            secondsLeft.textContent = seconds
            clearInterval(timerInterval);
            word_per_minute.textContent = wordPerMinute / 1;
            accuracy.textContent = Number.parseFloat(correctWords * 100 / Number(word_per_minute.textContent)).toFixed(1);
            error.textContent = errorCount;
            characterCount.textContent = characterCountTotal;
            alert("Well done, See your result")
        }

        if(minutesLeft.textContent < '0'){
            minutesLeft.textContent = minutes
            secondsLeft.textContent = seconds
            clearInterval(timerInterval);
            word_per_minute.textContent = wordPerMinute / 1;
            accuracy.textContent = Number.parseFloat(correctWords * 100 / Number(word_per_minute.textContent)).toFixed(1);
            error.textContent = errorCount;
            // console.log(arrOfWords[0].join(" ").length)
            characterCount.textContent = characterCountTotal;
            alert("Timer Done, See your result")
        }
    },1000)
   }else{
    minutesLeft.textContent = '1';
    secondsLeft.textContent = '00';
   }
}

addParagraphToArr()

setTimeout(()=>{
    randomParagraph = getRandomParagraph(arrOfParagraphs);
    arrOfParagraphWords = randomParagraph.split(" ");
    for(let x = 0; x < arrOfParagraphWords.length; x++){
        let span = document.createElement("span");
        span.setAttribute("class", `word${x}`);
        current_paragraph.append(span);
        span.textContent=`${" "}${arrOfParagraphWords[x]}`;
        arrOfWords.push(span)
    }
    // current_paragraph.textContent = arrOfParagraphLetters.join("")
    start_button.addEventListener("click", ()=>{
        countDownTimer(1, 59);
        start_button.style.display = "none"
        // stop_button.style.display = "block"
        try_again_button.style.display = "block";

        window.addEventListener("keydown", (event)=>{
            // console.log(event.key)
            if(event.key !== "Shift" && event.key !== "Control" && event.key !== "Backspace"  && event.key !== "Delete"  && event.key !== "Insert"  && event.key !== "Home"  && event.key !== "Alt" && event.key !== "CapsLock"){
                word += event.key;
                characterCountTotal += 1;
            }
        
            if(word.length === arrOfWords[0].textContent.trimStart().length && arrOfWords[0].style.background === ""){
                if(word === arrOfWords[0].textContent.trimStart()){
                    arrOfWords[0].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                    // console.log("yes1")
                }else{
                    // console.log(arrOfWords[0].style.background)
                    if(arrOfWords[0].style.background !== "lightgreen"){
                        arrOfWords[0].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[1].textContent.length &&  arrOfWords[0].style.background !== "" && arrOfWords[1].style.background === ""){
                if(word === arrOfWords[1].textContent){
                    arrOfWords[1].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                    // console.log("yes2")
                }else{
                    if(arrOfWords[1].style.background !== "lightgreen"){
                        arrOfWords[1].style.background = "red";
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[2].textContent.length &&  arrOfWords[1].style.background !== "" && arrOfWords[2].style.background === ""){
                if(word === arrOfWords[2].textContent){
                    arrOfWords[2].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                    // console.log("yes2")
                }else{
                    if(arrOfWords[2].style.background !== "lightgreen"){
                        arrOfWords[2].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[3].textContent.length &&  arrOfWords[2].style.background !== "" && arrOfWords[3].style.background === ""){
                if(word === arrOfWords[3].textContent){
                    arrOfWords[3].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[3].style.background !== "lightgreen"){
                        arrOfWords[3].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[4].textContent.length &&  arrOfWords[3].style.background !== "" && arrOfWords[4].style.background === ""){
                if(word === arrOfWords[4].textContent){
                    arrOfWords[4].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[4].style.background !== "lightgreen"){
                        arrOfWords[4].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[5].textContent.length &&  arrOfWords[4].style.background !== "" && arrOfWords[5].style.background === ""){
                if(word === arrOfWords[5].textContent){
                    arrOfWords[5].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[5].style.background !== "lightgreen"){
                        arrOfWords[5].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[6].textContent.length &&  arrOfWords[5].style.background !== "" && arrOfWords[6].style.background === ""){
                if(word === arrOfWords[6].textContent){
                    arrOfWords[6].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[6].style.background !== "lightgreen"){
                        arrOfWords[6].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[7].textContent.length &&  arrOfWords[6].style.background !== "" && arrOfWords[7].style.background === ""){
                if(word === arrOfWords[7].textContent){
                    arrOfWords[7].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[7].style.background !== "lightgreen"){
                        arrOfWords[7].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[8].textContent.length &&  arrOfWords[7].style.background !== "" && arrOfWords[8].style.background === ""){
                if(word === arrOfWords[8].textContent){
                    arrOfWords[8].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[8].style.background !== "lightgreen"){
                        arrOfWords[8].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[9].textContent.length &&  arrOfWords[8].style.background !== "" && arrOfWords[9].style.background === ""){
                if(word === arrOfWords[9].textContent){
                    arrOfWords[9].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[9].style.background !== "lightgreen"){
                        arrOfWords[9].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[10].textContent.length &&  arrOfWords[9].style.background !== "" && arrOfWords[10].style.background === ""){
                if(word === arrOfWords[10].textContent){
                    arrOfWords[10].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[10].style.background !== "lightgreen"){
                        arrOfWords[10].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[11].textContent.length &&  arrOfWords[10].style.background !== "" && arrOfWords[11].style.background === ""){
                if(word === arrOfWords[11].textContent){
                    arrOfWords[11].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[11].style.background !== "lightgreen"){
                        arrOfWords[11].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[12].textContent.length &&  arrOfWords[11].style.background !== "" && arrOfWords[12].style.background === ""){
                if(word === arrOfWords[12].textContent){
                    arrOfWords[12].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[12].style.background !== "lightgreen"){
                        arrOfWords[12].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[13].textContent.length &&  arrOfWords[12].style.background !== "" && arrOfWords[13].style.background === ""){
                if(word === arrOfWords[13].textContent){
                    arrOfWords[13].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[13].style.background !== "lightgreen"){
                        arrOfWords[13].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[14].textContent.length &&  arrOfWords[13].style.background !== "" && arrOfWords[14].style.background === ""){
                if(word === arrOfWords[14].textContent){
                    arrOfWords[14].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[14].style.background !== "lightgreen"){
                        arrOfWords[14].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[15].textContent.length &&  arrOfWords[14].style.background !== "" && arrOfWords[15].style.background === ""){
                if(word === arrOfWords[15].textContent){
                    arrOfWords[15].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[15].style.background !== "lightgreen"){
                        arrOfWords[15].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[16].textContent.length &&  arrOfWords[15].style.background !== "" && arrOfWords[16].style.background === ""){
                if(word === arrOfWords[16].textContent){
                    arrOfWords[16].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[16].style.background !== "lightgreen"){
                        arrOfWords[16].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[17].textContent.length &&  arrOfWords[16].style.background !== "" && arrOfWords[17].style.background === ""){
                if(word === arrOfWords[17].textContent){
                    arrOfWords[17].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[17].style.background !== "lightgreen"){
                        arrOfWords[17].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[18].textContent.length &&  arrOfWords[17].style.background !== "" && arrOfWords[18].style.background === ""){
                if(word === arrOfWords[18].textContent){
                    arrOfWords[18].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[18].style.background !== "lightgreen"){
                        arrOfWords[18].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[19].textContent.length &&  arrOfWords[18].style.background !== "" && arrOfWords[19].style.background === ""){
                if(word === arrOfWords[19].textContent){
                    arrOfWords[19].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[19].style.background !== "lightgreen"){
                        arrOfWords[19].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[20].textContent.length &&  arrOfWords[19].style.background !== "" && arrOfWords[20].style.background === ""){
                if(word === arrOfWords[20].textContent){
                    arrOfWords[20].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[20].style.background !== "lightgreen"){
                        arrOfWords[20].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[21].textContent.length &&  arrOfWords[20].style.background !== "" && arrOfWords[21].style.background === ""){
                if(word === arrOfWords[21].textContent){
                    arrOfWords[21].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[21].style.background !== "lightgreen"){
                        arrOfWords[21].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[22].textContent.length &&  arrOfWords[21].style.background !== "" && arrOfWords[22].style.background === ""){
                if(word === arrOfWords[22].textContent){
                    arrOfWords[22].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[22].style.background !== "lightgreen"){
                        arrOfWords[22].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[23].textContent.length &&  arrOfWords[22].style.background !== "" && arrOfWords[23].style.background === ""){
                if(word === arrOfWords[23].textContent){
                    arrOfWords[23].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[23].style.background !== "lightgreen"){
                        arrOfWords[23].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[24].textContent.length &&  arrOfWords[23].style.background !== "" && arrOfWords[24].style.background === ""){
                if(word === arrOfWords[24].textContent){
                    arrOfWords[24].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[24].style.background !== "lightgreen"){
                        arrOfWords[24].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[25].textContent.length &&  arrOfWords[24].style.background !== "" && arrOfWords[25].style.background === ""){
                if(word === arrOfWords[25].textContent){
                    arrOfWords[25].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[25].style.background !== "lightgreen"){
                        arrOfWords[25].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[26].textContent.length &&  arrOfWords[25].style.background !== "" && arrOfWords[26].style.background === ""){
                if(word === arrOfWords[26].textContent){
                    arrOfWords[26].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[26].style.background !== "lightgreen"){
                        arrOfWords[26].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[27].textContent.length &&  arrOfWords[26].style.background !== "" && arrOfWords[27].style.background === ""){
                if(word === arrOfWords[27].textContent){
                    arrOfWords[27].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[27].style.background !== "lightgreen"){
                        arrOfWords[27].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[28].textContent.length &&  arrOfWords[27].style.background !== "" && arrOfWords[28].style.background === ""){
                if(word === arrOfWords[28].textContent){
                    arrOfWords[28].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[28].style.background !== "lightgreen"){
                        arrOfWords[28].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[29].textContent.length &&  arrOfWords[28].style.background !== "" && arrOfWords[29].style.background === ""){
                if(word === arrOfWords[29].textContent){
                    arrOfWords[29].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[29].style.background !== "lightgreen"){
                        arrOfWords[29].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[30].textContent.length &&  arrOfWords[29].style.background !== "" && arrOfWords[30].style.background === ""){
                if(word === arrOfWords[30].textContent){
                    arrOfWords[30].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[30].style.background !== "lightgreen"){
                        arrOfWords[30].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[31].textContent.length &&  arrOfWords[30].style.background !== "" && arrOfWords[31].style.background === ""){
                if(word === arrOfWords[31].textContent){
                    arrOfWords[31].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[31].style.background !== "lightgreen"){
                        arrOfWords[31].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(word.length === arrOfWords[32].textContent.length &&  arrOfWords[31].style.background !== "" && arrOfWords[32].style.background === ""){
                if(word === arrOfWords[32].textContent){
                    arrOfWords[32].style.background = "lightGreen";
                    word = "";
                    wordPerMinute += 1;
                    correctWords += 1;
                    //word_per_minute.textContent = wordPerMinute / 1;
                }else{
                    if(arrOfWords[32].style.background !== "lightgreen"){
                        arrOfWords[32].style.background = "red"
                        word = "";
                        wordPerMinute += 1;
                        errorCount += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }
                }
            }
            if(arrOfWords[33] !== undefined){
                if(word.length === arrOfWords[33].textContent.length &&  arrOfWords[32].style.background !== "" && arrOfWords[33].style.background === ""){
                    if(word === arrOfWords[33].textContent){
                        arrOfWords[33].style.background = "lightGreen";
                        word = "";
                        wordPerMinute += 1;
                        correctWords += 1;
                        //word_per_minute.textContent = wordPerMinute / 1;
                    }else{
                        if(arrOfWords[33].style.background !== "lightgreen"){
                            arrOfWords[33].style.background = "red"
                            word = "";
                            wordPerMinute += 1;
                            errorCount += 1;
                            //word_per_minute.textContent = wordPerMinute / 1;
                        }
                    }
                }
                if(arrOfWords[34] !== undefined){
                    if(word.length === arrOfWords[34].textContent.length &&  arrOfWords[33].style.background !== "" && arrOfWords[34].style.background === ""){
                        if(word === arrOfWords[34].textContent){
                            arrOfWords[34].style.background = "lightGreen";
                            word = "";
                            wordPerMinute += 1;
                            correctWords += 1;
                            //word_per_minute.textContent = wordPerMinute / 1;
                        }else{
                            if(arrOfWords[34].style.background !== "lightgreen"){
                                arrOfWords[34].style.background = "red"
                                word = "";
                                wordPerMinute += 1;
                                errorCount += 1;
                                //word_per_minute.textContent = wordPerMinute / 1;
                            }
                        }
                    }
                    if(word.length === arrOfWords[35].textContent.length &&  arrOfWords[34].style.background !== "" && arrOfWords[35].style.background === ""){
                        if(word === arrOfWords[35].textContent){
                            arrOfWords[35].style.background = "lightGreen";
                            word = "";
                            wordPerMinute += 1;
                            correctWords += 1;
                            //word_per_minute.textContent = wordPerMinute / 1;
                        }else{
                            if(arrOfWords[35].style.background !== "lightgreen"){
                                arrOfWords[35].style.background = "red"
                                word = "";
                                wordPerMinute += 1;
                                errorCount += 1;
                                //word_per_minute.textContent = wordPerMinute / 1;
                            }
                        }
                    }
                    if(arrOfWords[36] !== undefined){
                        if(word.length === arrOfWords[36].textContent.length &&  arrOfWords[35].style.background !== "" && arrOfWords[36].style.background === ""){
                            if(word === arrOfWords[36].textContent){
                                arrOfWords[36].style.background = "lightGreen";
                                word = "";
                                wordPerMinute += 1;
                                correctWords += 1;
                                //word_per_minute.textContent = wordPerMinute / 1;
                            }else{
                                if(arrOfWords[36].style.background !== "lightgreen"){
                                    arrOfWords[36].style.background = "red"
                                    word = "";
                                    wordPerMinute += 1;
                                    errorCount += 1;
                                    //word_per_minute.textContent = wordPerMinute / 1;
                                }
                            }
                        }
                        if(arrOfWords[37] !== undefined){
                            if(word.length === arrOfWords[37].textContent.length &&  arrOfWords[36].style.background !== "" && arrOfWords[37].style.background === ""){
                                if(word === arrOfWords[37].textContent){
                                    arrOfWords[37].style.background = "lightGreen";
                                    word = "";
                                    wordPerMinute += 1;
                                    correctWords += 1;
                                    //word_per_minute.textContent = wordPerMinute / 1;
                                }else{
                                    if(arrOfWords[37].style.background !== "lightgreen"){
                                        arrOfWords[37].style.background = "red"
                                        word = "";
                                        wordPerMinute += 1;
                                        errorCount += 1;
                                        //word_per_minute.textContent = wordPerMinute / 1;
                                    }
                                }
                            }
                            if(arrOfWords[38] !== undefined){
                                if(word.length === arrOfWords[38].textContent.length &&  arrOfWords[37].style.background !== "" && arrOfWords[38].style.background === ""){
                                    if(word === arrOfWords[38].textContent){
                                        arrOfWords[38].style.background = "lightGreen";
                                        word = "";
                                        wordPerMinute += 1;
                                        correctWords += 1;
                                        //word_per_minute.textContent = wordPerMinute / 1;
                                    }else{
                                        if(arrOfWords[38].style.background !== "lightgreen"){
                                            arrOfWords[38].style.background = "red"
                                            word = "";
                                            wordPerMinute += 1;
                                            errorCount += 1;
                                            //word_per_minute.textContent = wordPerMinute / 1;
                                        }
                                    }
                                }
                                if(arrOfWords[39] !== undefined){
                                    if(word.length === arrOfWords[39].textContent.length &&  arrOfWords[38].style.background !== "" && arrOfWords[39].style.background === ""){
                                        if(word === arrOfWords[39].textContent){
                                            arrOfWords[39].style.background = "lightGreen";
                                            word = "";
                                            wordPerMinute += 1;
                                            correctWords += 1;
                                            //word_per_minute.textContent = wordPerMinute / 1;
                                        }else{
                                            if(arrOfWords[39].style.background !== "lightgreen"){
                                                arrOfWords[39].style.background = "red"
                                                word = "";
                                                wordPerMinute += 1;
                                                errorCount += 1;
                                                //word_per_minute.textContent = wordPerMinute / 1;
                                            }
                                        }
                                    }
                                    if(arrOfWords[40] !== undefined){
                                        if(word.length === arrOfWords[40].textContent.length &&  arrOfWords[39].style.background !== "" && arrOfWords[40].style.background === ""){
                                            if(word === arrOfWords[40].textContent){
                                                arrOfWords[40].style.background = "lightGreen";
                                                word = "";
                                                wordPerMinute += 1;
                                                correctWords += 1;
                                                //word_per_minute.textContent = wordPerMinute / 1;
                                            }else{
                                                if(arrOfWords[40].style.background !== "lightgreen"){
                                                    arrOfWords[40].style.background = "red"
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    errorCount += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }
                                            }
                                        }
                                        if(word.length === arrOfWords[41].textContent.length &&  arrOfWords[40].style.background !== "" && arrOfWords[41].style.background === ""){
                                            if(word === arrOfWords[41].textContent){
                                                arrOfWords[41].style.background = "lightGreen";
                                                word = "";
                                                wordPerMinute += 1;
                                                correctWords += 1;
                                                //word_per_minute.textContent = wordPerMinute / 1;
                                            }else{
                                                if(arrOfWords[41].style.background !== "lightgreen"){
                                                    arrOfWords[41].style.background = "red"
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    errorCount += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }
                                            }
                                        }
                                        if(word.length === arrOfWords[42].textContent.length &&  arrOfWords[41].style.background !== "" && arrOfWords[42].style.background === ""){
                                            if(word === arrOfWords[42].textContent){
                                                arrOfWords[42].style.background = "lightGreen";
                                                word = "";
                                                wordPerMinute += 1;
                                                correctWords += 1;
                                                //word_per_minute.textContent = wordPerMinute / 1;
                                            }else{
                                                if(arrOfWords[42].style.background !== "lightgreen"){
                                                    arrOfWords[42].style.background = "red"
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    errorCount += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }
                                            }
                                        }
                                        if(word.length === arrOfWords[43].textContent.length &&  arrOfWords[42].style.background !== "" && arrOfWords[43].style.background === ""){
                                            if(word === arrOfWords[43].textContent){
                                                arrOfWords[43].style.background = "lightGreen";
                                                word = "";
                                                wordPerMinute += 1;
                                                correctWords += 1;
                                                //word_per_minute.textContent = wordPerMinute / 1;
                                            }else{
                                                if(arrOfWords[43].style.background !== "lightgreen"){
                                                    arrOfWords[43].style.background = "red"
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    errorCount += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }
                                            }
                                        }
                                        if(word.length === arrOfWords[44].textContent.length &&  arrOfWords[43].style.background !== "" && arrOfWords[44].style.background === ""){
                                            if(word === arrOfWords[44].textContent){
                                                arrOfWords[44].style.background = "lightGreen";
                                                word = "";
                                                wordPerMinute += 1;
                                                correctWords += 1;
                                                //word_per_minute.textContent = wordPerMinute / 1;
                                            }else{
                                                if(arrOfWords[44].style.background !== "lightgreen"){
                                                    arrOfWords[44].style.background = "red"
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    errorCount += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }
                                            }
                                        }
                                        if(word.length === arrOfWords[45].textContent.length &&  arrOfWords[44].style.background !== "" && arrOfWords[45].style.background === ""){
                                            if(word === arrOfWords[45].textContent){
                                                arrOfWords[45].style.background = "lightGreen";
                                                word = "";
                                                wordPerMinute += 1;
                                                correctWords += 1;
                                                //word_per_minute.textContent = wordPerMinute / 1;
                                            }else{
                                                if(arrOfWords[45].style.background !== "lightgreen"){
                                                    arrOfWords[45].style.background = "red"
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    errorCount += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }
                                            }
                                        }
                                        if(word.length === arrOfWords[46].textContent.length &&  arrOfWords[45].style.background !== "" && arrOfWords[46].style.background === ""){
                                            if(word === arrOfWords[46].textContent){
                                                arrOfWords[46].style.background = "lightGreen";
                                                word = "";
                                                wordPerMinute += 1;
                                                correctWords += 1;
                                                //word_per_minute.textContent = wordPerMinute / 1;
                                            }else{
                                                if(arrOfWords[46].style.background !== "lightgreen"){
                                                    arrOfWords[46].style.background = "red"
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    errorCount += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }
                                            }
                                        }
                                        if(arrOfWords[47] !== undefined){
                                            if(word.length === arrOfWords[47].textContent.length &&  arrOfWords[46].style.background !== "" && arrOfWords[47].style.background === ""){
                                                if(word === arrOfWords[47].textContent){
                                                    arrOfWords[47].style.background = "lightGreen";
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    correctWords += 1;  
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }else{
                                                    if(arrOfWords[47].style.background !== "lightgreen"){
                                                        arrOfWords[47].style.background = "red"
                                                        word = "";
                                                        wordPerMinute += 1;
                                                        errorCount += 1;
                                                        //word_per_minute.textContent = wordPerMinute / 1;
                                                    }
                                                }
                                            }
                                            if(word.length === arrOfWords[48].textContent.length &&  arrOfWords[47].style.background !== "" && arrOfWords[48].style.background === ""){
                                                if(word === arrOfWords[48].textContent){
                                                    arrOfWords[48].style.background = "lightGreen";
                                                    word = "";
                                                    wordPerMinute += 1; 
                                                    correctWords += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }else{
                                                    if(arrOfWords[48].style.background !== "lightgreen"){
                                                        arrOfWords[48].style.background = "red"
                                                        word = "";
                                                        wordPerMinute += 1;
                                                        errorCount += 1;
                                                        //word_per_minute.textContent = wordPerMinute / 1;
                                                    }
                                                }
                                            }
                                            if(word.length === arrOfWords[49].textContent.length &&  arrOfWords[48].style.background !== "" && arrOfWords[49].style.background === ""){
                                                if(word === arrOfWords[49].textContent){
                                                    arrOfWords[49].style.background = "lightGreen";
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    correctWords += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }else{
                                                    if(arrOfWords[49].style.background !== "lightgreen"){
                                                        arrOfWords[49].style.background = "red"
                                                        word = "";
                                                        wordPerMinute += 1;
                                                        errorCount += 1;
                                                        //word_per_minute.textContent = wordPerMinute / 1;
                                                    }
                                                }
                                            }
                                            if(word.length === arrOfWords[50].textContent.length &&  arrOfWords[49].style.background !== "" && arrOfWords[50].style.background === ""){
                                                if(word === arrOfWords[50].textContent){
                                                    arrOfWords[50].style.background = "lightGreen";
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    correctWords += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }else{
                                                    if(arrOfWords[50].style.background !== "lightgreen"){
                                                        arrOfWords[50].style.background = "red"
                                                        word = "";
                                                        wordPerMinute += 1;
                                                        errorCount += 1;
                                                        //word_per_minute.textContent = wordPerMinute / 1;
                                                    }
                                                }
                                            }
                                            if(word.length === arrOfWords[51].textContent.length &&  arrOfWords[50].style.background !== "" && arrOfWords[51].style.background === ""){
                                                if(word === arrOfWords[51].textContent){
                                                    arrOfWords[51].style.background = "lightGreen";
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    correctWords += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }else{
                                                    if(arrOfWords[51].style.background !== "lightgreen"){
                                                        arrOfWords[51].style.background = "red"
                                                        word = "";
                                                        wordPerMinute += 1;
                                                        errorCount += 1;
                                                        //word_per_minute.textContent = wordPerMinute / 1;
                                                    }
                                                }
                                            }
                                            if(word.length === arrOfWords[52].textContent.length &&  arrOfWords[51].style.background !== "" && arrOfWords[52].style.background === ""){
                                                if(word === arrOfWords[52].textContent){
                                                    arrOfWords[52].style.background = "lightGreen";
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    correctWords += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }else{
                                                    if(arrOfWords[52].style.background !== "lightgreen"){
                                                        arrOfWords[52].style.background = "red"
                                                        word = "";
                                                        wordPerMinute += 1;
                                                        errorCount += 1;
                                                        //word_per_minute.textContent = wordPerMinute / 1;
                                                    }
                                                }
                                            }
                                            if(word.length === arrOfWords[53].textContent.length &&  arrOfWords[52].style.background !== "" && arrOfWords[53].style.background === ""){
                                                if(word === arrOfWords[53].textContent){
                                                    arrOfWords[53].style.background = "lightGreen";
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    correctWords += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }else{
                                                    if(arrOfWords[53].style.background !== "lightgreen"){
                                                        arrOfWords[53].style.background = "red"
                                                        word = "";
                                                        wordPerMinute += 1;
                                                        correctWords += 1;
                                                        errorCount += 1;
                                                        //word_per_minute.textContent = wordPerMinute / 1;
                                                    }
                                                }
                                            }
                                            if(word.length === arrOfWords[54].textContent.length &&  arrOfWords[53].style.background !== "" && arrOfWords[54].style.background === ""){
                                                if(word === arrOfWords[54].textContent){
                                                    arrOfWords[54].style.background = "lightGreen";
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    correctWords += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }else{
                                                    if(arrOfWords[54].style.background !== "lightgreen"){
                                                        arrOfWords[54].style.background = "red"
                                                        word = "";
                                                        wordPerMinute += 1;
                                                        errorCount += 1;
                                                        //word_per_minute.textContent = wordPerMinute / 1;
                                                    }
                                                }
                                            }
                                            if(word.length === arrOfWords[55].textContent.length &&  arrOfWords[54].style.background !== "" && arrOfWords[55].style.background === ""){
                                                if(word === arrOfWords[55].textContent){
                                                    arrOfWords[55].style.background = "lightGreen";
                                                    word = "";
                                                    wordPerMinute += 1;
                                                    correctWords += 1;
                                                    //word_per_minute.textContent = wordPerMinute / 1;
                                                }else{
                                                    if(arrOfWords[55].style.background !== "lightgreen"){
                                                        arrOfWords[55].style.background = "red"
                                                        word = "";
                                                        wordPerMinute += 1;
                                                        errorCount += 1;
                                                        //word_per_minute.textContent = wordPerMinute / 1;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            // console.log(arrOfWords[0].textContent)
            // console.log(event.key)
        })
    })
    // console.log(arrOfWords)
    // console.log(arrOfParagraphWords.length)
},1050)

word_per_minute.textContent = wordPerMinute

// stop_button.addEventListener("click", ()=>{
//     countDownTimer(0, 0);
//     stop_button.style.display = "none";
// })

try_again_button.addEventListener("click", ()=>{
    window.location.reload()
})

// window.addEventListener("keydown",(event)=>{
//     console.log(event.key)
// })