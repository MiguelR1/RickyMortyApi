import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styles: [
  ]
})
export class ContactPageComponent {

  correo:string = 'miguel.arp.2003@gmail.com';
  numero:string = '+584241258686';

  copiar(value:string){
    if (value === 'numero') {
      this.clipboard.copy(this.numero);
    }if (value === 'correo') {
      this.clipboard.copy(this.correo);
      alert('Se ha copiado '+this.correo+' correctamente')
    }
    return
  }

  constructor( private clipboard:Clipboard){}
}
