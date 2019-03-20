import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQAut1HYegaRFz0VHMXUh85kcfr2Om5lrvBq9BDcrpcmtTZ9Sv2EYG_9XVLd0WLHBN61soEv75Ufsbf266s13h641r2I6YxDdL9xaGEZli7-1RKG0ZEFBAfTd-SRh3nLV0FUK8SiG51Jq3iqKug');

    return this.http.get(url, { headers });

  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = '&type=artist') {

    const param = '&offset=0&limit=20' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }

  getArtist(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }
}
