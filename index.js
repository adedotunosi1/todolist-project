//1. add todo to the page
const addtodo = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');



const generateTemplate = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>`;
    ul.innerHTML += html;
};


addtodo.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addtodo.add.value.trim(); // trim removes any spaces before or after the string
     if(todo.length){
  generateTemplate(todo);
  addtodo.reset();
     }
});

// delete the todo list below

ul.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


const filtertodos = (term) => {

  Array.from(ul.children)
  .filter((etodo) =>  !etodo.textContent.toLowerCase().includes(term)) // the ! turns a true statement to false and vice versa
  .forEach((etodo) => etodo.classList.add('filtered'));

  Array.from(ul.children)
  .filter((etodo) =>  etodo.textContent.toLowerCase().includes(term))
  .forEach((etodo) => etodo.classList.remove('filtered'));

}

// fix the search form to filter when user types looking for a todolist
search.addEventListener('keyup', () => {
     const term = search.value.trim().toLowerCase();
      filtertodos(term);
}); 

//Working perfectly fine now


