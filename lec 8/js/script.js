const input = document.querySelector("input")
const btn = document.querySelector(".show-btn")
const output = document.querySelector(".result")

const classes = [
    "bg1",
    "bg2",
    "bg3",
    "bg4",
    "bg5",
    "bg6",
    "bg7",
]

const showNames = () => {
    const names = input.value.split(",")
        .map(name => name.trim())
        .filter(name => name !== "");
    output.textContent = ""; //عشان نمسح الناتد القديم في حال ضغطنا على زر الشو
    names.forEach(el => {
        const randomClass = classes[Math.floor(Math.random() * classes.length)]
        output.innerHTML += `<span class="name ${randomClass}">${el}</span>`
    });
}
btn.onclick = showNames;

// toggle mode
const toggleBtn = document.querySelector(".mode");
toggleBtn.onclick = () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
        toggleBtn.innerText = "Dark"
    } else {
        document.body.classList.add("dark")
        toggleBtn.innerText = "Light"
    }
}