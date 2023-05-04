export class Personne {
    constructor(idpersonne, namepersonne, asCharacter) {
        this._idpersonne = idpersonne !== undefined ? idpersonne : "";
        this._namepersonne = namepersonne !== undefined ? namepersonne : "";
        this._asCharacter = asCharacter !== undefined ? asCharacter : "";
    }
    get idpersonne() { return this._idpersonne; }
    get namepersonne() { return this._namepersonne; }
    get asCharacter() { return this._asCharacter; }
    set idpersonne(leidpersonne) { this._idpersonne = leidpersonne; }
    set namepersonne(lenamepersonne) { this._namepersonne = lenamepersonne; }
    set asCharacter(leasCharacter) { this._asCharacter = leasCharacter; }
}
/*
 "id": "nm0000111",
      "image": "https://imdb-api.com/images/original/MV5BMTg2NjA0MzM0OF5BMl5BanBnXkFtZTcwMDU5ODAxMw@@._V1_Ratio0.7727_AL_.jpg",
      "name": "Matthew Broderick",
      "asCharacter": "Dr. Niko Tatopoulos"*/ 
