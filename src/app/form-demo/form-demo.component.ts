import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent  {
  username : string = undefined;
  password : string = undefined;
  phone : number = undefined;
 
   handleFormValues(formvalues : any){
     console.log(formvalues);
   }

}
