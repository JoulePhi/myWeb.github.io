let counter = 2;
setInterval(function() {
    document.getElementById('r' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 5000);
