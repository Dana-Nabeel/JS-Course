const generateBtn = document.querySelector(".add-btn");
const fieldTypeSelect = document.querySelector(".fieldType");
const isRequiredCheck = document.querySelector(".isRequired");
const formContainer = document.querySelector(".generated-form");
const send = document.querySelector(".submit-btn")

generateBtn.onclick = () => {
    const type = fieldTypeSelect.value;
    const required = isRequiredCheck.checked;

    const fieldHTML = `
        <div class="wrapper flex flex-col border p-3 my-3 rounded bg-gray-50 relative">
            <label class="mb-1 font-medium">Enter your ${type} ${required ? "*" : ""}</label>
            <input type="${type}" class="border border-blue-400 outline-1 rounded px-3 py-2 ${required ? "required" : ""} " placeholder ="Enter your ${type}">
            <button type="button" class="absolute top-2 right-2 w-7 h-7 text-red-500 hover:text-red-700 cursor-pointer delete-btn">
                <i class = "fa-solid fa-trash"></i>
            </button>
        </div>`;

    formContainer.insertAdjacentHTML("beforeend", fieldHTML);
}

formContainer.onclick = (e) => {
    if(e.target.classList.contains("delete-btn")){
        e.target.closest('.wrapper').remove()
    }
}

send.onclick = (e) => {
    fields.forEach (el => {
        if (el.value.trim() === 0) {
            e.preventDefault()
            el.classList.replace("border-blue-400", "border-red-500")
        } else {
            el.classList.replace("border-red-500" , "border-green-500")
        }
    })
}