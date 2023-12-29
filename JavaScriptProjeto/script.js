const button = document.querySelector(".button1");  // mapenado 
const currencySelect2 = document.querySelector(".currency2"); // mapenado 
const currencySelect1 = document.querySelector(".currency1");  // mapenado 
const alterarfoto2 = document.querySelector(".foto2");  // mapenado 


console.log(alterarfoto2)

function convert() {
  const inputValue = document.querySelector(".input1").value;
  const valoraconverter = document.querySelector("#toconvert");
  const valorconvertido = document.querySelector("#converted");

  const dolarToday = 5.2;  //referencia de valor do dolar
  const euroToday = 6.2;  // referencia de valor do euro
  const libraToday = 6.2; //  referencia de valor da libra
  const bitcoinToday = 210731.69  //  referencia de valor da libra
  const realToday = 1;  //  referencia de valor da libra

  console.log(currencySelect1.value)


  
  if (currencySelect2.value == "real") {   
    // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
    valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue / dolarToday);
  }
  if (currencySelect2.value == "libra") {   
    // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
    valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / dolarToday);
  }
  if (currencySelect2.value == "bitcoin") {   
    // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
    valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / dolarToday);
  }

  if (currencySelect2.value == "dolar") {   
    // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
    valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
  }

  if (currencySelect2.value == "euro") {
    // Se o meu Select2 estiver selecionado o valor de euro , entre aqui
    valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday);
  
  }

  if (currencySelect1.value == "real"){
  valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue); 

  }

  if (currencySelect1.value == "dolar"){
    valoraconverter.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue);


  }

  if (currencySelect1.value == "euro"){
    valoraconverter.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
  }

  if (currencySelect1.value == "libra"){
    valoraconverter.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);

  }

  if (currencySelect1.value == "bitcoin"){
    valoraconverter.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue);
  }
  


}

function changeCurrency2() {
  

  const namechange2 = document.getElementById("name2")
  const fotochange = document.querySelector(".foto2")

  if(currencySelect2.value == "dolar") {
  namechange2.innerHTML = "Dólar Americano"
  fotochange.src="./estados-unidos (1) 1.png"

  }
  if(currencySelect2.value == "euro") {
    namechange2.innerHTML = "Euro"
    fotochange.src="./euro.png"
    
  }
  if(currencySelect2.value == "libra") {
    namechange2.innerHTML = "Libra"
    fotochange.src="./libra 1.png"
    
  }
  if(currencySelect2.value == "bitcoin") {
    namechange2.innerHTML = "Bitcoin"
    fotochange.src="./bitcoin 1.png"
    
  }
  if(currencySelect2.value == "real") {
    namechange2.innerHTML = "Real"
    fotochange.src="./brasil 2.png"
    
  }
    
  convert()
}

function changeCurrency1(){
  const inputValue = document.querySelector(".input1").value;
  const valoraconverter = document.querySelector("#converted");
  const valorconvertido = document.querySelector("#toconvert");

  const dolarToday = 5.2;  //referencia de valor do dolar
  const euroToday = 6.2;  // referencia de valor do euro
  const libraToday = 6.2; //  referencia de valor da libra
  const bitcoinToday = 210731.69  //  referencia de valor da libra
 

  const namechange1 = document.getElementById("name1");
  const fotochange1 = document.querySelector(".foto1");


  if(currencySelect1.value == "real") {
    namechange1.innerHTML = "Real"
    fotochange1.src="./brasil 2.png"
  
  }
  if(currencySelect1.value == "dolar") {
    namechange1.innerHTML = "Dólar Americano"
    fotochange1.src="./estados-unidos (1) 1.png"
  
  }
  if(currencySelect1.value == "euro") {
      namechange1.innerHTML = "Euro"
      fotochange1.src="./euro.png"
      
  }
  if(currencySelect1.value == "libra") {
      namechange1.innerHTML = "Libra"
      fotochange1.src="./libra 1.png"
      
  }
  if(currencySelect1.value == "bitcoin") {
      namechange1.innerHTML = "Bitcoin"
      fotochange1.src="./bitcoin 1.png"
      
  }
 
 convert()
}
 



currencySelect1.addEventListener("change", changeCurrency1)
currencySelect2.addEventListener("change", changeCurrency2)
button.addEventListener("click", convert)
