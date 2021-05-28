import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';

// Services
import { ExhibitionsService } from './services/exhibitions.service';

// Pipes
import { ExhibitionsFilterPipe } from './pipes/exhibitions-filter.pipe';

// Other
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    ExhibitionsComponent,
    ExhibitionsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    ExhibitionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
