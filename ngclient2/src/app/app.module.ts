import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DraggableModule } from './draggable/draggable.module';
import { RequestInfoComponent } from './request-info/request-info.component';
import { AddInhabitantComponent } from './add-inhabitant/add-inhabitant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadService } from './file-upload.service';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { 
        path: 'home', 
        component: HomeComponent 
    },
    
    { 
        path: 'add-inhabitant', // localhost/add-inhabitant
        component: AddInhabitantComponent 
    }

];

@NgModule({
  declarations: [
    AppComponent,
    RequestInfoComponent,
    AddInhabitantComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DraggableModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}