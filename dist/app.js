//#region Import des Class
//import { Personnage } from "./model/personnage.js";
//Import des Datas
//import { RaceData } from "./data/RaceData.js";
//#endregion import des Class
export function maFunction() {
}
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
