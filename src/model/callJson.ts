export type PromiseResolve<T> = (value?: T | PromiseLike<T>) => void; 
export type PromiseReject = (error?: any) => void; 

export class callJson {
    
    static appelJson(urlJson: string) {
        return new Promise((resolve: PromiseResolve<any>, reject: PromiseReject): void => {
            var request = new XMLHttpRequest();
            request.open('GET', urlJson);
            request.send();
            request.onload = () => { resolve(JSON.parse(request.response)); }
        });
    }
}
/*
console.log(request.response);
console.log(structureJson);
*/