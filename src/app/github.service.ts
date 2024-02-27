import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  private baseUrl = 'https://api.github.com';
  private token = environment.githubToken;
  
  constructor(private http:HttpClient) { }

  getUser(username: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'token ' + this.token);
    return this.http.get(`${this.baseUrl}/users/${username}`, { headers });
  }

  getUserRepos(username: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'token ' + this.token);
    return this.http.get(`${this.baseUrl}/users/${username}/repos`, { headers });
  }
}
