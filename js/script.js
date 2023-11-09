const form = document.getElementById('form');
const countDownDate = new Date("October 06, 2024 12:00:00").getTime();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  const data = { nome, email };
  const convertData = JSON.stringify(data);

  // Armazenar os dados no localStorage
  localStorage.setItem('lead', convertData);

  const content = document.getElementById('content');
  content.innerHTML = "<p>Carregando...</p>";

  // Aguardar 1 segundo e depois exibir "pronto!"
  setTimeout(() => {
    content.innerHTML = "<p>Pronto!</p>";
  }, 1000);
});

let x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("dday");
  countdownElement.innerHTML = `${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos`;

  if (distance < 0) {
    clearInterval(x);
    countdownElement.innerHTML = "Próxima promoção: ";
  }
}, 1000);
