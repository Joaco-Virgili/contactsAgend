import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacto } from 'src/app/interface/contacto';
import { FormsModule } from '@angular/forms';
import { ContactsService } from 'src/app/service/contact.service';
import { generarMensajeError, generarMensajeExito } from 'src/app/helpers/messege';

@Component({
  selector: 'app-nuevo-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.scss']
})
export class NuevoContactoComponent {
  contactsService = inject(ContactsService);
  @Output() cerrar = new EventEmitter();
  @Output() newContact = new EventEmitter<Contacto>();
  @Input() contacto:Contacto = {
    id: 0,
    name: '',
    lastName: '',
    address: '',
    email: '',
    image: '',
    number: '',
    company: '',
    userId: 0
  }


  async onSubmit(){
    this.contacto.id ?
    this.editarContacto() :
    this.agregarContacto();
  }

  async agregarContacto(){
    const res = await this.contactsService.create(this.contacto);
    this.cerrar.emit();
    if(res){
      generarMensajeExito('Contacto agregado');
      this.newContact.emit(this.contacto)
    } else {
      generarMensajeError('Error agregando contacto');
    }
  }

  async editarContacto(){
    const res = await this.contactsService.edit(this.contacto);
    this.cerrar.emit();
    if(res){
      generarMensajeExito('Contacto editado');
    } else {
      generarMensajeError('Error editando contacto');
    }
  }

}