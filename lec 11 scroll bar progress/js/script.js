// // scroll bar progress task
// const progressBar = document.querySelector(".progress-bar")

// window.onscroll = () => {
//     const pageHeight = document.body.scrollHeight
//     let windowHeight = window.innerHeight
//     let scrollableHeight = pageHeight - windowHeight
//     let scrollPercent = (window.scrollY/scrollableHeight) * 100
//     progressBar.style.width = scrollPercent+ "%"
// }

// // task 3: convert tab;e cell to input
// const cells = document.querySelectorAll("table td")

// cells.forEach (cell => {
//     cell.ondblclick = () => {
//         let originTxt = cell.textContent.trim()
//         cell.innerHTML = ""
//         cell.insertAdjacentHTML("beforeend",
//             `<input type="text" value="${originTxt}" class="w-full border border-blue-400 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">`
//         )
//         let input = cell.querySelector("input")

//         input.onblur = () => {
//             cell.textContent = input.value
//         }
//     }
// })

// //task 3: validate bg color divs
// const boxes = document.querySelector(".boxes")
// boxes.onclick = (e) => {
//     if (e.target.tagName !== 'DIV') return
//     if (e.target.querySelector(".msg")) e.target.querySelector.remove()

//     let msg = e.target.classList.contains("bg-sky-500") ?
//     `<p class = "mt-2 text-white font-medium text-center"> Correct choice </p>` :
//     ``
//     e.target.insertAdjacentHTML("beforeend", msg)
// }