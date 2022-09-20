let date;
let validDate = false
let addbtn = document.getElementById("dateButton")
addbtn.addEventListener("click", function(e){
    let addDate = document.getElementById("dateBox")
    date = addDate.value
    // localStorage.setItem("date", JSON.stringify(date))
    console.log(date)
 })


const countdown = () => {
    const countDate = new Date(date).getTime()
    const now = new Date().getTime();
    const diff = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const dispDay = Math.floor(diff / day)
    const dispHour = Math.floor((diff % day) / hour )
    const dispMinute = Math.floor((diff % hour) / minute )
    const dispSecond = Math.floor((diff % minute) / second )
    const dispMilliSecond = Math.floor((diff % second) )

    document.querySelector(".day").innerText = dispDay
    document.querySelector(".hour").innerHTML = dispHour
    document.querySelector(".minute").innerHTML = dispMinute
    document.querySelector(".second").innerHTML = dispSecond
    document.querySelector(".millisecond").innerHTML = dispMilliSecond 
}

let inputDate = document.getElementById("dateBox")
inputDate.addEventListener("blur", () => {
    str = inputDate.value
    let regex = /^\d{4}-\d{2}-\d{2}$/
    if(regex.test(str)){
        inputDate.classList.remove('is-invalid')
        validDate = true
    }else{
        inputDate.classList.add('is-invalid')
    }
})

let submit = document.getElementById("dateButton")
submit.addEventListener("click", (e) =>{
    e.preventDefault()
    if(validDate){
    let success = document.getElementById("success")
    success.classList.add("show")
    failure.classList.remove("show")}
    else{
        let failure = document.getElementById("failure")
    failure.classList.add("show")
    success.classList.remove("show")}
    }
)




setInterval(countdown, 1)

