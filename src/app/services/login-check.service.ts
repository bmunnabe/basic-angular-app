import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LoginCheckService {
    public hasAuth: boolean;
    public userName: string;
    private URL = '../../assets/data.json';
    constructor(private http: HttpClient) {
    }

    public getUserDetails() {
        return this.http.get(this.URL);
    }
}
