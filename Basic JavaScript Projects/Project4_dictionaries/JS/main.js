function aDictionary() {
    var people = {
        Nationality: 'Korean',
        Hair: 'Black',
        Height: '5 ft',
        Weight: 190,
        Age: 47
    };
    document.getElementById('Dictionary').innerHTML = people.Nationality;
}