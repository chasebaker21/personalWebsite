import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color: string;
  hoverUpvoice: boolean = false;
  hoverMovie: boolean = false;
  hoverTrivia: boolean = false;
  hoverBudget: boolean = false;

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
}
