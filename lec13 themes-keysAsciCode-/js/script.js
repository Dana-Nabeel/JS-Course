const themes = {
  blue: { 
    bg: "bg-blue-100", 
    text: "text-blue-900", 
    accent: "bg-blue-500"
  },

  green: { 
    bg: "bg-green-100", 
    text: "text-green-900", 
    accent: "bg-green-500"
  },

  pink: { 
    bg: "bg-pink-100", 
    text: "text-pink-900", 
    accent: "bg-pink-500"
  },
};

const themeBar = document.querySelector(".sidebar")
const themeBtn = document.querySelector(".theme-btn")

themeBtn.onclick = () => themeBar.classList.toggle("translate-x-full")

const circles = document.querySelectorAll(".theme-circle")
circles.forEach(c => {
    c.onclick = () => {
        document.body.className = c.dataset.theme + "transition-all duration-300"
    }
})

// _________________________________________
const form = document.querySelector("form")
const result =  document.querySelector(".result")

form.onsubmit = (e) => {
    e.preventDefault()
    const n1 = document.querySelector("#name1").value
    const n2 = document.querySelector("#name2").value

    const sumAsci = (str) => [...str].reduce((acc, ch) => acc+ch.charCodeAt(0), 0)

    const sum1 = sumAsci(n1)
    const sum2 = sumAsci(n2)

  result.textContent =
  ( sum1 === sum2 ?
    "Equality":
    `The Bigger ASCI sum is: 
    ${sum1 > sum2 ? n1 : n2}`)
}
