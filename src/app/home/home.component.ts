import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hoverUpvoice: boolean = false;
  hoverMovie: boolean = false;
  hoverTrivia: boolean = false;
  hoverBudget: boolean = false;
  clickUpvoice: boolean = false;
  clickMovie: boolean = false;
  clickTrivia: boolean = false;
  clickBudget: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // changes background color when mouse hovers over each element
  upvoiceHover() {
    this.hoverUpvoice = !this.hoverUpvoice;
  }
  movieHover() {
    this.hoverMovie = !this.hoverMovie;
  }
  triviaHover() {
    this.hoverTrivia = !this.hoverTrivia;
  }
  budgetHover() {
    this.hoverBudget = !this.hoverBudget;
  }

  moveUp() {
    if(this.hoverUpvoice){
    this.clickUpvoice = true;
    } else if (this.hoverMovie) {
      this.clickMovie = true;
    } else if (this.hoverTrivia) {
      this.clickTrivia = true;
    } else if(this.hoverBudget) {
      this.clickBudget = true;
    }
  }
}
