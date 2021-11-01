import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {

  constructor(public modalCtrl: ModalController,private http:HttpClient) { }

  ngOnInit() {}

  onSubmit(data: object){
    console.log(data);
  let headers = new Headers();
    headers.append('Contetn-Type','application/json');
    this.http.post('http://127.0.0.1:8000/people',JSON.stringify(data))
    .subscribe((result)=>{
      
      console.log(result);
      
    });
    
  }
  
  dismiss() {  
    this.modalCtrl.dismiss();  
  }  
}
