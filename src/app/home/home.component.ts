import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}
  async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: UserRegistrationComponent  
    });  
    return await modal.present();  
  }  
}
