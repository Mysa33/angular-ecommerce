export class Slide {
    
    public data:any;
    public flag:number;
    public firstRowData:any =[];
    public secondRowData:any = [];

    public firstRowStatus:boolean;
    public secondRowStatus:boolean;

    setFirstRow(data, firstRowStatus, flag):any{  
        
        this.data = data;
        this.firstRowStatus = firstRowStatus;
        let dataLength:number = this.data.length;
        this.flag = Math.floor(dataLength/2);
        for(let i in this.data){
            if(i < flag ){
                this.firstRowData.push(this.data[i]);  
            }  
        }
        return this.firstRowData;

    }

    setSecondRow(data,secondRowData,flag):any{  
        
        this.data = data;
        this.secondRowData = secondRowData;
        let dataLength:number = this.data.length;
        this.flag = Math.floor(dataLength/2);
        let arrayData:any[] = [];
        for(let i in this.data){
            if(i >= flag ){
                arrayData.push(this.data[i]);  
            }  
        }
        return this.secondRowData = arrayData;

    }
    
}
