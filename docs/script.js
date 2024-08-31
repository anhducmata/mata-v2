document.addEventListener("DOMContentLoaded", function() {
    let password = sessionStorage.getItem('password');

    // If password is not stored, prompt the user for it
    if (!password) {
        password = prompt("Please enter your password:");
        if (password) {
            sessionStorage.setItem('password', password);
        }
    }

    const chatHistory = document.getElementById('chat-history');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    // Add event listener to the send button
    sendBtn.addEventListener('click', function() {
        const message = chatInput.value.trim();

        if (message) {
            addMessageToChatHistory("You", message);
            chatInput.value = '';

            // Here you could send the message to your server or encrypt it
            // and store it somewhere. For now, we're just adding it to the chat history.
        }
    });

    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });

    function addMessageToChatHistory(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.textContent = `${sender}: ${message}`;
        chatHistory.appendChild(messageElement);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // Example: Add a welcome message
    addMessageToChatHistory("System", "Welcome to the Secure Chat!");
});
