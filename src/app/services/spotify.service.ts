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
      'Authorization': 'Bearer BQA5mVNidSX4vU2d_IA_Mm0WH1Qy-uDAUKPohGuo_GQBKF0Mw2f7Vrx6dFn1avb2TEC9Yc9carFKLq__p8I'
    });

    return this.http.get(url, { headers });

   }

  getNewReleases(){

    return this.getQuery( 'browse/new-releases?limit=20' )
              .pipe( map( data => data['albums'].items));

  }

  getArtistas ( termino: string ) {
   
    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
              .pipe( map( data => data['artists'].items));

  }

  getArtista ( id: string ) {
   
    return this.getQuery( `artists/${ id }` );
              // .pipe( map( data => data['artists'].items));

  }

  getTopTracks ( id: string ) {
   
    return this.getQuery( `artists/${ id }/top-tracks?country=us` )
               .pipe( map( data => data['tracks']));

  }

}
