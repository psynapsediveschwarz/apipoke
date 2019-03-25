import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
