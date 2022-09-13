/*alert("hello!");

/*document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    const text = e.target.elements.text.value.trim();
    alert(text);
})
*/

/*// Ejercicio Nro 2
let myElement = document.querySelector("#create");
console.log(myElement);
*/

/*// Ejercicio Nro 3 Cambie el color de fondo del botón Crear a verde usando la .stylepropiedad
let myElement = document.querySelector("#create");
myElement.style.backgroundColor = "green";
*/

/*// Ejercicio Nro 4 (Lo que logro con este ejercicio es que me lo escribe por consola lo que 
digo en el boton create)
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    console.log(text)
})
*/

/* //Ejercicio  Nro 5
let todos = []

const createTodo = (text) => {
    todos.push(text)
}

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    console.log("text add:" + text)

    if (text.length > 0) {
        createTodo(text)
        
    }
    //createTodo(text) Esta parte la elimino para que no me guarde todo el submit
    console.log(todos);// cada vez que hacemos un submit de guarda
})
*/



/* //Ejercicio  Nro 6 FALTA EN ESTE 
const generateTodoDOM = (todo)=> {
const todoEl = document.createElement('label');
const containerEl = document.createElement ("div");
*/


//EJERCICIO 7

const renderTodos = (todos) => {
