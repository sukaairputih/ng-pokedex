import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { FormEntryService } from './form-entry.service';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.scss']
})
export class FormEntryComponent implements OnInit, OnDestroy {
  @Output() formChange = new EventEmitter<string>();
  enterFormPokemon: FormGroup;
  subscriptions: Subscription[];
  message : string;


  @Output() 
  name: string;
  @Output() 
  weight: number;
  @Output()
  age: number;
  @Output()
  pokemonValues: any[];

  latestData: any;

  constructor(private formBuilder: FormBuilder, private formDataService: FormEntryService) { }

  ngOnInit() {
    this.enterFormPokemon = this.formBuilder.group({
      entername: [''],
      enterage: [''],
      enterweight: [''],
      enterheight: ['']
    });

    this.formDataService.dataUpdated.subscribe((data) => {
      this.latestData = data;
    })
  }

  ngOnDestroy() {
    // this.subscriptions.forEach(s => s.unsubscribe());
  }

  onSubmit( value : any ) { 
    this.checkNumber( value.enterheight );
    this.checkNumber( value.enterweight );
    // this.checkValues( value );
    this.checkValidate( );
    this.name = value.entername;
    this.age = value.enterage;
    this.weight = value.enterweight;
  }

  //TODO change to array
  public checkNumber(number: any) {
    let self_number = number;
    let valuesPokemon: any[] = [];

    var regexNumber = /^\d+$/;

    valuesPokemon.push(self_number);

    valuesPokemon.forEach(function (value){
      // console.log("within ar: " + value);

      if(self_number.match(regexNumber)){
        console.log("this nmber: " + self_number);
        // this.weight = value;
      } else {
        // console.log("this not nmber: " + self_number);
      }
    });
  }

  public checkValidate(){
    if(this.enterFormPokemon.valid){
      this.enterFormPokemon.reset();
    } else {
      //TODO show pop up
    }
  }

  public passValueToModal(...args: any[]){

    console.log("test passValueToModal -> " + args.length);

  }
}
