import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
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
      this.ms.open('Número de teléfono copiado correctamente', '👍', {duration: 1000})
    }if (value === 'correo') {
      this.clipboard.copy(this.correo);
      this.ms.open('Correo electrónico copiado correctamente', '👍', {duration: 1000})
    }
    return
  }

  constructor(
    private clipboard:Clipboard,
    private ms:MatSnackBar  ){}
}
