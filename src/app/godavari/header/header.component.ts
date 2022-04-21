import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  burger:any;
  toggle:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  
toggleNav(){
  // this.burger = document.querySelector('.burger');
  // this.burger.classList.toggle('active');

  this.toggle = !this.toggle;   
}


}
