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
      'Authorization': 'Bearer BQAA2Rf6rqd0s6PU6Q4nH4pySr1rIu2E3MFHoz9lCBwzeOl9M_hOi0p4YgRIYAI2OI6-k50mMmnTxZT6HMw'
    });

    return this.http.get(url, { headers });

   }

  getNewReleases(){

    return this.getQuery( 'browse/new-releases?limit=20' )
              .pipe( map( data => data['albums'].items));

  }

  getArtistas ( termino: string) {
   
    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
              .pipe( map( data => data['artists'].items));

  }

  getArtista ( id: string) {
   
    return this.getQuery( `artists/${ id }` );
              // .pipe( map( data => data['artists'].items));

  }

}
