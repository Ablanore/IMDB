import { Personne } from "./personne.js";
export class Film {
    constructor(lefilm) {
        this._idfilm = lefilm.id !== undefined ? lefilm.id : "";
        this._title = lefilm.title !== undefined ? lefilm.title : "";
        this._fullTitle = lefilm.fullTitle !== undefined ? lefilm.fullTitle : "";
        this._originalTitle = lefilm.originalTitle !== undefined ? lefilm.originalTitle : "";
        this._releaseDate = lefilm.releaseDate !== undefined ? lefilm.releaseDate : "";
        this._acteurs = lefilm.actorList !== undefined ? lefilm.actorList.map(c => new Personne(c.id, c.name, c.asCharacter)) : [];
    }
    get idfilm() { return this._idfilm; }
    get title() { return this._title; }
    get fullTitle() { return this._fullTitle; }
    get originalTitle() { return this._originalTitle; }
    get releaseDate() { return this._releaseDate; }
    set idfilm(LEidfilm) { this._idfilm = LEidfilm; }
    set title(LEtitle) { this._title = LEtitle; }
    set fullTitle(LEfullTitle) { this._fullTitle = LEfullTitle; }
    set originalTitle(LEoriginalTitle) { this._originalTitle = LEoriginalTitle; }
    set releaseDate(LEreleaseDate) { this._releaseDate = LEreleaseDate; }
}
