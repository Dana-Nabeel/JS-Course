const steps = document.querySelectorAll(".step");
const stages = document.querySelectorAll(".stage");
const nxt = document.querySelectorAll(".nxt-btn");
const prev = document.querySelectorAll(".back-btn");
let current = 0;

function toggleSteps(i) {
  steps.forEach((el) => el.classList.toggle("hidden", Number(el.dataset.step) != i));
  stages.forEach((stage) => {
    if (Number(stage.dataset.step) === i) {
      stage.classList.remove('opacity-50')
    } else {
      stage.classList.add('opacity-50')
    }
  });
}
// Error messages
const messages = {
  email: "The email field is required",
  password: "The password field is required",
  passwordCon: "The password confirmation field is required",
  passwordMatch: "The Passwords don't match",
  required: "This field is required"
}

function validateStep(i) {
  const step = document.querySelector(`.step[data-step ="${i}"]`)
  const inputs = step.querySelectorAll('input, select')
  let valid = true

  inputs.forEach(input => {
    console.log(input.type)
    clearErr(input)
    if (i === 0) {
      // validate email
      if (input.type == 'email'){
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!input.value) {
          showErr(input, messages.email)
          valid =false
        } else if (!emailFormat.test(input.value) ) {
          showErr(input, 'Enter a valid email (e.g. user@example.com)')
          valid =false
        }
      }
      // pass lemgth & validation
      if (input.id === 'password') {
        if (!input.value) {
          showErr(input , messages.password)
          valid =false
        } else if (input.value.length < 8) {
          showErr (input , 'Password must be at least 8 characters')
          valid = false
        }
      }
      // passConfirmation 
      if (input.id === 'passwordConfirm') {
        const pass = document.querySelector('#password').value
        if (!input.value) {
          showErr(input , messages.passwordCon)
          valid =false
        } else if (input.value !== pass) {
          showErr(input , messages.passwordMatch)
          valid =false
        }
      }
    } else if(!input.value.trim()) {
      showErr(input , messages.required)
      valid =false
      return
    }
  })
  return valid
}

function showErr (input , msg) {
  clearErr(input)
  let errMsg = `<small class="err-msg text-red-500 mt-1">${msg}</small>`
  input.insertAdjacentHTML('afterend' , errMsg)
  input.classList.add('border-red-500')
}

function clearErr(input) {
  const errorMsg = input.parentElement.querySelector('.err-msg')
  if (errorMsg) errorMsg.remove()
  input.classList.remove('border-red-500')
}
// toggling
nxt.forEach (el => {
  el.onclick = (e) => {
    const currentStep = Number(e.target.closest(".step").dataset.step);
    if(!validateStep(currentStep)) return
    current = currentStep + 1
    toggleSteps(current)
  }
})

prev.forEach (el => {
  el.onclick = (e) => {
    const currentStep = Number(e.target.closest(".step").dataset.step);
    current = currentStep - 1
    toggleSteps(current)
  }
})