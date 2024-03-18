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
  var closeButton = document.createElement('button');
  closeButton.textContent = 'Закрыть';
  chatWindow.appendChild(closeButton);

  // Функция для скрытия кнопки "Чат"
  function hideChatButton() {
    chatToggle.style.display = 'none';
  }

  // Функция для отображения кнопки "Чат"
  function showChatButton() {
    chatToggle.style.display = 'block';
  }

  // Обработчик события для кнопки "Закрыть"
  closeButton.addEventListener('click', function() {
    chatWindow.style.display = 'none';
    showChatButton(); // Показываем кнопку "Чат" при закрытии окна
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
      hideChatButton(); // Скрываем кнопку "Чат" при открытии окна
    } else {
      showChatButton(); // Показываем кнопку "Чат" при закрытии окна
    }
  });

  sendButton.addEventListener('click', function() {
    var message = messageInput.value;
    if (message.trim() !== '') {
      var messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      messageInput.value = '';
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
  if(chatWindow.style.display == 'none') {button.style.display = "none";}
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
