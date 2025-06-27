import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  sendEmail(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
  
    emailjs.sendForm('service_d72gh3s', 'template_aweymin', form, 'ga0wkCdSf-LcBDaKB')
      .then((result) => {
        alert('Email sent!');
        form.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email');
      });
  }
  

}
