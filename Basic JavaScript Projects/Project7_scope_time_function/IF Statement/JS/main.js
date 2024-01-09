function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Hello").innerHTML = "How are you today?";
    }
}