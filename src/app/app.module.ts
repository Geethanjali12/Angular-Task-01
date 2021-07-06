import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginComponent,
    RegisterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({positionClass:'toast-top-right'}),
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    FormsModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MatSidenavModule,
    

  ],
  providers: [
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
