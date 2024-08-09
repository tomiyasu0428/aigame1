document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
});

document.getElementById('codeInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const code = event.target.value.trim();
        if (code === 'print("Hello, World!")') {
            document.getElementById('output').textContent = 'Hello, World!';
        } else {
            document.getElementById('output').textContent = 'Try again!';
        }
    }
});
