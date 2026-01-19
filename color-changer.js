let button = document.getElementById('button');
let text = document.getElementById('text');


const colors = ['#2596be', '#ffd79d', '#e61a1a', '#e6531a', '#e6cd1a', '#6fe61a', '#1ae6d0', '#db1ae6', '#591ae6', '#e61a70', '#000000', '#767676'];
 
button.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomColor];
    document.body.style.backgroundColor = newColor;

    if (newColor === "#000000") {
        document.body.classList.add("white-text")
    } else {
        document.body.classList.remove("white-text")
    }


});