import { Component, OnInit } from '@angular/core';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-add-inhabitant',
  templateUrl: './add-inhabitant.component.html',
  styleUrls: ['./add-inhabitant.component.scss']
})
export class AddInhabitantComponent implements OnInit {
    
    // Variable for selected photo.
    fileToUpload: File = null;
    
    //
    fileUploadService : FileUploadService;

    constructor() { }

    ngOnInit() {
    
    }
  
    // handles change event.
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }
    
    //
    uploadFileToActivity() {
        this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
          // do something, if upload success
            }, error => {
                console.log(error);
            });
    }
    
    
    /*
    let inhabitantInfo = new FormGroup({
        firstName: new FormControl("");
        firstName: new FormControl("");
        photo: new FormControl("");
    })
    
    */

}
