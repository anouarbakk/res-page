function about(){
    var titlee = document.createElement('h1');
    titlee.innerText = "This the about page";
    var paragraph = document.createElement('p');
    paragraph.innerText = "Enim maxime velit atque. Inventore pariatur fuga libero molestias fugit odit aut iusto. Quo tempora inventore nisi voluptatem.";
    var content = document.getElementById('content');
    titlee.classList.add('hello');
    paragraph.classList.add("pp");
    content.appendChild(titlee);
    content.appendChild(paragraph);

    
}

export { about };