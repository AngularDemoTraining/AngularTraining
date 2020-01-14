import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class AccountService {
    constructor(private http: HttpClient) { }
    
}