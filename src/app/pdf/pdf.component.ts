import { Component, OnInit } from '@angular/core';
import { PdfService } from '../services/pdf.service';
import { Pdf } from '../interfaces/pdf';

@Component({
  selector: 'umg-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent {

  constructor(private pdfservice: PdfService) {
  }

  page = 1;
  pdfSrc = '';

  pdfdata: Pdf = {
    name: '',
    created_at: null
    // tslint:disable-next-line:semicolon
  }

  ViewPDF(): void {
    console.log('hola');
  }


  onFileSelected(): void {
    const img: any = document.querySelector('#file');
    delete this.pdfdata.id;
    this.pdfservice.createpdf(this.pdfdata).subscribe(
      rest => {
        console.log('Funciona');
      },
      error => console.error(error)
    );

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer(img.files[0]);
    }
  }

}
