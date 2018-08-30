export class Slide {
    
    public data:any;
    public flag:number;
    public firstRowData:any =[];
    public secondRowData:any = [];

    public firstRowStatus:boolean;
    public secondRowStatus:boolean;

    setFirstRow(data,firstRowStatus,flag):any{  
        this.data = data;
        this.firstRowStatus = firstRowStatus;
        let dataLength:number = this.data.length;
        this.flag = Math.floor(dataLength/2);
        this.data.map((value, index)=>{
            if(index < flag ){
                this.firstRowData.push(value);  
            }  
        });
        return this.firstRowData;
    }

    setSecondRow(data,secondRowData,flag):any{  
        this.data = data;
        this.secondRowData = secondRowData;
        let dataLength:number = this.data.length;
        this.flag = Math.floor(dataLength/2);
        let arrayData:any[] = [];
        this.data.map((value, index)=>{
            if(index >= flag ){
                arrayData.push(value);  
            }  
        });
        this.secondRowData = arrayData;
        return this.secondRowData;
    }
    
}
