// Функция инициализации карты
function initMap() {
  var map = L.map('map').setView([55.753636, 37.648297], 13); 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map); 
  
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
    showChatButton(); 
  });
  var sendButton = document.getElementById('send-button');
  var messageInput = document.getElementById('message-input');
  var chatMessages = document.getElementById('chat-messages');

  chatToggle.addEventListener('click', function() {
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
    if (chatWindow.style.display === 'block') {
      chatMessages.scrollTop = chatMessages.scrollHeight;
      messageInput.focus(); 
      hideChatButton(); // Скрываем кнопку "Чат" при открытии окна
    } else {
      showChatButton(); // Показываем кнопку "Чат" при закрытии окна
    }
  });

  sendButton.addEventListener('click', function() {
    var message = messageInput.value.trim();

    if (message !== '') {
      var userMessageElement = document.createElement('div');
      userMessageElement.textContent = '<< ' + message;
      userMessageElement.classList.add('user-message'); 
      chatMessages.appendChild(userMessageElement);

      // Отправляем ответ на сообщение пользователя
      var response = getResponse(message);
      if (response) {
        var responseElement = document.createElement('div');
        responseElement.textContent = '>> ' + response;
        chatMessages.appendChild(responseElement);
      }

      messageInput.value = '';

      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
}
// Функция для получения ответа на сообщение пользователя
function getResponse(message) {
  if (message.includes('привет')) {
    return "Привет! Как я могу помочь вам?";
  } else if (message.includes('Привет')) {
    return "Привет! Что вам подсказать?";
  } else if (message.includes('Добрый день')) {
    return "Привет! Что вам подсказать?";
  } else if (message.includes('добрый день')) {
    return "Привет! Что вам подсказать?";
  } else {
    return "Извините, я еще не очень умный, поэтому не могу на это ответить(((";
  }
}


// Вызываем функции инициализации карты и чата при загрузке страницы
window.onload = function() {
  initMap();
  initChat();
};
