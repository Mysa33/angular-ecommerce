export class Json {
    constructor(public data:any){
        this.data = data;
    }
    jsonTransform():any{
        return JSON.stringify(this.data);
    }
    jsonParse():any{
        return JSON.parse(this.data);
    }
}
