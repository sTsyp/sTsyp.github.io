// Функция инициализации карты
function initMap() {
  var map = L.map('map').setView([51.505, -0.09], 13); // Устанавливаем центр карты и масштаб
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map); // Добавляем слой с тайлами карты
  
  // Добавляем маркер на карту
  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Привет! Я здесь.')
    .openPopup();
}

// Вызываем функцию инициализации карты при загрузке страницы
window.onload = function() {
  initMap();
  // Добавьте вызовы других функций или обработчиков событий здесь
};
