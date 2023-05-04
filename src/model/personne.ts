export interface IPersonne {
    id: string;
    name: string;
    asCharacter: string;
}

export class Personne {
    private _idpersonne: string;
    private _namepersonne: string;
    private _asCharacter: string;

    constructor(idpersonne: string, namepersonne: string, asCharacter: string) {
        this._idpersonne = idpersonne !== undefined ? idpersonne : "";
        this._namepersonne = namepersonne !== undefined ? namepersonne : "";
        this._asCharacter = asCharacter !== undefined ? asCharacter : "";
    }
    public get idpersonne() { return this._idpersonne; }
    public get namepersonne() { return this._namepersonne; }
    public get asCharacter() { return this._asCharacter; }
    public set idpersonne(leidpersonne: string) { this._idpersonne = leidpersonne; }
    public set namepersonne(lenamepersonne: string) { this._namepersonne = lenamepersonne; }
    public set asCharacter(leasCharacter: string) { this._asCharacter = leasCharacter; }
}
/*
 "id": "nm0000111",
      "image": "https://imdb-api.com/images/original/MV5BMTg2NjA0MzM0OF5BMl5BanBnXkFtZTcwMDU5ODAxMw@@._V1_Ratio0.7727_AL_.jpg",
      "name": "Matthew Broderick",
      "asCharacter": "Dr. Niko Tatopoulos"*/