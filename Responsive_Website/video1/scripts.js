//function expression to select elements
const selectElement = (s) => document.querySelector(s);
//open the menu on click
selectElement('.open').addEventListener('click',() => {
selectElement('.nav-list').classlist.add('active');
});
//close the menu on click
selectElement('.close').addEventListener('click',() =>{
    selectElement('.nav-list').classlist.remove('active');
    });