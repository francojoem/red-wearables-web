function typewriter(){
    // x = document.getElementById("typeWriter")
    var txt = "Lost"
    var speed = 50
    var i = 0
    if (i < txt.length) {
        document.getElementById("typeWriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}