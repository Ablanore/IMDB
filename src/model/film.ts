import { Personne, IPersonne } from "./personne.js";

export interface IFilm {
    //ici on décrit ce qu'il y a dans la structure JSON
    id?: string;
    title?: string;
    fullTitle?: string;
    originalTitle?: string;
    releaseDate?: string;
    actorList?: IPersonne[];
}

export class Film {

    private _idfilm?: string;
    private _title?: string;
    private _fullTitle?: string;
    private _originalTitle?: string;
    private _releaseDate?: string;
    private _acteurs?: Personne[];

    constructor(lefilm: IFilm) {
        this._idfilm = lefilm.id !== undefined ? lefilm.id : "";
        this._title = lefilm.title !== undefined ? lefilm.title : "";
        this._fullTitle = lefilm.fullTitle !== undefined ? lefilm.fullTitle : "";
        this._originalTitle = lefilm.originalTitle !== undefined ? lefilm.originalTitle : "";
        this._releaseDate = lefilm.releaseDate !== undefined ? lefilm.releaseDate : "";
        this._acteurs = lefilm.actorList !== undefined ? lefilm.actorList.map(
            c => new Personne(c.id, c.name, c.asCharacter)): [];
    }

    public get idfilm() { return this._idfilm;}
    public get title() { return this._title;}
    public get fullTitle() { return this._fullTitle;}
    public get originalTitle() { return this._originalTitle;}
    public get releaseDate() { return this._releaseDate;}

    public set idfilm(LEidfilm) { this._idfilm = LEidfilm;}
    public set title(LEtitle) { this._title = LEtitle;}
    public set fullTitle(LEfullTitle) { this._fullTitle = LEfullTitle;}
    public set originalTitle(LEoriginalTitle) { this._originalTitle = LEoriginalTitle;}
    public set releaseDate(LEreleaseDate) { this._releaseDate = LEreleaseDate;}
}