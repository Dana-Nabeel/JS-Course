// edit contextMenu
const menu = document.querySelector(".new-menu");
let x = 0,
  y = 0;
let targetBox = null,
  copyBox = null;

window.oncontextmenu = (e) => {
  e.preventDefault();

  targetBox = e.target.closest(".box");
  x = e.clientX;
  y = e.clientY;
  menu.style.top = e.clientY + "px";
  menu.style.left = e.clientX + "px";
  menu.classList.remove("hidden");
};

document.onclick = () => menu.classList.add("hidden");

menu.onclick = (e) => {
  switch (e.target.textContent.toLowerCase()) {
    case "new":
      let item = `<div class="box shadow rounded p-6 bg-white w-60 fixed cursor-grab" style = "top:${y}px; left:${x}px;">
      New box
    </div>`;
      document.body.insertAdjacentHTML("beforeend", item);
      break;

    case "copy":
      copyBox = targetBox.cloneNode(true);
      break;

    case "cut":
      copyBox = targetBox;
      targetBox.remove();
      break;

    case "paste":
      if (copyBox) {
        const pasted = copyBox.cloneNode(true);
        pasted.style.top = `${y}px`;
        pasted.style.left = `${x}px`;
        document.body.appendChild(pasted);
      }
      break;

    case "delete":
      if (targetBox) targetBox.remove();
      break;
  }
};

document.body.ondblclick = (e) => {
  if (e.target.classList.contains("box")) {
    e.target.setAttribute("contentEditable", true);
    e.target.onblur = (e) => e.target.setAttribute("contentEditable", false);
  }
};

// Dragging box
document.body.onmousedown = (e) => {
  if (e.target.classList.contains("box")) {
    let box = e.target;
    let offsetY = e.clientY - box.offsetTop;
    let offsetX = e.clientX - box.offsetLeft;
    box.classList.replace("cursor-grab", "cursor-grabbing");

    document.onmousemove = (e) => {
      box.style.top = e.clientY - offsetY + "px";
      box.style.left = e.clientX - offsetX + "px";
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      box.classList.replace("cursor-grabbing", "cursor-grab");
    };
  }
};

// Accordion
const wrapper = document.querySelector(".wrapper");
let items = [
  {
    title: "Title 1",
    content: "content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ullam.",
  },
  {
    title: "Title 2",
    content: "content 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ullam.",
  },
  {
    title: "Title 3",
    content: "content 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ullam.",
  },
  {
    title: "Title 4",
    content: "content 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ullam.",
  },
];
loadContent();
function loadContent() {
  let content = "";
  items.forEach((i) => {
    content += `
    <div class="item p-4 border border-amber-100 mb-1 rounded bg-amber-200">
    <div class="title cursor-pointer flex justify-between items-center">
    ${i.title}
    <i class="fas fa-chevron-down transition-transform duration-200"></i>
    </div>
    <div class="content hidden text-gray-500">
    <p>${i.content}</p>
    </div>
    </div>
    `;
  });
  wrapper.innerHTML = content;
}
wrapper.onclick = (e) => {
  if (e.target.classList.contains("title") || e.target.closest(".title")) {
    let title = e.target.closest(".title");

    const allContents = wrapper.querySelectorAll(".content");
    allContents.forEach((el) => {
      if (el !== title.nextElementSibling) el.classList.add("hidden");
    });
    const allIcons = wrapper.querySelectorAll(".title i");
    allIcons.forEach((el) => {
      if (el !== title.querySelector("i")) el.classList.remove("rotate-180");
    });
    title.nextElementSibling.classList.toggle("hidden");
    title.querySelector("i").classList.toggle("rotate-180");
  }
};