import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculateDividersService } from './calculate-dividers.service';

@Component({
  selector: 'app-calculate-dividers',
  templateUrl: './calculate-dividers.component.html',
  styleUrls: ['./calculate-dividers.component.scss']
})
export class CalculateDividersComponent implements OnInit {
  loading: boolean = false;
  forms: FormGroup;
  numbers: any;

  TypeEnum: any = [{id:1, description: "TI"}, {id: 2, description: "Cooking"}]

  constructor(private formBuilder: FormBuilder, private calculateDividersService: CalculateDividersService) {
    this.forms = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Type: ['']
    });

  }

  get f(){
    return this.forms.controls;
  }

  ngOnInit(): void {
    this.getById();
  }

  GetAll(){
    this.calculateDividersService.GetAll().subscribe((response)=>{
      console.log(response, " GetAll ");
    })
  }

  getById(){
    this.calculateDividersService.GetById().subscribe((response)=>{
      console.log(response, " GetById ");
    })
  }

  calculate(obj){
    obj.Type = parseInt(obj.Type);
    console.log(obj);

    this.calculateDividersService.Register(obj).subscribe((response) => {
      console.log(response);
    });

    // this.loading = true;
    // obj.Number = Number(obj.Number);
    // this.numbers = {};
    // this.calculateDividersService.calculate(obj).subscribe((res: any) => {
    //   this.numbers = res.result;
    //   setTimeout(() => {
    //     this.loading = false;
    //   }, 500);
    // })
  }

}
