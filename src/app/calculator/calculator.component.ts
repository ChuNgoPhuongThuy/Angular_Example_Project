import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  formInput!: FormGroup;
  constructor(private formBuilder : FormBuilder) { }
  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      firstNumber: '',
      secondNumber: ''
    })
  }

  onAdd(){
    window.alert(Number(this.formInput.value.firstNumber + this.formInput.value.secondNumber))
  }

  onSub(){
    window.alert(Number(this.formInput.value.firstNumber - this.formInput.value.secondNumber))
  }

  onMultiple(){
    window.alert(Number(this.formInput.value.firstNumber * this.formInput.value.secondNumber))
  }

  onDevide(){
    window.alert(Number(this.formInput.value.firstNumber / this.formInput.value.secondNumber))
  }

}



