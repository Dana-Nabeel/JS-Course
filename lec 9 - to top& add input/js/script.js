// Back to top
const btn = document.querySelector('.toTop')

window.onscroll = () => {
  let pageHeight = document.body.scrollHeight;
  let windowHeight = window.innerHeight;
  let scrollableHeight = pageHeight - windowHeight;
  let scrollParcent = window.scrollY / scrollableHeight;

  btn.style.display = scrollParcent > 0.2 ? "block" : "none";
}

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// add new input 
const inputsBox = document.querySelector('.input-container');
const addBtn = document.querySelector('.add-btn');
const result = document.querySelector('.results');
const show = document.querySelector('.show-btn')

inputsBox.onclick = (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.input-group').remove()
  }
}

addBtn.onclick = () => {
  inputsBox.insertAdjacentHTML("beforeend",
    `<div class="input-group flex-nowrap gap-2 m-2 p-1">
      <input type="text" class="" placeholder="Add a favorite food..">
      <button class="delete"> - </button>
    </div>`
  )
}

show.onclick = () => {
  const foods = [...inputsBox.querySelectorAll('input')].map(i => i.value.trim()).filter(Boolean);
  result.innerHTML = foods.length ?
    `<ul>${foods.map(f => `<li>${f}</li>`).join('')}</ul>` :
    `No foods added yet!`
}

// const delBtn = inputsBox.querySelector('.delete');
// const updateResults = () => {
//   const foods = [...inputsBox.querySelectorAll('input')].map(i => i.value.trim()).filter(Boolean);
//   result.innerHTML = foods.length ?
//     `<ul>${foods.map(f => `<li>${f}</li>`).join('')}</ul>` :
//     `No foods added yet!`
// }

// inputsBox.oninput = (e) => {
//   if (e.target.tagName === 'INPUT') updateResults();
// }

// delBtn.onclick = (e) => {
//   e.target.parentElement.remove()
//   updateResults()
// }

// document.body.onclick = (e) => {
//   if (e.target.classList.contains('delete')) {
//     e.target.parentElement.remove()
//     updateResults()
//   }
// }
// document.body.oninput = (e) => {
//   if (e.target.tagName == 'INPUT') updateResults()
// }