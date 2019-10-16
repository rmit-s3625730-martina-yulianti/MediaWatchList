import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class MediaItemService {
    constructor(private http:  HttpClient){}

    get(medium){
       let getOptions = {
          params: {
            medium }
        }; 

        return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
        .pipe(
          map((response: MediaItemsResponse )=> {
            return response.mediaItems;
          })
        );
    }

    // get(medium) {
    //   let searchParams = new URLSearchParams();
    //   searchParams.append('medium', medium);
    //   return this.http.get('mediaitems', { search: searchParams })
    //     .map(response => {
    //       return response.json().mediaItems;
    //     });
    // }

    add(mediaItem){
        return this.http.post('mediaitems', mediaItem);
    }

    delete(mediaItem){
        return this.http.delete(`mediaitems/${mediaItem.id}`);
    }

}

interface MediaItem{
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}