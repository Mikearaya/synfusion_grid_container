import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContainerComponent } from "./container/container.component";
import { GridModule } from "@syncfusion/ej2-angular-grids";
@NgModule({
  declarations: [AppComponent, ContainerComponent],
  imports: [BrowserModule, GridModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
