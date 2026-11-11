const wrapper = document.querySelector(".posts-wrapper");
let skip = 0;
let url = "https://dummyjson.com/posts?limit=15";

loadPosts();

async function loadPosts() {
  try {
    let res = await fetch(url + "&skip=" + skip);
    res = await res.json();
    if (res.posts) {
      res.posts.forEach((el) => {
        let tags = "";
        el.tags.forEach((el) => {
          tags += `<span class="text-sm bg-gray-100 p-1 rounded py-0.5">#${el}</span>`;
        });

        let item = `<div class="bg-white rounded shadow p-6 relative">
      <h2 class="font-semibold text-xl truncate">${el.title}</h2>
      <p class="mb-4">${el.body.substr(0, 20)}...</p>

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
    </div>`;
        wrapper.insertAdjacentHTML("beforeend", item);
      });
      isLoading = false;
    }
  } catch (error) {
    console.error(error);
  }
}

let isLoading = false;
window.onscroll = () => {
  setTimeout(() => {
    let top = window.scrollY + window.innerHeight; //+ 100
    let pageHeight = document.body.scrollHeight - 100;

    if (isLoading) return;

    if (top >= pageHeight) {
      isLoading = true;
      skip += 15;
      loadPosts();
      // isLoading = false
    }
  }, 200); // in case the internet was TAYARA & i need to load more after 2ms
};
