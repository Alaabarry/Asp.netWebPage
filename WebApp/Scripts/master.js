var text = "Welcome to Tech Club...";
var x = 0;
function typing() {
    if (x < text.length) {
        document.getElementById("test").innerHTML += text.charAt(x);
        x++;
        setTimeout(typing, 250);
    }
}
typing();