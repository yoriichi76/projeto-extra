javascript


const canvas = document.getElementById('gameCanvas");
const context canvas.getContext("20");
// configurações do jogo
const gravity 0.25;
let bird [x: 50, y: 150, width: 20, height: 28, velocity: e);
// Função para desenhar o pássaro
function drawBird() {
context.fillstyle = 'yellow';
context.fillRect(bird.x, bird.y, bird.width, bird.height);
// Função para atualizar a posição do pássaro
function updateBird() {
bird.velocity += gravity;
bird.y + bird.velocity;
if (bird.y bird.height > canvas.height) {
bird.y canvas.height bird.height;
bird.velocity = 0;
  if (bird.ybird.height canvas.height) {
bird.y canvas.height bird.height;
bird.velocity = 0;
}
}
// controle de interação
document.addEventListener("keydown', function (e) {
if (e.key) {
bird.velocity-6; // Faz o pássaro "pular" com um toque
}
));
// Função principal do Loop do joge
function gameLoop() {
context.clearRect(0, e, canvas.width, canvas.height);
updateBird();
drawBird();
requestAnimationFrame(gameLoop);
}
game Loop();
