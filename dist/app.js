//#region Import des Class
//import { Blob } from "buffer";
import { Film } from "./model/film.js";
import { callJson } from "./model/callJson.js";
//import { unlink } from 'node:fs/promises';
//Import des Datas
//import { RaceData } from "./data/RaceData.js";
//#endregion import des Class
/*
try {
  await unlink('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (error: unknown) {
  console.error('there was an error:', error.message);
}

console.log('création fichier');
*/
console.log('biloute');
const tabIMDB = ['tt0120685', 'tt0257076', 'tt0803096', 'tt0831387', 'tt11291274', 'tt13320622', 'tt3741700'];
for (const idFilm of tabIMDB) {
    var requestURL = 'https://raw.githubusercontent.com/Ablanore/IMDB/master/src/data/' + idFilm + '.json';
    callJson.appelJson(requestURL).then(function (lefilm) {
        new Film(lefilm);
        console.log(lefilm.fullTitle);
    });
    //console.log(leFilm);
    //console.log(leFilm.fullTitle.toString());
}
console.log('biloute fin');
export function maFunction() { }
window.maFunction = maFunction;
//#region les évènements des composants de la page
//#endregion les évènements des composants de la page
//#region Gestion_Tab
//Code pour la gestion des menus tabs
const tabs = document.querySelectorAll('[data-tab-value]');
const tabInfos = document.querySelectorAll('[data-tab-info]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabValue);
        if (!target) {
            throw new Error(`Impossible de trouver l'élément cible avec la valeur "${tab.dataset.tabValue}"`);
        }
        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active');
        });
        target.classList.add('active');
    });
});
//#endregion Gestion_Tab
