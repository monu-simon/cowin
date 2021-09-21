export class VaccinatedDateService {
    date: any
    mm:any
    dd:any
    yy:any
    formatDate:any
    setDate() {
        this.date = new Date();
        console.log(this.date)
        this.mm = this.date.getMonth() + 1;
        this.dd = this.date.getDate();
        this.yy = this.date.getFullYear();
        this.formatDate=this.yy+"-"+this.mm+"-"+this.dd;
    }
    getDate():string{
        return this.formatDate
    }
}