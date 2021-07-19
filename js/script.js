const bitcoin = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,ARS,EUR,GBP,CNY&api_key={your_api_key}";
const dogecoin = "https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD,ARS,EUR,GBP,CNY&api_key={your_api_key}"; 
const ethereum = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,ARS,EUR,GBP,CNY&api_key={your_api_key}";
const litecoin = "https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,ARS,EUR,GBP,CNY&api_key={your_api_key}";
const ripple = "https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,ARS,EUR,GBP,CNY&api_key={your_api_key}";

const getValorBitcoin = async () => {
    try{
        const resp = await fetch(bitcoin);
        const data = await resp.json();
        return data;
    }
    catch(e){
        alert("No se pudo realizar la acción. Por favor intente nuevamente. " + e);
    }  
}
const getValorDogecoin = async () => {
    try{
        const resp = await fetch(dogecoin);
        const data = await resp.json();
        return data;
    }
    catch(e){
        alert("No se pudo realizar la acción. Por favor intente nuevamente. " + e);
    }  
}
const getValorEthereum = async () => {
    try{
        const resp = await fetch(ethereum);
        const data = await resp.json();
        return data;
    }
    catch(e){
        alert("No se pudo realizar la acción. Por favor intente nuevamente. " + e);
    }  
}
const getValorLitecoin = async () => {
    try{
        const resp = await fetch(litecoin);
        const data = await resp.json();
        return data;
    }
    catch(e){
        alert("No se pudo realizar la acción. Por favor intente nuevamente. " + e);
    }  
}
const getValorRipple = async () => {
    try{
        const resp = await fetch(ripple);
        const data = await resp.json();
        return data;
    }
    catch(e){
        alert("No se pudo realizar la acción. Por favor intente nuevamente. " + e);
    }  
}

let contador = 0;
let boton = document.getElementById("boton");
let historial = document.createElement("div");
historial.className = "historial";

boton.onclick = async () => {
    let moneda = document.getElementById("Divisa").value;
    let valorComun = document.getElementById("valor").value;
    let monedaCripto = document.getElementById("criptomoneda").value;
    let resultadoFinal = document.getElementById("result");
    
    let bitcoinData = await getValorBitcoin();
    if (moneda === 'Peso argentino' && monedaCripto === 'Bitcoin'){
        resultadoFinal.value = valorComun / bitcoinData['ARS'];  

    } else if (moneda === 'USD Dolar'&& monedaCripto === 'Bitcoin'){
        resultadoFinal.value = valorComun / bitcoinData['USD'];

    } else if (moneda === 'Euro' && monedaCripto ==='Bitcoin'){
        resultadoFinal.value = valorComun / bitcoinData['EUR'];

    }else if (moneda === 'Libra' && monedaCripto ==='Bitcoin'){
        resultadoFinal.value = valorComun / bitcoinData['GBP'];

    } else if (moneda === 'Yuan' && monedaCripto ==='Bitcoin'){
        resultadoFinal.value = valorComun / bitcoinData['CNY'];
    };

    let dogecoinData = await getValorDogecoin();
    if (moneda === 'Peso argentino' && monedaCripto === 'Dogecoin'){
        resultadoFinal.value = valorComun / dogecoinData['ARS'];

    } else if (moneda === 'USD Dolar'&& monedaCripto === 'Dogecoin'){
        resultadoFinal.value = valorComun / dogecoinData['USD'];

    } else if (moneda === 'Euro' && monedaCripto ==='Dogecoin'){
        resultadoFinal.value = valorComun / dogecoinData['EUR'];

    }else if (moneda === 'Libra' && monedaCripto ==='Dogecoin'){
        resultadoFinal.value = valorComun / dogecoinData['GBP'];

    } else if (moneda === 'Yuan' && monedaCripto ==='Dogecoin'){
        resultadoFinal.value = valorComun / dogecoinData['CNY'];
    };

    let ethereumData = await getValorEthereum();
    if (moneda === 'Peso argentino' && monedaCripto === 'Ethereum'){
        resultadoFinal.value = valorComun / ethereumData['ARS'];

    } else if (moneda === 'USD Dolar'&& monedaCripto === 'Ethereum'){
        resultadoFinal.value = valorComun / ethereumData['USD'];

    } else if (moneda === 'Euro' && monedaCripto ==='Ethereum'){
        resultadoFinal.value = valorComun / ethereumData['EUR']

    }else if (moneda === 'Libra' && monedaCripto ==='Ethereum'){
        resultadoFinal.value = valorComun / ethereumData['GBP'];

    } else if (moneda === 'Yuan' && monedaCripto ==='Ethereum'){
        resultadoFinal.value = valorComun / ethereumData['CNY'];
    };

    let litecoinData = await getValorLitecoin();
    if (moneda === 'Peso argentino' && monedaCripto === 'Litecoin'){
        resultadoFinal.value = valorComun / litecoinData['ARS'];

    } else if (moneda === 'USD Dolar'&& monedaCripto === 'Litecoin'){
        resultadoFinal.value = valorComun / litecoinData['USD'];

    } else if (moneda === 'Euro' && monedaCripto ==='Litecoin'){
        resultadoFinal.value = valorComun / litecoinData['EUR'];

    }else if (moneda === 'Libra' && monedaCripto ==='Litecoin'){
        resultadoFinal.value = valorComun / litecoinData['GBP'];

    } else if (moneda === 'Yuan' && monedaCripto === 'Litecoin'){
        resultadoFinal.value = valorComun / litecoinData['CNY'];
    };

    let rippleData = await getValorRipple();
    if (moneda === 'Peso argentino' && monedaCripto === 'Ripple'){
        resultadoFinal.value = valorComun / rippleData['ARS'];

    } else if (moneda === 'USD Dolar'&& monedaCripto === 'Ripple'){
        resultadoFinal.value = valorComun / rippleData['USD'];

    } else if (moneda === 'Euro' && monedaCripto ==='Ripple'){
        resultadoFinal.value = valorComun / rippleData['EUR'];

    }else if (moneda === 'Libra' && monedaCripto ==='Ripple'){
        resultadoFinal.value = valorComun / rippleData['GBP'];

    } else if (moneda === 'Yuan' && monedaCripto ==='Ripple'){
        resultadoFinal.value = valorComun / rippleData['CNY'];
    };

    if (contador === 0) {
        $('body').append("<button class='boton2'>Convertir de nuevo</button>");
        historial.innerHTML =
            `<h3>Historial de conversiones</h3>
            <ul></ul>
        `;
        document.body.appendChild(historial);
        
    }
   
    let item = document.createElement("li");
    item.innerText = "De " + valorComun + " " + moneda + " " + "a " + monedaCripto + " " + "=" + " " + document.getElementById("result").value;
    historial.appendChild(item);

    contador++;
    $(document).ready(function() {
        $(".boton2").click(function() {
            const valComun = document.getElementById("valor");
            valComun.value = "";
            resultadoFinal.value= "";
        });
    });
}

