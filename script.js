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

function initChat() {
  var chatToggle = document.getElementById('chat-toggle');
  var chatWindow = document.getElementById('chat-window');
  var closeButton = document.createElement('button'); // Создаем кнопку "Закрыть"
  closeButton.textContent = 'Закрыть'; // Устанавливаем текст кнопки
  chatWindow.appendChild(closeButton); // Добавляем кнопку "Закрыть" в диалоговое окно

  // Добавляем обработчик события для кнопки "Закрыть"
  closeButton.addEventListener('click', function() {
    chatWindow.style.display = 'none'; // Скрываем диалоговое окно
  });

  var sendButton = document.getElementById('send-button');
  var messageInput = document.getElementById('message-input');
  var chatMessages = document.getElementById('chat-messages');

  chatToggle.addEventListener('click', function() {
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
    // Прокручиваем окно чата вниз, чтобы последние сообщения были видны
    if (chatWindow.style.display === 'block') {
      chatMessages.scrollTop = chatMessages.scrollHeight;
      messageInput.focus(); // Перемещаем фокус на поле ввода текста при открытии окна
    }
  });

  sendButton.addEventListener('click', function() {
    var message = messageInput.value;
    if (message.trim() !== '') {
      // Добавляем сообщение в окно чата
      var messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatMessages.insertBefore(messageElement, chatMessages.firstChild);
      // Очищаем поле ввода
      messageInput.value = '';
      // Прокручиваем окно чата вниз после добавления нового сообщения
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
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
