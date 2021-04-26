
strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var strInput = "";          //input string
var strCodeword = "";       //codeword string
var strCodewordFull = "";   //output string
arrInputPosities = [];      //array van input posities
arrCodewordPosities = [];   //array van codeword posities
arrOutputPosities = [];     //array van output posities
//Zet een string om naar een array met posities
function stringNaarPosities(str){ //string omzetten naar cijfers
    outputArray = [];
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < strAlfabet.length; j++) {
            if(str[i].toUpperCase() == strAlfabet[j]){
                outputArray.push(j);
                // console.log("Letter: " + i + " = " + str[i] + " -> positie in alfabet = " + j);
            }
        } 
    }
    console.log("berekende posities: " + outputArray.toString())
    return outputArray;
}
//Zet een array met posities om naar een string
function positiesNaarString(arr){
    var outputString = ""; //lege array van een string, waar uitkomst in wordt returnd
    //TODO: opdracht 1
    // hier worden er posities teruggezet naar letters
    for (let k = 0; k < arr.length; k++){ //i word als waarde 0 gegeven; loop gaat door tot arr.length, lengte van ingevulde input woord wanneer i kleiner is dan arr.lengt(input woord van gebruiker); i++= ophoging.
            let pos = arr[k]; 
            let letter =  strAlfabet[pos];
            for ( let l = 0; l < letter.length; l++){ // L moet niet op 0 beginnen maar op ingevulde woord in dit geval plek 10, 
                outputString = outputString + letter;
            }   
    }
   return outputString;
}



//Geeft een array terug waarbij het codeword herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
//Dus als het bericht STUDENT (7 letters) is en het codeword KLAS dan krijg je KLASKLA (7 letters) terug van deze functie.
function vermenigvuldigCodeword(strInput, strCodeword){
    var outputString = "";
    
    var inputLength = strInput.length;
    var codewordLength = strCodeword.length;
    var intDiv = Math.floor(inputLength / codewordLength); // i waarde 0; loopt hoe vaak inputwoord in de codewoort past en geeft de codewoord zovaak weer terug.
    var intMod = inputLength % codewordLength; //het aantal letters dat overblijft die nog moeten worden aangevuld, van hoe vaak intdiv in een woord past en kijkt hoeveel letters overblijft.
    //TODO: opdracht 2
    for (let m = 0; m < intDiv; m++) {
            outputString = outputString + strCodeword; // m waarde 0 loopt hoevaak inputwoord in sw codewoort past en geeft de codewoord zovaak weer terug
    }
    for (let n = 0; n < intMod; n++) {
        outputString = outputString + strCodeword[n]; // intmod loopt hoeveel letters er overgebleven zijn hoe vaak intdiv in het woord past en kijkt hoevel leters er overblijft
    }   
    console.log("Codeword full: " + outputString);
    return outputString;
}
//functie die een een bericht versleuteld.
function versleutel(){
    strInput = document.querySelector("#input").value; 

    strCodeword = document.querySelector("#codeword").value;   
    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);
    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arrInputPosities = stringNaarPosities(strInput);
    positiesNaarString(arrInputPosities);
    outputArray = []; 
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] + arrCodewordPosities[i] > 26){
            outputArray.push((arrInputPosities[i] + arrCodewordPosities[i])-26);
        }
        else{ 
            outputArray.push(arrInputPosities[i] + arrCodewordPosities[i]);
        }
    }
    console.log("versleuteld bericht: " + positiesNaarString(outputArray));
    document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewordFull = [];
}
function ontsleutel(){
    //TODO: opdracht 3
    // hier worden alle variabelen gevult met de juistre waarde waarbij strCodeword het word iss
    
    strInput = document.querySelector("#input").value; // kijkt wat variable codeword staat en dan is outputstring, de variable die in de html in de output staat
    strCodeword = document.querySelector("#codeword").value;   
    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);
    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arrInputPosities = stringNaarPosities(strInput);
    positiesNaarString(arrInputPosities);
    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] - arrCodewordPosities[i] < 0){
            outputArray.push((arrInputPosities[i] - arrCodewordPosities[i])+26);
        }
        else{ 
            outputArray.push(arrInputPosities[i] - arrCodewordPosities[i]);
        }
    }
    document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewordFull = [];
}
