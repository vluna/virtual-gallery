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

// Other
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    ExhibitionsComponent
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
    FlexLayoutModule
  ],
  providers: [
    ExhibitionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
