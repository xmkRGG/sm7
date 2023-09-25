let news = [];

let inname = document.getElementById('name');
let intext = document.getElementById('text');
let indate = document.getElementById('date');
let inid = document.getElementById('id');
let inauthor = document.getElementById('author');
let addButton = document.getElementById('add');
let box = document.querySelector('.main-list');



function showNews(arr){
    box.innerHTML= '';

    for (let i = 0; i < news.length; i++){

        box.insertAdjacentHTML('beforeend',
        '<div class="list-content"><div class="content-title"><h1 class="name">'+news[i]['name']+'</h1> <p class="text">'+news[i]['date']+'</p></div> <div class="content-text">'+news[i]['text']+'</div> <div class="content-footer"><p class="subtitle">'+news[i]['author']+'</p><p class="id"> Id:'+news[i]['id']+'</p></div></div>');

    }
}

let key_name = 'name';
let key_text = 'text';
let key_id = 'id';
let key_date = 'date';
let key_author = 'author';



addButton.addEventListener('click', function(){
    let name = inname.value;
    let text = intext.value;
    let date = indate.value;
    let id = inid.value;
    let author = inauthor.value;

    
    news.push({
        [key_name]:name,
        [key_text]:text,
        [key_id]:id,
        [key_author]:author,
        [key_date]:date




    })
    showNews(news)

    inname.value = ''
    intext.value = ''
    indate.value = ''
    inid.value = ''
    inauthor.value = ''
})

console.log(news)