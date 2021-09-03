import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpParams} from '@angular/common/http';

//@Injectable({
    //providedIn: 'root',
  //})

@Injectable()
export class freeApiservice{

     constructor (private HttpClient:HttpClient){}
     getAlbums():Observable<any>
     {
         return this.HttpClient.get("https://jsonplaceholder.typicode.com/albums");
     }
     getPhotosBySelectedAlbumId(selectedAlbumId:string):Observable<any>
     {
         let params1=new HttpParams().set('albumId',selectedAlbumId);
         return this.HttpClient.get("https://jsonplaceholder.typicode.com/photos",{params:params1});
     }
}