import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonService } from './services/common.service';
import { MatChipsModule } from '@angular/material/chips';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { SnackBarService } from './services/snackbar.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    NoopAnimationsModule
  ],
  providers: [
    CommonService,
    SnackBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
