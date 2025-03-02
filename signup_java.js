/*const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let confetti = [];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 5 + 2,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 4 - 2,
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.size, c.size);
        c.x += c.speedX;
        c.y += c.speedY;
        if (c.y > canvas.height) confetti.splice(i, 1);
    });
    requestAnimationFrame(drawConfetti);
}

function startConfetti() {
    createConfetti();
    drawConfetti();
}*/



const signUpButton = document.getElementById('signUpButton');
signUpButton.addEventListener('click', () => {
    /*confetti({
      particleCount: 150,
      spread: 60,
    });*/

    position = signUpButton.getBoundingClientRect();

    confetti({
        particleCount: 200,
        spread: 70, //y: 0.6 },
        origin: { y: .7 },
        colors: ['#ff0000', '#00ff00', '#0000ff'],
        shapes: ['circle', 'square'],
      });
  });


const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', () => {
    /*confetti({
    particleCount: 150,
    spread: 60,
    });*/
    position = signInButton.getBoundingClientRect();
    confetti({
        particleCount: 200,
        spread: 70, //y: 0.6 },
        origin: { y: .7 },
        colors: ['#ff0000', '#00ff00', '#0000ff'],
        shapes: ['circle', 'square'],
    });
});
