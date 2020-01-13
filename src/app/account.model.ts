export class Account {
    public fullname: string;
    public email: string;
    public password: string;
    public phone: string;
    public role: string;

    constructor(name: string, email: string, password: string,phone: string,role: string){
        this.fullname = name,
        this.email = email,
        this.password = password,
        this.phone = phone,
        this.role = role
    }
}