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
    var message = messageInput.value.trim();

    if (message !== '') {
      // Создаем элемент для отображения сообщения пользователя и добавляем его в историю чата
      var userMessageElement = document.createElement('div');
      userMessageElement.textContent = '- ' + message;
      chatMessages.appendChild(userMessageElement);

      // Отправляем ответ на сообщение пользователя
      var response = getResponse(message);
      if (response) {
        var responseElement = document.createElement('div');
        responseElement.textContent = '- ' + response;
        chatMessages.appendChild(responseElement);
      }

      // Очищаем поле ввода после отправки сообщения
      messageInput.value = '';

      // Прокручиваем окно чата вниз после добавления новых сообщений
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
}
// Функция для получения ответа на сообщение пользователя
function getResponse(message) {
  // Определите ключевые слова и соответствующие ответы
  if (message.includes('привет')) {
    return "Привет! Как я могу помочь вам?";
  } else if (message.includes('Привет')) {
    return "Привет! Что вам подсказать?";
  } else if (message.includes('Добрый день')) {
    return "Привет! Что вам подсказать?";
  } else if (message.includes('добрый день')) {
    return "Привет! Что вам подсказать?";
  } else {
    return "Извините, я еще не очень умный, поэтому на это ответить я не могу(((";
  }
}


// Вызываем функции инициализации карты и чата при загрузке страницы
window.onload = function() {
  initMap();
  initChat();
};
