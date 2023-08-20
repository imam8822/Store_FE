import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { environment } from 'src/environments/environment';
import { Response } from 'src/app/Models/response';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts():Observable<Response> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    return this.httpClient.get<Response>(`${environment.apiUrl}/Product/GetAll`, { headers: headers });
  }
}
