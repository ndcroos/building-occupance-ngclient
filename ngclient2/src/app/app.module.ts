import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DraggableModule } from './draggable/draggable.module';
import { RequestInfoComponent } from './request-info/request-info.component';
import { AddInhabitantComponent } from './add-inhabitant/add-inhabitant.component';

import { FileUploadService } from './file-upload.service';

import { HomeComponent } from './home/home.component';
import { BuildingComponent } from './building/building.component';
import { RoomRowComponent } from './room-row/room-row.component';
import { BuildingRowComponent } from './building-row/building-row.component';
import { InhabitantImageComponent } from './inhabitant-image/inhabitant-image.component';
import { InhabitantNameDisplayComponent } from './inhabitant-name-display/inhabitant-name-display.component';
import { InhabitantSearchComponent } from './inhabitant-search/inhabitant-search.component';
import { InhabitantSearchInjactables } from "";
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component'

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
    HomeComponent,
    BuildingComponent,
    RoomRowComponent,
    BuildingRowComponent,
    InhabitantImageComponent,
    InhabitantNameDisplayComponent,
    InhabitantSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    DraggableModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FileUploadService, InhabitantSearchInjactables],
  bootstrap: [AppComponent]
})
export class AppModule { 

}