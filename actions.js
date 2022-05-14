let section = document.querySelector("section"),
    icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
}

// creating a function and calling it in every seconds
setInterval(() => {
    let date = new Date(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; // if hour is smaller than 12 its value will be AM else it will be PM
    hour = hour > 12 ? hour - 12 : hour; // if hour value is greater than 12 than 12 will subtract (by doing this we will get value till 12)
    hour = hour == 0 ? hour = 12 : hour; // if hour value is 0 than it value will be 12

    // adding 0 to all the value if they will less than 10
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = minutes;
    document.querySelector(".sec_num").innerText = seconds;
    document.querySelector(".am_pm").innerText = d;

}, 1000); // 1000 milliseconds = 1s