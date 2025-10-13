const button = document.getElementById("menuButton");

button.addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hide");
});

const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");

gallery.addEventListener("click", function(event) {
    if (event.target.tagName !== "IMG") return;
    
    const img = event.target;
    console.log(img.src);

    modal.innerHTML = `
        <img src="${img.src}" alt="picture">
        <button class='close-viewer'>X</button>
    `;

    modal.open = true;
});

modal.addEventListener("click", function(event) {
    if (event.target == modal || event.target.className == "close-viewer") {
        modal.close();
    }
});