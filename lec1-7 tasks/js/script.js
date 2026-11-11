// // first task>>>>

// // const ageInDays = (obj) => {
// //     const age = obj.age;
// //     return age !== undefined ? (typeof age === 'number' && age > 0 ? age * 365 : "Your age should be a positive number!") : "Invalid input!";
// // }

// // console.log(ageInDays({name: "Dana", age: 28}))
// // console.log(ageInDays({name: "Tameem", age: 2}))
// // console.log(ageInDays({name: "Alex", age: -5}))
// // console.log(ageInDays({name: "Sam"}))

// // calculator task>>>>
// // const calc = (x , y, op) => {
// //     return (typeof x !== 'number' || (op !== 'sqrt' && typeof y !== 'number')) ? "Invalid input! Please enter numbers for x and y (except for sqrt, which only needs x)" : (
// //         (op.toLowerCase() === "sum" || op === "+") ? x + y :
// //         (op.toLowerCase() === "subtract" || op === "-") ? x - y : 
// //         (op.toLowerCase() === "multiply" || op === "*") ? x * y :
// //         (op.toLowerCase() === "modulus" || op === "%")? (y !== 0 ? x % y : "Division by zero is not allowed!") :
// //         (op.toLowerCase() === "power" || op === "^") ? Math.pow(x, y) :
// //         (op.toLowerCase() === "divide" || op === "/") ? (y !== 0 ? x / y : "Division by zero is not allowed!") :
// //         (op.toLowerCase() === "sqrt") ? (x >= 0 ? Math.sqrt(x) : "x must be a positive number!") : "Invalid operation! Supported: sum/+, subtract/-, multiply/*, modulus/%, power/^, divide//, sqrt."
// //     );
// // }

// // console.log(calc(4, 5, "sum"))
// // console.log(calc(4, 5, "-"))
// // console.log(calc(4, 5, "MULTIPLY"))
// // console.log(calc(4, 0, "%"))
// // console.log(calc(4, 3, "power"))
// // console.log(calc(4, 0, "/"))
// // console.log(calc(16, "n", "sqrt"))
// // console.log(calc(-16, null, "sqrt"))
// // console.log(calc(4, 5, "Sum"))
// // console.log(calc(3, 3, 'any thing'))  

// /////////////////////////////////////////////////////////////
// // task 2

// const whoIsOlder = (p1, p2) => {
//     const {name: n1, dob: d1} = p1;
//     const {name: n2, dob: d2} = p2;

//     const date1 = new Date(d1);
//     const date2 = new Date(d2);
//     if(date1.getTime() === date2.getTime()) return "مبروك لقيت توأمك!";

//     // const {olderN, youngerN, olderD, youngerD} = date1 < date2 
//     // ? {olderN: n1, youngerN: n2, olderD: date1, youngerD: date2} 
//     // : {olderN: n2, youngerN: n1, olderD: date2, youngerD: date1};
//     const [olderN, youngerN, olderD, youngerD] = date1 < date2
//     ? [n1, n2, date1, date2]
//     : [n2, n1, date2, date1];

//     let years = youngerD.getFullYear() - olderD.getFullYear();
//     let months = youngerD.getMonth() - olderD.getMonth();
//     let days = youngerD.getDate() - olderD.getDate();

//     if(days < 0){
//         months--;
//         days += 30;
//     }
//     if (months < 0){
//         years--;
//         months += 12;
//     }
//     return `${olderN} is older than ${youngerN} by ${years} years, ${months} months, ${days} days.`;
// }

// let person1 = {name: "Tameem", dob: "2023-08-31"};
// let person2 = {name: "Dana", dob: "1997-10-25"};
// let person3 = {name: "Alex", dob: "1997-10-25"};

// console.log(whoIsOlder(person1, person2))
// console.log(whoIsOlder(person2, person3))
// //   let olderName, youngerName, olderDob, youngerDob;
// //   if (dob1 < dob2) {
// //     olderName = name1;
// //     youngerName = name2;
// //     olderDob = dob1;
// //     youngerDob = dob2;
// //   }else if (dob1 > dob2) {
// //     olderName = name2;
// //     youngerName = name1;
// //     olderDob = dob2;
// //     youngerDob = dob1;
// //   } else {
// //     return "مبروك لقيت توأمك!";
// //     }

// // course instructor function>>>>
// function Course (Name, hours, instructor, price, discount = 0) {
//     this.Name = Name;
//     this.hours = hours;
//     this.instructor = instructor;
//     this.price = price;
//     this.discount = discount;

//     this.discountedPrice = () => {
//         (this.discount > 0) ?
//         console.log(`The course: ${this.Name}, discount💸: ${this.discount}% , discounted price: ${(this.price * (1- this.discount / 100)).toFixed(2)}`) :
//         console.log(`The course: ${this.Name}, price: ${this.price.toFixed(2)}`);
//     }
// }

// let course1 = new Course("JavaScript", 40, "Mohammed Naji", 300, 20);
// let course2 = new Course("Python", 50, "Tameem", 400);

// course1.discountedPrice();
// course2.discountedPrice();

// // Random Questions

// let q = {
//     1:" مرحبا ريس ",
//     2:" شو الأخبار؟ ",
//     3:" ماشي الحال؟ ",
//     4:" كله تمااام؟ ",
//     5:" يعطيك العافية ",
// }

// const timer = setInterval(() => {
//     let randomNum = Math.floor(Math.random() * 5) + 1;
//     console.log(`${randomNum}: ${q[randomNum]}`);
//     if(randomNum === 5) clearInterval(timer);
// }, 3000);

// ////////////Task 3//////////

// add age for 2000s borns array of objects

// const people = [
//     {name: "Dana", dob: "1997-10-25"},
//     {name: "Tameem", dob: "2023-08-31"},
//     {name: "Taleen", dob: "2009-03-19"},
//     {name: "Alaa", dob: "1988-12-05"},
// ];

// const newAge = people.filter(({dob}) => new Date(dob).getFullYear() >= 2000).map(person => ({
//     name: person.name,
//     dob: person.dob,
//     age: new Date().getFullYear() - new Date(person.dob).getFullYear()
// }));
// console.log(newAge);

// // فحص اذا كان يساخق خصم
// function checkDiscount(courses) {
//     const totalPrice = courses.reduce((sum, {price}) => sum + price, 0);

//     if (totalPrice > 1000 && courses.length >= 5){
//         return function(nextCoursePrice) {
//             const finalPrice = nextCoursePrice * (1-.20)
//             return {
//                 original: nextCoursePrice, 
//                 discount: 20,
//                 final: finalPrice
//             };
//         };
//     } else return null;
// }

// const courses = [
//     {name: "JavaScript", price: 300},
//     {name: "Python", price: 400},
//     {name: "Java", price: 250},
//     {name: "C++", price: 200},
//     {name: "Ruby", price: 150},
// ];
// console.log(checkDiscount(courses)?? "No discount available");

// 
// const longWords = prompt("Enter a sentence: ").split(" ").filter(word => word.length > 8);
// console.log("Long words (>8 chars):", longWords);

////////////////// Task 4 /////////////
// const colors = [
//     "#FF6F00", "#FFD93D", "#7CFF00", "#00CFFF", "#9B5DE5", "#FF4D6D",
//     "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
//     "#8A2BE2", "#FF69B4", "#20B2AA", "#FFA500", "#708090", "#2E8B57",
//     "#DC143C", "#40E0D0"
// ];

// const btn = document.querySelector('button');
// let result = document.querySelector('p')
// let b1 = document.querySelector('#b1');
// let b2 = document.querySelector('#b2');

// const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
// btn.onclick = () => {
//     const timer = setInterval(() => {
//         let c1 = colors[Math.floor(Math.random() * colors.length)];
//         let c2 = colors[Math.floor(Math.random() * colors.length)];

//         b1.style.backgroundColor = c1;
//         b2.style.backgroundColor = c2;

//         if (c1 === c2) {
//             clearInterval(timer);
//             result.textContent = "MATCHY MATCHYY! You win!"
//             result.style.color = c1;
//             btn.disabled = true;
//         }
//     }, 50)
// }
///////////////////////////

const editable = document.querySelector('#editable');
const counter = document.querySelector('#counter');
const limit = 50;

editable.oninput = () => {
    const text = editable.innerText;
    const allowed = text.slice(0, limit);
    const extra = text.slice(limit);
    editable.innerHTML = allowed +`<span class="exceed">${extra}</span>`;
    // إعادة المؤشر لنهاية النص 
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(editable);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);

    const remaining = limit - text.length;
    counter.textContent = remaining >= 0 ?
        `Remaining characters: ${remaining}` :
        `Exceeded by ${Math.abs(remaining)} characters`;
    counter.classList.toggle('exceeded', remaining < 0);
};