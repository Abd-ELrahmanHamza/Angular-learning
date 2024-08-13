import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  dateOfBirth = new FormControl('');
  favoritesRanking = new FormControl('');
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return;
  }

  saveContact() {
    console.log('Save contact' + this.firstName.value);
    console.log('Save contact' + this.lastName.value);
    console.log('Save contact' + this.dateOfBirth.value);
    console.log('Save contact' + this.favoritesRanking.value);
  }
}
