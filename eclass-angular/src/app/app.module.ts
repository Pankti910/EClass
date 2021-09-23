import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostAddComponent} from './posts/post-add/post-add.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { PostListComponent} from './posts/post-list/post-list.component';
import { FormsModule } from '@angular/forms';

//material

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatExpansionModule } from '@angular/material/expansion'; 

@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent,
    HeaderBarComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
