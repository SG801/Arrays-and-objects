function convertGBPtoEuro(Euro) {
    const rate = 1.18;
    return Euro*rate;
}

function convertGBPtoUSD(Usd){
    const rate=1.25;
    return Usd*rate;
}

function currencyconvertor(Currency,value){
    if (Currency ==="EUR"){ return convertGBPtoEuro(value) ;
     } else if (Currency==="USD"){ return convertGBPtoUSD(value);}

    else{ return null ;}
    }


  