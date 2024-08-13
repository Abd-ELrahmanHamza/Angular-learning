import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contacts/contact.model';
import { ContactsService } from '../contacts/contacts.service';

@Component({
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  contact: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    favoritesRanking: null,
    phone: {
      phoneNumber: '',
      phoneType: '',
    },
    address: {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    },
  };
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return;
    this.contactService.getContact(contactId).subscribe((contact) => {
      console.log('Contact', contact);
      if (contact) this.contact = contact;
    });
  }

  saveContact(contactForm: NgForm) {
    console.log('contact form', contactForm.value);
    this.contactService.saveContact(this.contact).subscribe({
      next: (contact) => {
        console.log('Saved contact', contact);
        this.router.navigate(['/contacts']);
      },
      error: (err) => {
        console.error('Error saving contact', err);
      },
    });
  }
}
