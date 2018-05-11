import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UserService {
  
  // Use for more request per hour
  client_id = "YOUR_CLIENT_DATA";
  client_secret = "YOUR_CLIENT_DATA";

  constructor(private http: Http) { }

  getUser(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}?cliend_id=${this.client_id}&client_secret=${this.client_secret}`).pipe(
      map((response: Response) => response.json())
    )
  }
}
