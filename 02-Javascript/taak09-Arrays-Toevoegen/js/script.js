topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

eigenTopFilms = []

function kiesFilm(){
    filmplek=prompt("welke film moet op plek 1 staan");
//met deze for-loop word de ordered list gevuld met film namen
for(i = 0; i < eigenTopFilms.length; i++){                
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];



    document.querySelector
}



