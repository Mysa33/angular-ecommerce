export class Toggle {

    constructor(public status:boolean){
        this.status = false;
    }
    simpleToggle(status):boolean{
        this.status = status;
        if(!this.status){
            this.status = true;
        }else{
            this.status = false;
        }
        return this.status;
    }
}
