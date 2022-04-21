import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { faArrowRight, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from '../../services/project.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ProjectService]
})
export class ContactComponent implements OnInit {

  public title: String;
  faArrowRight = faArrowRight;
  faMapMarkerAlt = faMapMarkerAlt;
  public contact: Contact;
  public status: String= '';

  public changeClass:boolean;


  constructor(
    private _projectService: ProjectService
  ) {
    this.changeClass =false;
    this.title= 'Get in touch';
    this.contact = new Contact('','','','')
  }

  ngOnInit(): void {
  }

  //Guardar los datos
  onSubmitContact(form: any): void{
    console.log(this.contact);
    this._projectService.saveContact(this.contact).subscribe(
      response =>{
         if(response.contact){
             this.status = 'success';
             this.showModalSwal2successContact();
             form.reset(); 
         }else{
             this.status = 'failed';
         }
      } 
    );
  }

  showModalSwal2successContact(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: "Thanks! I'll reply you  as soon as possible",
      showConfirmButton: false,
      timer: 3500
    })
  }

  
}