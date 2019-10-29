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

  public checkNumber(number: any) {
    let number_ = number;

    var regexNumber = /^\d+$/;

    if(number_.match(regexNumber)){
      console.log("this nmber: " + number_);
    } else {
      console.log("this not nmber: " + number_);
    }
  }

  public checkValidate(value : any){
    // console.log("val: " + value + ' -- '+ this.enterFormPokemon.valid);
    if(this.enterFormPokemon.valid){
      this.enterFormPokemon.reset();
    } else {
      //TODO show pop up
    }
  }
}
