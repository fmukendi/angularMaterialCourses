
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatInputModule, MatFormFieldModule, MatDialogModule, MatMenuModule,
  MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
