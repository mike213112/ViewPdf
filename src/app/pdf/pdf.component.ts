import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'umg-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  page = 1;
  pdfSrc = '';

  constructor() {
  }

  ngOnInit(): void {
    // this.pdfSrc = this.pdfService.getPDF();
    console.log('hola');
  }

  ViewPDF(): void {
    console.log('hola');
  }

  onFileSelected(): void {
    const img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer(img.files[0]);
    }
  }

}
