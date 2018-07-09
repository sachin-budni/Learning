import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CRUDComponent } from './crud/crud.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CrudService } from './crud/crud.service';
import { FormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule
        } from '@angular/material';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    CRUDComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,FormsModule,BrowserAnimationsModule,AngularFireAuthModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [CrudService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
