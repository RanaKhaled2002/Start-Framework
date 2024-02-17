import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nameData!:boolean;
  ageData!:boolean;
  emailData!:boolean;
  passwordData!:boolean;

  showNameLabel(u:any)
  {
    if(u.target.value.length > 0)
      this.nameData = true
    else
      this.nameData = false
  }

  showAgeLabel(u:any)
  {
    if(u.target.value.length > 0)
      this.ageData = true
    else
      this.ageData = false
  }

  showEmailLabel(u:any)
  {
    if(u.target.value.length > 0)
      this.emailData = true
    else
      this.emailData = false
  }

  showPasswordLabel(u:any)
  {
    if(u.target.value.length > 0)
      this.passwordData = true
    else
      this.passwordData = false
  }
}
