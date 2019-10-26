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
      enterage: ['']
    });

    // this.subscriptions = [
    //   this.entryForm.controls.entry.valueChanges.subscribe(value => this.formChange.emit(value))
    // ];
  }

  ngOnDestroy() {
    // this.subscriptions.forEach(s => s.unsubscribe());
  }

  onSubmit( pokemondata ) { 
    // this.submitted = true;
    console.log("test tets " + pokemondata.entername + ' - ' + pokemondata.enterage);
  }
}
