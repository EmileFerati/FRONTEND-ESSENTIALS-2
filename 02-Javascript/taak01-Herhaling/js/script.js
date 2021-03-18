let strNaam;
let boolNaamKlopt;

// vraag de gebruiker om zijn naam
// prompt("Hoe heet je?"); 

    inputName(); // roept de functie aan
 function checkName() {
    if(boolNaamKlopt==true){ 
        alert("welkom");
    }
    else{ 
        alert("dus je het niet zo?");
        inputName();    
    }
    }
// iemand vult ze naam in de naam word opgeslagen in de variabelen strNaam dit is mijn input
// ik moet checken of mijn input juist is dit doe ik met een conditional statement if else
// if verwacht een conditie,else verwacht geen conditie. als if waar is voert hij de code onder de if uit anders voert hij de code onder else uit

    function inputName(){
        // vraag de gebruiker om zijn naam én sla de opgegeven naam op in strNaam
    strNaam = prompt("Hoe heet je?");

    // toon een alertbox. Gebruiker kan alleen op OK drukken. Let op de string samenvoeging.
    alert("Je heet " + strNaam); 

    // toon een-confirm box (gebruiker kan op OK of Cancel drukken). Als de gebruiker op OK drukt, wordt er TRUE opgeslagen in de boolNaamCorrect variabele. Als Cancel dan FALSE.
    
    boolNaamKlopt=confirm("Heet je echt" + strNaam +"?");
    checkName();
    }