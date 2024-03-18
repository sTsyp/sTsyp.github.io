// Функция инициализации карты
function initMap() {
  var map = L.map('map').setView([55.753636, 37.648297], 13); // Устанавливаем центр карты и масштаб
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map); // Добавляем слой с тайлами карты
  
  // Добавляем маркер на карту
  L.marker([55.753636, 37.648297]).addTo(map)
    .bindPopup('Мы здесь!')
    .openPopup();
}

// Функция инициализации чата
function initChat() {
  var chatToggle = document.getElementById('chat-toggle');
  var chatWindow = document.getElementById('chat-window');

  chatToggle.addEventListener('click', function() {
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
  });
}

// Переменная для хранения таймаута скрытия кнопки
var timeout;

// Функция, вызываемая при прокрутке страницы
window.onscroll = function() {
  var button = document.getElementById("chat-toggle");
  // Скрываем кнопку при прокрутке
  button.style.display = "none";
  // Если кнопка не видна, запускаем таймер для ее отображения через некоторое время после остановки прокрутки
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    button.style.display = "block";
  }, 250);
};

// Вызываем функции инициализации карты и чата при загрузке страницы
window.onload = function() {
  initMap();
  initChat();
};
