import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    headers = new HttpHeaders({
        'X-GitHub-Api-Version': '2022-11-28'
    });

    constructor(
        private http: HttpClient
    ) {}

    fetchUserDetails(userId: string) {
        return this.http.get(`https://api.github.com/users/${userId}`, {
            headers: this.headers
        });
    }

    getRepos(userId: string) {
        return this.http.get(`https://api.github.com/users/${userId}/repos`, {
            headers: this.headers
        });
    }

}