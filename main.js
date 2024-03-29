src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js">
WebFont.load({
  google: {
    families: ["Borel"]
  }
});
WebFont.load({
  google: {
    families: ["Roboto Condensed"]
  }
});
document.addEventListener("mousemove", function(event) {
  var cursor = document.querySelector(".cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 58);
}
const starsContainer = document.querySelector('.stars');
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  starsContainer.appendChild(star);
}
setTimeout(() => {
  starsContainer.classList.add('fade-in');
}, 1000);
document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  starsContainer.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
});

const background = document.querySelector('.background');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      background.classList.remove('day');
      background.classList.add('night');
    } else {
      background.classList.remove('night');
      background.classList.add('day');
    }
    const backgrounds = ['images/bg1.webp', 'images/bg2.webp', 'images/bg3.webp', 'images/bg4.webp', 'images/bg5.webp', 'images/bg6.webp'];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const backgroundElement = document.querySelector('.day');
    if (backgroundElement) {
      backgroundElement.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
    }
