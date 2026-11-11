const btn = document.querySelector(".load-posts");
const more = document.querySelector(".load-more");
const wrapper = document.querySelector(".posts-wrapper");

let skip = 0;
let url = "https://dummyjson.com/posts?limit=9";

btn.onclick = () => {
  loadPosts()
}

more.onclick = () => {
  skip += 9
  loadPosts()
}

function loadPosts() {
  btn.querySelector('i').classList.remove('hidden!')
  btn.disabled = true
  fetch(url + "&skip=" + skip)
  .then((res) => res.json())
  .then((res) => {
    
    btn.querySelector('i').classList.add('hidden!')
    btn.disabled = false
    more.classList.remove('hidden')

    res.posts.forEach(el => {

      let tags = ''
      el.tags.forEach(el => {
        tags += `<span class="text-sm bg-gray-100 p-1 rounded py-0.5">#${el}</span>`
      })

      let item = `<div class="bg-white rounded shazdow p-6 relative">
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