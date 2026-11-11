// let done = false;
// // للتوضيح
// //  1. promise
// new Promise((res, rej) => {
//   if (done) {
//     res("success");
//   } else {
//     rej("fail");
//   }
// })
//   .then((res) => {
//     console.log("This message is " + res);
//   })
//   .catch((err) => {
//     console.error("This message is " + err);
//   });

// AJAX request 4 ways

const btn = document.querySelector(".load-posts");
const wrapper = document.querySelector(".posts-wrapper");

// let limit = 9;
let skip = 0;
let url = "https://dummyjson.com/posts?limit=9";

btn.onclick = () => {
  loadPosts()
};

function loadPosts() {
  btn.querySelector('i').classList.remove('hidden!')
  btn.disabled = true
  fetch(url)
  .then((res) => res.json())
  .then((res) => {
    
    btn.querySelector('i').classList.add('hidden!')
    btn.disabled = false

    res.posts.forEach(el => {

      let tags = ''
      el.tags.forEach(el => {
        tags += `<span class="text-sm bg-gray-100 p-1 rounded py-0.5">#${el}</span>`
      })

      let item = `<div class="bg-white rounded shadow p-6 relative">
          <h2 class="font-semibold text-xl truncate">${el.title}</h2>
          <p class="mb-4">${el.body.substr(0 , 20)}...</p>

          <div class="flex justify-between mb-2">
            <div class="flex gap-3">
              <span> <i class="far fa-thumbs-up"></i>${el.reactions.likes} </span>
              <span> <i class="far fa-thumbs-down"></i>${el.reactions.dislikes}</span>
            </div>
            <div class="flex gap-2">
              ${tags}
            </div>
          </div>
          <span class="absolute bottom-0 right-0 text-sm text-gray-500 px-2 m-2">
            <i class="far fa-eye text-xs"></i> ${el.views}
          </span>
        </div>`
        wrapper.insertAdjacentHTML('beforeend' , item)
    });
  })
  .catch((err) => {
    console.error(err);
  })
}


// داخل الاونكليك
//   // 1. XMLHttpRequest
  // // create an XMLHttpRequest object
  // const xhttp = new XMLHttpRequest()
  // // define a callback fun
  // xhttp.onload = function () {
  //   // here can using data
  //   console.log(JSON.parse(this.responseText))
  // }
  // // send  a request
  // xhttp.open("GET" , url)
  // xhttp.send()

  // // 2. jquery ajax
  // $.get({
  //   url: url ,
  //   // method : 'GET' ,
  //   success : function(res) {
  //     console.log(res)
  //   },
  //   error : function(err) {
  //     console.error(err)
  //   }
  // })

  // // 3. fetch كل المواقع اللي معها api  الافضل هاي
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  // // 4. axios   لل بتستخدم مكتبة http request و موجودة بلارافيل وبطلبلها  axios cdn
  // // لو بكتب كود مع لارافيل بستخدمها
  // axios
  //   .get(url)
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
// ======================================================
// new Promise((res , rej) => {
//   setTimeout(() => {
//     console.log(1)
//     res()
//   }, 1000)
// }).then(() => {
//   setTimeout(() => {
//     console.log(2)
//     // res() // اذا هاد النهاية ما بستعديها 
//   }, 1000)
// })