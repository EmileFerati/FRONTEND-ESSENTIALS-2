topFilms = [
    "The Godfather", //0
    "The Shawshank Redemption",//1
    "Schindler's List",//2
    "Raging Bull",//3
    "Casablanca",//4
    "Citizen Kane",//5
    "Gone with the Wind",//6
    "The Wizard of Oz",//7
    "One Flew Over the Cuckoo's Nest",//8
    "Lawrence of Arabia"//9
];


document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0]; 
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];
document.querySelector(".film6-ranking").innerHTML = 6;
document.querySelector(".film6-naam").innerHTML = topFilms[5];
document.querySelector(".film7-ranking").innerHTML = 7;
document.querySelector(".film7-naam").innerHTML = topFilms[6];
document.querySelector(".film8-ranking").innerHTML = 8;
document.querySelector(".film8-naam").innerHTML = topFilms[7];
document.querySelector(".film9-ranking").innerHTML = 9;
document.querySelector(".film9-naam").innerHTML = topFilms[8];
document.querySelector(".film10-ranking").innerHTML = 10;
document.querySelector(".film10-naam").innerHTML = topFilms[9];

function kiesFavorieteFilm(){
    strnaam=prompt("wat is jouw favoriete film?");

    console.log(topFilms[strnaam-1]);

    if(strnaam =>11){
      alert("nee sorry dat lukt niet")
    }

document.querySelector(".film"+strnaam+"-naam").style.backgroundColor ="blue";
document.querySelector(".film"+strnaam+"-naam").style.color="white";

}


