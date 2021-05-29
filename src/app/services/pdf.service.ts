import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pdf } from '../interfaces/pdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  url = 'http://localhost:3000/api/pdf';

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  createpdf(pdf: Pdf){
    return this.httpClient.post(`${this.url}`, pdf);
  }

}
