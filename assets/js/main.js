let news = []
let maxId = 100;

let inputName = document.getElementById('inputName')
let inputText = document.getElementById('inputText')
let inputAuthor = document.getElementById('inputAuthor')
let inputDate = document.getElementById('inputDate')
let submit = document.getElementById('submit')
let newsPlace = document.querySelector(".news");

function showArray(arr){
  arr.forEach(y => {
    newsPlace.insertAdjacentHTML(
      "beforeend",
      `<div class="new">
      <div class="name_date">
        <h2 class="name">
        ${y.name}
        </h2>
        <p class="date">${y.date}</p>
      </div>
      <p class="text">
      ${y.text}         
      </p>
      <div class="author_id">
        <p class="author"> ${y.author}</p>
        <p class="id">id: ${y.id}</p>
      </div>
    </div>`
    );
  })
}


function addArray(){
  let object = { 
    name: inputName.value , 
    author: inputAuthor.value , 
    date: inputDate.value , 
    text: inputText.value , 
    id: ++ maxId
  }
  news.push(object)
  newsPlace.innerHTML = ''
  inputName.value = ''
  inputAuthor.value = ''
  inputDate.value = ''
  inputText.value = ''
  showArray(news)
}

submit.addEventListener('click', addArray)


