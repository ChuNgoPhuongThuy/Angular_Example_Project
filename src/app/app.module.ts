import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CalculatorComponent,
    InputComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule.forRoot([{path: '', component: CalculatorComponent}])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
