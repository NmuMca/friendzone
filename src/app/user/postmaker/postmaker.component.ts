import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-postmaker',
  templateUrl: './postmaker.component.html',
  styleUrls: ['./postmaker.component.css']
})
export class PostmakerComponent implements OnInit {
  images:any = [];
  constructor(private picker:ImagePicker) { }

  ngOnInit(): void {
  this.picker.hasReadPermission().then((val)=>{
      if(val==false){
        this.picker.hasReadPermission();
      }
    },(err)=>{
      this.picker.requestReadPermission();
    });
  }

  pickImages(){ 
    let options:ImagePickerOptions={
      maximumImagesCount:10,
      outputType:1
    };
    this.picker.getPictures(options).then((res)=>{
      for(var i = 0;i<res.lenght;i++){
        let base64image = "data:image/png:base64,"
        +res[i];
        this.images.push(base64image);
      
      }
    },(err)=>{
      alert(JSON.stringify(err));
    });
  }
}