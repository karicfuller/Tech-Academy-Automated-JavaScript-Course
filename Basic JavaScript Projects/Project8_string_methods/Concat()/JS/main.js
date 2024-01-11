function concat_sentence() {
    var word1 = 'Hello ';
    var word2 = 'my ';
    var word3 = 'name ';
    var word4 = 'is ';
    var word5 = 'Kari.';
    var sentence = word1.concat(word2, word3, word4, word5);
    document.getElementById('Concat').innerHTML = sentence;
}