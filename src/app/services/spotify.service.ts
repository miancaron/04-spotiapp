import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Reactive extensions
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBUllyBKccDiaZUIY7jZngKgHyYC3bXPChy1bGKgyXIjj0amkCDyMekNEHQcVFI-PvWDzR5-39IP3vvwOY'
    });

    return this.http.get(url, { headers });

   }

  getNewReleases(){

    return this.getQuery( 'browse/new-releases?limit=20' )
              .pipe( map( data => data['albums'].items));

  }

  getArtista( termino: string) {
   
    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
              .pipe( map( data => data['artists'].items));

  }

}
