import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
//import { ChildComponentComponent } from './child-component/child-component.component';
//import { ParentComponentComponent } from './parent-component/parent-component.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
