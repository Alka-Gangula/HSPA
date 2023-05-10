import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  @ViewChild('Form')
  addPropertyForm!: NgForm;
  constructor(private router:Router){}
  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    console.log("form submitted");
    console.log(this.addPropertyForm);


  }
}