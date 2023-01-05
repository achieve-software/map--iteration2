//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)));
const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));

console.log(euroPrices, dolarPrices);
