import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('HomeComponent initialized');
  }

  ngOnChanges(): void {
    console.log('HomeComponent changed');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}
