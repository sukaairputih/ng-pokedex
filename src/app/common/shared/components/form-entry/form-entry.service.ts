import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: "root"
})
export class FormEntryService {

  dataUpdated:EventEmitter<any> = new EventEmitter();

  constructor() { }

  setLatestData(data) {
    this.dataUpdated.emit(data);
  }

}