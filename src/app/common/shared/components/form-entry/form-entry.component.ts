import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.enterFormPokemon = this.formBuilder.group({
      entername: [''],
      enterage: [''],
      enterweight: [''],
      enterheight: ['']
    });
  }

  ngOnDestroy() {
    // this.subscriptions.forEach(s => s.unsubscribe());
  }

  onSubmit( value : any ) { 
    this.checkNumber( value.enterheight );
    this.checkNumber( value.enterweight );
    
    this.checkValidate( value );
  }

  //TODO change to array
  public checkNumber(number: any) {
    let self_number = number;
    let valuesPokemon: any[] = [];

    var regexNumber = /^\d+$/;

    valuesPokemon.push(self_number);
    console.log("length: " + valuesPokemon.length);

    valuesPokemon.forEach(function (value){
      console.log("within ar: " + value);

      if(self_number.match(regexNumber)){
        console.log("this nmber: " + self_number);
      } else {
        console.log("this not nmber: " + self_number);
      }
    });

    

    // if(self_number.match(regexNumber)){
    //   console.log("this nmber: " + self_number);
    //   //valuesPokemon.push(self_number);
    //   //this.passValueToModal(valuesPokemon);
    // } else {
    //   console.log("this not nmber: " + self_number);
    // }
  }

  public checkValidate(value : any){
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
