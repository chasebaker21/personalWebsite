import { Component, OnInit } from '@angular/core';
import { HoverDirective } from '../hover.directive';

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
  hoverCalculator: boolean = false;
  clickUpvoice: boolean = false;
  clickMovie: boolean = false;
  clickTrivia: boolean = false;
  clickBudget: boolean = false;
  clickCalculator: boolean = false;

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
  calculatorHover() {
    this.hoverCalculator = !this.hoverCalculator;
  }
  

  // activates the ngclass title animation for whichever project title is selected
  moveUp() {
    if(this.hoverUpvoice){
    this.clickUpvoice = true;
    } else if (this.hoverMovie) {
      this.clickMovie = true;
    } else if (this.hoverTrivia) {
      this.clickTrivia = true;
    } else if(this.hoverBudget) {
      this.clickBudget = true;
    }else if (this.hoverCalculator) {
      this.clickCalculator = true;
    }
  }

  // activates the reverse of the title animation
  moveDown() {
    if(!this.hoverUpvoice){
      this.clickUpvoice = false;
      } if (!this.hoverMovie) {
        this.clickMovie = false;
      } if (!this.hoverTrivia) {
        this.clickTrivia = false;
      } if(!this.hoverBudget) {
        this.clickBudget = false;
      }  if(!this.hoverCalculator) {
        this.clickCalculator = false;
      }
  }
}
