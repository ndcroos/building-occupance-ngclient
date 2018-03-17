export class Room {
    id: string;
    
    constructor(obj?:any){
        this.id = obj && obj.id || null;
    }
}
