import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navBarStatus = '';
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log('button was clicked');
    this.clicked.emit();
  }

   // Open the menu on click 
   onOpen(): void{
    this.navBarStatus = 'true';
  }

  // Close the menu on click 
  onClose(): void{
    this.navBarStatus = '';
  }

}
