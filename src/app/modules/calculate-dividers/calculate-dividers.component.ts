import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculateDividersService } from './calculate-dividers.service';

@Component({
  selector: 'app-calculate-dividers',
  templateUrl: './calculate-dividers.component.html',
  styleUrls: ['./calculate-dividers.component.scss']
})
export class CalculateDividersComponent implements OnInit {

  forms: FormGroup;
  numbers: any;
  constructor(private formBuilder: FormBuilder, private calculateDividersService: CalculateDividersService) {
    this.forms = this.formBuilder.group({
      Number: [, [Validators.required, Validators.min(1)]]
    });

  }

  get f(){
    return this.forms.controls;
  }

  ngOnInit(): void {
    console.log(this.numbers);
  }

  calculate(obj){
    obj.Number = Number(obj.Number);
    console.log(obj);
    this.calculateDividersService.calculate(obj).subscribe((res: any) => {
      console.log(res);
      this.numbers = res.result;
    })
  }

}
