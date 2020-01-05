import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class CommunicationService {
  data: string;
  receiveData: EventEmitter<string>;
  constructor() {
    this.data = "";
    this.receiveData =  new EventEmitter<string>();
  }

  onReceiveData(d: string) : void {
     this.data = d;
     this.receiveData.emit(this.data);
  }
}
