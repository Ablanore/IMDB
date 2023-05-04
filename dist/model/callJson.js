export class callJson {
    static appelJson(urlJson) {
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('GET', urlJson);
            request.send();
            request.onload = () => { resolve(JSON.parse(request.response)); };
        });
    }
}
/*
console.log(request.response);
console.log(structureJson);
*/ 
