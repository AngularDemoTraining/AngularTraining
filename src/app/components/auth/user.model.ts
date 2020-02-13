export class User {
    constructor(
      private _token: string,
      public id: number,
      public email: string,
      public fullName: string,
      public role: string,
    ) {}
  
    get token() {
      return this._token;
    }
  }
  