import { Component } from '@angular/core';
import {Albums} from './classes/albums';
import {Photos} from './classes/photos';
import{freeApiservice} from './services/freeapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     constructor(private _freeapiservice:freeApiservice){

     }
     ouralbums:Albums[];
     AlbumSelected:Number;
     ourphotos:Photos[];
     
  ngOnInit(){
    this._freeapiservice.getAlbums()
    .subscribe(
      data=>(
        this.ouralbums=data
      )
    )
  }   


OnAlbumSelected(selectedAlbumId:any):void{
  
  this._freeapiservice.getPhotosBySelectedAlbumId(selectedAlbumId).subscribe(
    data=>
    (
    this.ourphotos=data
    )
  )
}
}