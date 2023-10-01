let section = document.querySelector("section")
icons = document.querySelector(".icons")
icons.onclick = ()=>{
    section.classList.toggle("dark")
}

setInterval(()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let d;
    d = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    hours == 0 ? hours = 12 : hours;

    seconds = seconds < 10 ? "0" + seconds: seconds;
    minutes = minutes < 10 ? "0" + minutes: minutes;
    hours = hours < 10 ? "0" + hours: hours;

    document.querySelector(".hour_num").innerText = hours;
    document.querySelector(".min_num").innerText = minutes;
    document.querySelector(".sec_num").innerText = seconds;
    document.querySelector(".am_pm").innerText = d;
},1000)