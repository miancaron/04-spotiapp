import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6jmI7X5GwuTlfVe6LvfDeG7R0lEFyV_4g3wRmxrQgMLR6qgN6pxTW_hQCo5YJ_a5gIlCi0P4dHTSGNJQ'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
          .subscribe( data => {
            console.log(data);
          } );

  }

}
