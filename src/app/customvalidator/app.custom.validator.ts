import { AbstractControl } from '@angular/forms';

export class CustomValidator {
  // if the value is valid, the method will return 'null'
  // for invalid value the method will return JSON as {invalid:true} or
  // {valida:false}
  // so since method returns no-fix value, set the return type as 'any'
  static CheckEven(ctrl: AbstractControl): any {
      let v = parseInt (ctrl.value);
      if(v % 2 === 0) {
        return null;
      } else {
        return {invalid:true};
      }
  }
}
