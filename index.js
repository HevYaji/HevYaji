onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};

function hideHeart() {
    var heartElement = document.querySelector('.heart');
    var instrucElement = document.querySelector('.title');
    var gifElement = document.querySelector('.gif-title');
    heartElement.style.display = 'none';
    instrucElement.style.display = 'none';
    gifElement.style.display = 'none';

    var containerElement = document.querySelector('.text-container');
    containerElement.style.display = 'flex';
}

function moveButton() {
    var button = document.getElementById('noButton');
    button.style.position = "absolute";
    
    var randomTop = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    var randomLeft = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    
    button.style.top = randomTop + "px";
    button.style.left = randomLeft + "px";

    var randomGif = document.createElement("img");
    container.style.position = "absolute";
    
    var containerRandomTop = Math.floor(Math.random() * (window.innerHeight - 100));
    var containerRandomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
    
    container.style.top = containerRandomTop + "px";
    container.style.left = containerRandomLeft + "px";
    container.style.width = "100px";
    container.style.height = "100px";
    container.style.boxShadow = "";
    container.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

    document.body.appendChild(container);
}


function showMessage() {
    var containerElement = document.querySelector('.text-container');
    containerElement.style.display = 'none';

    var messageElement = document.querySelector('.last-message');
    messageElement.style.display = 'flex';
}

function resetWebsite() {
    location.reload();
}