//todos os elementos pego do dom
const tambe = document.getElementById("tambe_song")
const name_song = document.getElementById("name_song")
const name_band = document.getElementById("name_band")
const liked = document.getElementById("liked")
const barra_progress = document.getElementById("box-barra")
const progres_barra = document.getElementById("progresso")
const time_duration = document.getElementById("duration")
const timetotal = document.getElementById("currenttime")
const button_return = document.getElementById("song_return")
const button_repeat = document.getElementById("repeat")
const button_play = document.getElementById("play")
const button_advant = document.getElementById("advant")
const button_shuffle = document.getElementById("shuffle")
const song = document.getElementById("song")
const button_backgrond = document.getElementById("backgrond")
const effect_img = document.getElementById("button_background")

//coleção de musicas

let original_coleção_song = [
    {name_song : "You", name_band : "Axol x Alex Skrindo", image : "img_song/IMG7.png", song : "song/Axol x Alex Skrindo - You.m4a", liked : false},

    {name_song : "Invincible", name_band : "DEAF KEV", image : "img_song/IMG1.png", song : "song/DEAF KEV - Invincible [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "My Heart", name_band : "Different Heaven", image : "img_song/IMG9.png", song : "song/Different Heaven _ EH_DE - My Heart [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Nekozilla", name_band : "Different Heaven", image : "img_song/IMG2.png", song : "song/Different Heaven - Nekozilla [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Contacreast", name_band : "Diviners feat", image : "img_song/IMG3.png", song : "song/Diviners feat. Contacreast - Tropic Love [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Sky High", name_band : "Elektronomia", image : "img_song/IMG4.png", song : "song/Elektronomia - Sky High [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Pill", name_band : "Heuse _ Zeus x Crona", image : "img_song/IMG5.png", song : "song/Heuse _ Zeus x Crona - Pill (feat. Emma Sameth) [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Heroes Tonight", name_band : "Janji", image : "img_song/IMG6.png", song : "song/Janji - Heroes Tonight (feat. Johnning) [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Popsicle", name_band : "LFZ", image : "img_song/IMG7.png", song : "song/LFZ - Popsicle[NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Fearless", name_band : "Lost Sky", image : "img_song/IMG8.png", song : "song/Lost Sky - Fearless [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Zookeepers", name_band : "Ship Wrek", image : "img_song/IMG9.png", song : "song/Ship Wrek _ Zookeepers - Ark [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Cradles", name_band : "Sub Urban", image : "img_song/IMG10.png", song : "song/Sub Urban - Cradles [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Feel Good", name_band : "Syn Cole", image : "img_song/IMG11.png", song : "song/Syn Cole - Feel Good [NCS Release](M4A_128K).m4a", liked : false},

    {name_song : "Be Together", name_band : "Zaza", image : "img_song/IMG4.png", song : "song/Zaza - Be Together [NCS Release](M4A_128K).m4a", liked : false},
];

let copia_coleção_song = [...original_coleção_song]
let its_playing = false;

let repeat = false;

let index = 0;

let ramdom = false;

let onbackground = false;


song.src = copia_coleção_song[index].song
name_song.innerText = copia_coleção_song[index].name_song
name_band.innerText = copia_coleção_song[index].name_band
tambe.src = copia_coleção_song[index].image
HHMMSS(song.duration)


function inicio () {
    song.src = copia_coleção_song[index].song
    name_song.innerText = copia_coleção_song[index].name_song
    name_band.innerText = copia_coleção_song[index].name_band
    tambe.src = copia_coleção_song[index].image
    HHMMSS(song.duration)
    cheklike()

   if(its_playing === true){
       song.play()
    }
}
function songplay() {
    if(its_playing === false){

        song.play()
        button_play.innerHTML = `<img src="img/pause-circle.svg" alt="">`
        its_playing = true
    }else{
        song.pause()
        button_play.innerHTML = `<img src="img/play-circle.svg" alt="">`
        its_playing = false
    }
}

function songadvant() {
    if(index == copia_coleção_song.length - 1){
        index = 0
        inicio()
    }else{
        index += 1
        inicio()
    }
}
function song_return(){
    if(index === 0){
        index = copia_coleção_song.length - 1
        inicio()
    }else{
        index -= 1
        inicio()
    }
}



function cheklike(){

    if(copia_coleção_song[index].liked === false){
        liked.src = `img/heart.svg`
    }else if(copia_coleção_song[index].liked){
        liked.src = `img/heart-fill.svg`
    } 
}

function onliked(){
    if(copia_coleção_song[index].liked === false){
        copia_coleção_song[index].liked = true;
    }else{
        copia_coleção_song[index].liked = false
    }
    cheklike()
}   

function onrepeat() {
    if(repeat === false){
        songadvant()
    }else{
        song.play()
    }
}
function checkrepeat(){
    if(repeat == false){
        button_repeat.innerHTML = `<img src="img/repeat-1.svg" alt="">`
        button_repeat.style.border = "2px solid black"
        button_repeat.style.borderRadius = "60%"
        repeat = true
    }else{
        button_repeat.innerHTML = `<img src="img/repeat.svg" alt="">`
        button_repeat.style.border = "none"
        button_repeat.style.borderRadius = "none"
        repeat = false
    }
}


//barra de progresso
function progress(event) {
    const width = barra_progress.clientWidth;
    const clickposition = event.offsetX
    const progresstotal = (clickposition / width) *song.duration
    song.currentTime = progresstotal
    HHMMSS(song.currentTime)

}

function loadprogress() {
    let width = (song.currentTime / song.duration) * 100;
    progres_barra.style.setProperty("--progress",  `${width}%`)
    time_duration.innerText = HHMMSS(song.currentTime)
}

function progres_total(){
    timetotal.innerText = HHMMSS(song.duration)
}
//convertendo tempo que é passado de duration ou currentTime para horas normais

function HHMMSS(number){
 let hors = Math.floor(number / 3600);
 let min = Math.floor((number - hors * 3600) / 60);
 let seg = Math.floor(number - hors * 3600 - min * 60)

 return `${hors.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`

}

//gerando song aleatorio
function shuffleArray(object){
    const size = object.length;
    let counter = size
    while(counter > 0){
        let index_random = Math.floor(Math.random() * size);
        let aux = object[counter] = object[index_random];
        object[index_random] = aux;
        console.log(index_random)
        counter -= 1
    }
}

function onshuffler(){
    if(ramdom == false){
        ramdom = true
        shuffleArray(copia_coleção_song)
        console.log("musica embaralhada")
        button_shuffle.style.borderRadius = "60%"
        button_shuffle.style.border = "2px solid black"
    }else{
        ramdom = false;
        copia_coleção_song = [...original_coleção_song];
        button_shuffle.style.borderRadius = "none"
        button_shuffle.style.border = "none"

    }
}

//efeitos de troca de cor do fundo com um auxiliar de um bool
function onbackgrounde(){
    if(onbackground === false){
        document.body.style.background = "linear-gradient(rgb(80, 15, 231), rgb(49, 40, 71))"
        onbackground = true
    }else{
        document.body.style.background = "linear-gradient(#2c5c4e, #12b184)"
        onbackground = false
    }
    checkbackgrond()
}
//function que verifica qual efeito deve ser colocado no botão
function checkbackgrond(){
    if(onbackground === false){
        button_backgrond.innerHTML = `<img id="button_background" src="img/moon-stars-fill.svg" alt="">Dark`
    }else{
        button_backgrond.innerHTML = `<img id="button_background" src="img/brightness-high.svg" alt="">Light`
    }
}

//eventos
button_play.addEventListener("click", songplay)
button_advant.addEventListener("click", songadvant)
button_return.addEventListener("click", song_return)
button_repeat.addEventListener("click", checkrepeat)
button_shuffle.addEventListener("click", onshuffler)
button_backgrond.addEventListener("click", onbackgrounde)


liked.addEventListener("click", onliked)

barra_progress.addEventListener("click", progress)


//avisos que vai ser passado pela song
song.addEventListener("loadedmetadata", progres_total)
song.addEventListener("ended", onrepeat)
song.addEventListener("timeupdate", loadprogress)
