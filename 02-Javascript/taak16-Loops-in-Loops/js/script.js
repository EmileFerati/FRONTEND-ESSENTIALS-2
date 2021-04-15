var arrProductPrijs = [5,10,20,50,100];
var arrProductKorting = [0.95, 0.85, 0.98, 1.21];
var totaal = 0;

function rondaf(getal, aantalplekkenachterkomma){
    const x = Math.pow(10, aantalplekkenachterkomma);
    return Math.round(getal * x)/x;
}

for (let i = 0; i < arrProductPrijs.length; i++) {
    var tussenprijs = arrProductPrijs[i]

    for (let x = 0; x < arrProductKorting.length; x++) {  
        tussenprijs = tussenprijs * arrProductKorting[x]
    }


    

    //console.log(tussenprijs)

   var  rondaftussenprijs = rondaf(tussenprijs, 2)
    console.log("product " +i+ " : " +rondaftussenprijs)
    totaal = totaal+rondaftussenprijs

}
 console.log(totaal)