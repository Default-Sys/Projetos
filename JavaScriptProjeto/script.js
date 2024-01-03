
//   Meus Sinceros agradecimentos Primeiramente Para minha Pessoa,
// que mesmo com todas as dificuldades que estou enfrentando todo o esforço todas as horas
// acordado estudando e treinando os códigos assistindo as aulas do Rodolfo Mori 
// Hoje COM MUITA ALEGRIA E SATISFAÇÃO EU QUEBRO UMA ENORME BARREIRA EM MINHA MENTE E  EM 
// MINHA VIDA , PORQUE HOJE EU PROVEI PARA MIM MESMO QUE SOU CAPAZ QUE É POSSIVEL REALIZAR MEU 
// SONHO QUE É ENTRAR NA PROGRAMAÇÃO !!!

// Em segundo lugar e não menos importante quero agradeçer ao RODOLFO MORI  e sua comunidade
// que lançou esse desafio, que nos ensina , nos testa e que nos aprimora em cada Aula
// e digo mais As aulas não são incríveis , SÃO ESPETACULARES !!!!!!

// HOJE OLHO PARA MEU PROJETO , VEJO E SINTO NA PELE A MINHA PAIXÃO DE PROGRAMAR SE TORNANDO 
// MAIS QUE UM SONHO SIM, SE TORNANDO REALIDADE! 

// SEI QUE PODE NÃO ESTAR PERFEITO , MAS EU CONSEGUI !!
// BUCANDO CONHECIMENTO , BUSCANDO INFORMAÇÃO MESMO QUE NO CHATGPT , LENDO TESTANDO
// TESTANDO , TESTANDO , TESTANDO , TESTANDO , TREINANDO, TREINANDO , TREINANDO , TREINANDO
// E tudo dando errado e tudo faltando alguma coisa , espaço correto botão correto, lugar correto
// código correto, forma correta , LOGICA DE PROGRAMAÇÂO CORRETA , saber onde usar
// como usar , quando usar porque usar pra que usar 
// Foram dias e noites de dúvidas e te testes (oque comuando faz, e se eu por ali como fica)
// E AQUI ESTÁ O RESULTADO !!!!!

// É MUITO LINDO VER TODA SUA LOGICA FAZENDO SENTIDO E AINDA MAIS O COMPUTADOR PEGANDO 
// TODA ESSA SUA LOGICA QUE VOCÊ MEMSO MONTOU E TRANSFORMANDO ELA , ISSO É MAGICO!!!!
// MUIITO SATISFATÓRIO /

// e para cada obstáculo que eu enfrentei nunca pensei que eu não iria conseguir 
// Sempre pensava que a forma que eu estou fazendo era a errada e que sim existem muitas
// formas de se fazer ou executar aquilo que estava dando errado , eu só precisava encontrar
// a forma correta! E eu Encontrei!!!




const button = document.querySelector(".button1");  // mapenado 
const currencySelect2 = document.querySelector(".currency2"); // mapenado 
const currencySelect1 = document.querySelector(".currency1");  // mapenado 
const alterarfoto2 = document.querySelector(".foto2");  // mapenado 


  // referencias de valores de conversão de meodas
  //   Constantes para Taxas de Câmbio em relação ao Dólar Americano (USD)

  const BRL_TO_USD =  0.21;  
  const EUR_TO_USD = 1.11;      
  const GBP_TO_USD = 1.30;     
  const BTC_TO_USD = 42455;  
  const USD_TO_USD = 1; 
  
  //   Constantes para as taxas de câmbio em relação ao Real (BRL)
  
  const USD_TO_BRL = 5.2;       // Multiplicando
  const EUR_TO_BRL = 5.40;     // Multiplicando
  const GBP_TO_BRL = 6.2;      // Multiplicando
  const BTC_TO_BRL = 205991;   // Multipicando
  const BRL_TO_BRL = 1; 
  
  //  Constantes para as taxas de câmbio em relação ao Libra (GBP)
  
  const USD_TO_GBP = 0.8;   
  const EUR_TO_GBP = 0.87;  
  const BRL_TO_GBP = 0.16;
  const BTC_TO_GBP = 33451.57;  
  const GBP_TO_GBP = 1;
  
  //  Constantes para as taxas de câmbio em relação ao Euro (EUR)
  
  const USD_TO_EUR = 0.82;      
  const BRL_TO_EUR =  0.19;
  const GBP_TO_EUR = 1.15;  
  const BTC_TO_EUR = 38226.32; 
  const EUR_TO_EUR = 1; 
  
  //   Constantes para as taxas de câmbio em relação ao Bitcoin (BTC)
  
  const USD_TO_BTC = 0.000023;      
  const EUR_TO_BTC = 0.000026;  
  const GBP_TO_BTC = 0.000029; 
  const BRL_TO_BTC = 0.0000049;
  const BTC_TO_BTC = 1;   
  
    const dolarToday = 5.2;  //referencia de valor do dolar
    const euroToday = 6.2;  // referencia de valor do euro
    const libraToday = 6.8; //  referencia de valor da libra
    const bitcoinToday = 210731.69  //  referencia de valor da libra
   
  // termina aqui a referencia de conversão de moedas


function convert() {

  
  const inputValue = document.querySelector(".input1").value;
  const valoraconverter = document.querySelector("#toconvert");
  const valorconvertido = document.querySelector("#converted");

  const dolarToday = 5.2;  //referencia de valor do dolar
  const euroToday = 6.2;  // referencia de valor do euro
  const libraToday = 6.8; //  referencia de valor da libra
  const bitcoinToday = 210731; //  referencia de valor bitcoin
  const realToday = 1;  //  referencia de valor da real

    // Primeira etapa valor padrão dolar

    if (currencySelect2.value == "real" && currencySelect1.value =="real") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputValue * BRL_TO_BRL );
      valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "real" && currencySelect1.value =="dolar") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputValue * USD_TO_BRL);
      valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency: "USD" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "real" && currencySelect1.value =="euro") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputValue * EUR_TO_BRL);
      valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency: "EUR" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "real" && currencySelect1.value =="libra") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputValue * GBP_TO_BRL);
      valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
        style:"currency",
        currency: "GBP" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "real" && currencySelect1.value =="bitcoin") {   
        // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputValue * BTC_TO_BRL);
      valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency: "BTC" ,
      }).format(inputValue);
    }



      // Segunda etapa valor padrão dolar

    if (currencySelect2.value == "dolar" && currencySelect1.value =="dolar") {   
        // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputValue * USD_TO_USD );
      valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency: "USD" ,
      }).format(inputValue);
    }

  if (currencySelect2.value == "dolar" && currencySelect1.value =="real") {   
    // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
    valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue * BRL_TO_USD);
    valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
      style:"currency",
      currency: "BRL" ,
    }).format(inputValue);
  }

  if (currencySelect2.value == "dolar" && currencySelect1.value =="euro") {   
    // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
    valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue * EUR_TO_USD);
    valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
      style:"currency",
      currency: "EUR" ,
    }).format(inputValue);
  }

    if (currencySelect2.value == "dolar" && currencySelect1.value =="libra") {   
    // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
    valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      }).format(inputValue * GBP_TO_USD);
      valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
        style:"currency",
        currency: "GBP" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "dolar" && currencySelect1.value =="bitcoin") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputValue * GBP_TO_USD);
      valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency: "BTC" ,
      }).format(inputValue);

    }



  
    // Terceiro etapa valor padrão dolar


    if (currencySelect2.value == "euro" && currencySelect1.value =="dolar") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputValue * USD_TO_EUR );
      valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency: "USD" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "euro" && currencySelect1.value =="real") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputValue * BRL_TO_EUR);
      valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "euro" && currencySelect1.value =="euro") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputValue * EUR_TO_EUR);
      valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency: "EUR" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "euro" && currencySelect1.value =="libra") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputValue * GBP_TO_EUR);
      valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
        style:"currency",
        currency: "GBP" ,
      }).format(inputValue);
    }

      if (currencySelect2.value == "euro" && currencySelect1.value =="bitcoin") {   
        // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(inputValue * BTC_TO_EUR);
        valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
          style:"currency",
          currency: "BTC" ,
        }).format(inputValue);
      }
    

       // Quarta etapa valor padrão dolar

      if (currencySelect2.value == "libra" && currencySelect1.value =="dolar") {   
        // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(inputValue * USD_TO_GBP );
        valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
          style:"currency",
          currency: "USD" ,
        }).format(inputValue);
      }
  
      if (currencySelect2.value == "libra" && currencySelect1.value =="real") {   
        // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(inputValue * BRL_TO_GBP);
        valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
          style:"currency",
          currency: "BRL" ,
        }).format(inputValue);
      }
  
      if (currencySelect2.value == "libra" && currencySelect1.value =="euro") {   
        // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(inputValue * EUR_TO_GBP);
        valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
          style:"currency",
          currency: "EUR" ,
        }).format(inputValue);
      }
  
      if (currencySelect2.value == "libra" && currencySelect1.value =="libra") {   
        // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(inputValue * GBP_TO_GBP);
        valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
          style:"currency",
          currency: "GBP" ,
        }).format(inputValue);
      }
  
        if (currencySelect2.value == "libra" && currencySelect1.value =="bitcoin") {   
          // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(inputValue * BTC_TO_GBP);
          valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "BTC" ,
          }).format(inputValue);
        }


// Quinta etapa valor padrão dolar

    if (currencySelect2.value == "bitcoin" && currencySelect1.value =="dolar") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(inputValue * USD_TO_BTC );
      valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency: "USD" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "bitcoin" && currencySelect1.value =="real") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(inputValue * BRL_TO_BTC);
      valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "bitcoin" && currencySelect1.value =="euro") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(inputValue * EUR_TO_BTC);
      valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency: "EUR" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "bitcoin" && currencySelect1.value =="libra") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(inputValue * GBP_TO_BTC);
      valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
        style:"currency",
        currency: "GBP" ,
      }).format(inputValue);
    }

    if (currencySelect2.value == "bitcoin" && currencySelect1.value =="bitcoin") {   
      // Se o meu Select2 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(inputValue * BTC_TO_BTC);
      valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency: "BTC" ,
      }).format(inputValue);
    }


    // Invertendo as  opção de conversão

    if (currencySelect1.value == "real" && currencySelect2.value =="real") {   
      // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputValue * BRL_TO_BRL );
      valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL" ,
      }).format(inputValue);
    }

    if (currencySelect1.value == "real" && currencySelect2.value =="dolar") {   
      // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputValue * BRL_TO_USD );
      valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL" ,
      }).format(inputValue);
    }

    if (currencySelect1.value == "real" && currencySelect2.value =="euro") {   
      // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputValue * BRL_TO_EUR );
      valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL" ,
      }).format(inputValue);
    }

    if (currencySelect1.value == "real" && currencySelect2.value =="libra") {   
      // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(inputValue * BRL_TO_GBP );
      valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL" ,
      }).format(inputValue);
    }

    if (currencySelect1.value == "real" && currencySelect2.value =="bitcoin") {   
      // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
      valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(inputValue * BRL_TO_BTC );
      valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL" ,
      }).format(inputValue);
    }

        //dolar americano = currency: "USD" NumberFormat("en-US"
        //real brasileiro = currency: "BRL" NumberFormat("pt-BR"
        //Euro            = currency: "EUR" NumberFormat("de-DE"
        //libra esterlina = currency: "GBP" NumberFormat("en-GB"
        //bitcoin         = currency: "BTC" NumberFormat("de-DE"
        
        // PROCESSO CONVERSAO DO DOLAR 

        if (currencySelect1.value == "dolar" && currencySelect2.value =="dolar") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(inputValue * USD_TO_USD );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency: "USD" ,
          }).format(inputValue);
        }

        if (currencySelect1.value == "dolar" && currencySelect2.value =="real") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(inputValue * USD_TO_BRL );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency: "USD" ,
          }).format(inputValue);
        }

        if (currencySelect1.value == "dolar" && currencySelect2.value =="libra") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(inputValue * USD_TO_GBP );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency: "USD" ,
          }).format(inputValue);
        }

        if (currencySelect1.value == "dolar" && currencySelect2.value =="euro") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",         
          }).format(inputValue * USD_TO_EUR );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency: "USD" ,
          }).format(inputValue);

        }

        if (currencySelect1.value == "dolar" && currencySelect2.value =="bitcoin") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
          }).format(inputValue * USD_TO_BTC );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency: "USD" ,
          }).format(inputValue);
        }
             // PROCESSO CONVERSAO DO EURO 

        if (currencySelect1.value == "euro" && currencySelect2.value =="euro") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(inputValue * EUR_TO_EUR );
          valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "EUR" ,
          }).format(inputValue);
        }
        if (currencySelect1.value == "euro" && currencySelect2.value =="real") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(inputValue * EUR_TO_BRL );
          valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "EUR" ,
          }).format(inputValue);
        }
        if (currencySelect1.value == "euro" && currencySelect2.value =="dolar") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(inputValue * EUR_TO_USD );
          valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "EUR" ,
          }).format(inputValue);
        }
        if (currencySelect1.value == "euro" && currencySelect2.value =="libra") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(inputValue * EUR_TO_GBP );
          valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "EUR" ,
          }).format(inputValue);
        }
        if (currencySelect1.value == "euro" && currencySelect2.value =="bitcoin") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
          }).format(inputValue * EUR_TO_BTC );
          valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
          style:"currency",
          currency: "EUR" ,
        }).format(inputValue);
        }

        // PROCESSO CONVERSAO LIBRA ESTERLINA

        if (currencySelect1.value == "libra" && currencySelect2.value =="libra") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(inputValue * GBP_TO_GBP );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency: "GBP" ,
          }).format(inputValue);
        }
        if (currencySelect1.value == "libra" && currencySelect2.value =="dolar") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(inputValue * GBP_TO_USD );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency: "GBP" ,
          }).format(inputValue);
        }
        if (currencySelect1.value == "libra" && currencySelect2.value =="real") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(inputValue * GBP_TO_BRL );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency: "GBP" ,
          }).format(inputValue);
        }
        if (currencySelect1.value == "libra" && currencySelect2.value =="euro") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(inputValue * GBP_TO_EUR );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency: "GBP" ,
          }).format(inputValue);
        }
        if (currencySelect1.value == "libra" && currencySelect2.value =="bitcoin") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
          }).format(inputValue * GBP_TO_BTC );
          valoraconverter.innerHTML = new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency: "GBP" ,
          }).format(inputValue);
        }


        // PROCESSO CONVERSAO  BITCOIN


        if (currencySelect1.value == "bitcoin" && currencySelect2.value =="bitcoin") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
          }).format(inputValue * BTC_TO_BTC );
          valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "BTC" ,
          }).format(inputValue);
        }
        if (currencySelect1.value == "bitcoin" && currencySelect2.value =="real") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
          valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
           style: "currency",
           currency: "BRL",
          }).format(inputValue * BTC_TO_BRL );
          valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "BTC" ,
          }).format(inputValue);
          }
        if (currencySelect1.value == "bitcoin" && currencySelect2.value =="dolar") {   
          // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
           valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
          }).format(inputValue * BTC_TO_USD );
          valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "BTC" ,
          }).format(inputValue);
              }
        if (currencySelect1.value == "bitcoin" && currencySelect2.value =="libra") {   
            // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
            valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
          }).format(inputValue * BTC_TO_GBP );
            valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
                style:"currency",
                currency: "BTC" ,
          }).format(inputValue);
                }
        if (currencySelect1.value == "bitcoin" && currencySelect2.value =="euro") {   
              // Se o meu Select1 estiver selecionado o valor de dolar , entre aqui
             valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
               style: "currency",
               currency: "EUR",
          }).format(inputValue * BTC_TO_EUR );
              valoraconverter.innerHTML = new Intl.NumberFormat("de-DE",{
                style:"currency",
                currency: "BTC" ,
          }).format(inputValue);
              }    
  


  convert()
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
    namechange2.innerHTML = "libra"
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
