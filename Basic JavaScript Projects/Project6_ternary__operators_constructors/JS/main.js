function voteAge() {
    var theAge, How_old;
    theAge = document.getElementById("Age").value;
    How_old = (theAge > 18) ? "You are old enough":"You are too young";
    document.getElementById("vote").innerHTML = How_old + " to vote.";
}