import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  pronoun.forEach(function (pro) {
    adj.forEach(function (adjetive) {
      noun.forEach(function (sus) {

        console.log(`${pro}${adjetive}${sus}.com`);
      });
    });
  });



}
