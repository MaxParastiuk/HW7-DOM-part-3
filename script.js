let btn = document.getElementById('add')
btn.addEventListener('click', function () {
    let ul = document.getElementById('list');
    let list = ul.innerHTML;
    let task = document.getElementById('task').value;
    list += `<li class="task-to-do">${task}<button>Delete</button></li>`
    ul.innerHTML = list;


    let refresh = document.getElementById('task');
    refresh.value='';

});

let ul = document.getElementById('list');
ul.addEventListener('click', (event) =>{
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
    if(event.target.tagName === 'BUTTON') {
        event.target.closest('li').remove();
    }
});