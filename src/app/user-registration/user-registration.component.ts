import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular'; 
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}
  dismiss() {  
    this.modalCtrl.dismiss();  
  }  
}
