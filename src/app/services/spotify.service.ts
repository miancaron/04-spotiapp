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

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD5FeJ32uZjts1tXbyoZ-48v7htu-fovjn0BRko3WUTmaqzsjo52maJgU7oC1Fz5e2O2Iq0gA4S-ixkibQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
              .pipe( map( data => data['albums'].items));

  }

  getArtista( termino: string) {
   
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD5FeJ32uZjts1tXbyoZ-48v7htu-fovjn0BRko3WUTmaqzsjo52maJgU7oC1Fz5e2O2Iq0gA4S-ixkibQ'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
              .pipe( map( data => data['artists'].items));

  }

}
