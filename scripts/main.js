function showFrame(frameId) {
    document.querySelectorAll('.frame-content').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(frameId).style.display = 'block';
}