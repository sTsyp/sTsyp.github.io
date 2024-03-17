// Обработчик события window.onload
window.onload = function() {
  // Создание карты с использованием LeafletJS
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  // Привязка обработчика события к кнопке отправки сообщения
  var sendMessageButton = document.querySelector('#send-message-button');
  sendMessageButton.addEventListener('click', sendMessage);
};

// Функция отправки сообщения в чат
function sendMessage() {
  var messageInput = document.querySelector('#message-input');
  var message = messageInput.value;
  
  // Отправка сообщения на сервер (имитация)
  console.log('Отправлено сообщение:', message);
  
  // Добавление сообщения в область чата
  var chatMessages = document.querySelector('#chat-messages');
  chatMessages.innerHTML += '<div>' + message + '</div>';
  
  // Очистка поля ввода сообщения
  messageInput.value = '';
}
