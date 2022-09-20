const setButton = document.getElementById("setButton")
setButton.addEventListener("click", setAlarm)

var audio = new Audio('https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/alone-20201204074638-52046.mp3')
// var video = new Video("https://media.istockphoto.com/videos/minimal-abstract-motion-3d-rendering-clock-time-concept-time-lapse-video-id1149203367")
function ringbell(){
    audio.play()
    
}

function setAlarm(e){
    e.preventDefault()
    const time = document.getElementById("timeBox")
    const date = document.getElementById("dateBox")
    // alarmDateTime = new Date(date.value)
    alarmDateTime = new Date(date.value + " " + time.value)
    console.log(alarmDateTime)
    now = new Date()
    let timeToAlarm = alarmDateTime - now
    if(timeToAlarm >= 0){
        setTimeout(() => {
            ringbell();
        }, timeToAlarm)
    }
}

