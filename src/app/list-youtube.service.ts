import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ListYoutubeService {

  constructor(private http: HttpClient) {
    console.log("Service App Started...");
  }
  
  getToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    const endereco = `https://accounts.google.com/o/oauth2/auth?
    client_id=696284516252-1vufd032qqhini9fmq63bicfpeefsq9c.apps.googleusercontent.com&
    scope=https://www.googleapis.com/auth/youtube&
    response_type=token`;
    return this.http
      .get(endereco, httpOptions)
      .pipe(catchError((e: Response) => throwError(e)));
  }

  getYoutube(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer zdaYWHQB5ZIioeWz_UtOms34",
        "Accept": "application/json"
      })
    };
    const endereco = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data}&key=AIzaSyCOBJuijMH4IlI_YUvzYvbsyjBHSP9z1Nw `;
    return this.http
      .get(endereco, httpOptions)
      .pipe(catchError((e: Response) => throwError(e)));
  }


}
