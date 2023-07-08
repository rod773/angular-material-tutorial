import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './components/typography/typography.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { IconsComponent } from './components/icons/icons.component';


@NgModule({
  declarations: [AppComponent, TypographyComponent, ToggleComponent, IconsComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
