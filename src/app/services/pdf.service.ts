import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  url = 'http://localhost:3000/api/pdf';

  constructor(private httpClient: HttpClient) { }
}
