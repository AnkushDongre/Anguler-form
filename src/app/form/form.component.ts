import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  codeblock : string = "";
  capatcha() : void {
    const alpha = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const a: string = alpha[Math.floor(Math.random() * 10)];
    const b: string = alpha[Math.floor(Math.random() * 10)];
    const c: string = alpha[Math.floor(Math.random() * 10)];
    const d: string = alpha[Math.floor(Math.random() * 10)];
    const codeGen = a + b + c + d;
    this.codeblock = codeGen;
    console.log(codeGen);
  }
  
  onSubmit(formItem: any) {
    console.log(formItem);
    alert("The form is submited successfully.")
  }
  constructor() { }

  ngOnInit(): void {
    this.capatcha();

  }

}
