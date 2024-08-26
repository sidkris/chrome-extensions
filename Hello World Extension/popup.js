document.addEventListener('DOMContentLoaded', function() {
    var nameInput = document.getElementById('name');
    var greetingElement = document.getElementById('greeting');

    nameInput.addEventListener('keyup', function() {
      greetingElement.textContent = 'Hello ' + nameInput.value;
    });
  });