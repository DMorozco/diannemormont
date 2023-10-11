import { Component, OnInit } from '@angular/core';
import { ContactDto, ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'diannemormont-contact-privado',
  templateUrl: './contact-privado.component.html',
  styleUrls: ['./contact-privado.component.css']
})
export class ContactPrivadoComponent implements OnInit {

  contacts: ContactDto[] = [];

  contact: ContactDto = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private contactService: ContactService) { }
  ngOnInit(): void {
    this.contactService.getAll().subscribe((contact: ContactDto[]) => {
      this.contacts = contact;
    });
  }

  create() {
    if (!this.contact.name || !this.contact.email || !this.contact.message ) {
      alert('Nombre, email y mensaje con campos requeridos ');
      return;
    }
    this.contactService.create(this.contact).subscribe((contact: ContactDto) => {
      this.contacts.push(contact);
      this.contact = {
        name: '',
        email: '',
        message: '',
      }
    })
  }
}




