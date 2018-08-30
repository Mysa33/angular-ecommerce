export class TeamMember {

    public data:any;
    public _i:number;

    setMember(data,_i):any{
        this.data = data;
        let dataArray = {
            "name" : data[_i].name,
            "img" : data[_i].picture.large,
            "phone" :data[_i].phone,
            "email" : data[_i].email
        }
        return dataArray;
    }
}
