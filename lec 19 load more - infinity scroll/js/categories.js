let url = "https://menu.mohamednaji.com/api/categories";
const table = document.querySelector("table tbody");
const change_lang = document.querySelector(".lang");
const translatable = document.querySelectorAll(".translatable");

change_lang.onclick = () => {
  if (document.documentElement.lang == "ar") {
    document.documentElement.lang = "en";
    document.body.style.direction = "ltr";
  } else {
    document.documentElement.lang = "ar";
    document.body.style.direction = "rtl";
  }
  loadCategories();
  changeLang();
};

loadCategories();
async function loadCategories() {
  table.innerHTML = "";
  let lang = document.documentElement.lang;

  let res = await fetch(url);
  res = await res.json();
  if (res) {
    res.forEach((el) => {
      let item = `
      <tr class="bg-neutral-primary border-b border-default">
        <td class="px-6 py-4">${el.id}</td>
        <td class="px-6 py-4"><img src="${el.image}" width ="80px" alt=""></td>
        <td class="px-6 py-4">${el.name[lang]}</td>
        <td class="px-6 py-4">
          <a href="" class="text-xs p-1 rounded-sm text-white bg-blue-500">${lang == "ar" ? "تعديل" : "Edit"}</a>
          <a href="" class="text-xs p-1 rounded-sm text-white bg-red-500">${lang == "ar" ? "حذف" : "Delete"}</a>
        </td>
      </tr>`;
      table.insertAdjacentHTML("beforeend", item);
    });
  }
}

// change lang
function changeLang() {
  let lang = document.documentElement.lang;
  translatable.forEach((el) => {
    el.textContent = el.dataset[lang];
  });
}

// add new category modal
const btn = document.querySelector(".add-new");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const form = document.querySelector(".modal form");

btn.onclick = () => modal.classList.remove("opacity-0", "invisible");

modal.onclick = () => modal.classList.add("opacity-0", "invisible");

modalContent.onclick = (e) => e.stopPropagation();

form.onsubmit = (e) => {
  e.preventDefault();
  // let data = new FormData(this) // بيانات الفورم اللي  تم ارساله
  // لانها arrow function ما بتاخد this
  let data = new FormData(form);

  fetch(url, {
    method: "POST",
    body: data,
    headers: {
      //معلومة اساسية مرسلة مع الطلب
      Accept: "application/json", // معناها اني بشتغل api مش html
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status) {
        modal.classList.add("opacity-0", "invisible");
        form.reset();
        loadCategories() 
        Swal.fire({
          title: "Good job!",
          text: res.message,
          icon: "success",
        });
        return
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
