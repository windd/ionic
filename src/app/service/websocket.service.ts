import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor(
    private http: HttpClient
  ) {}
  /**
   * 获取站点列表
   */

   getRealdata(id: number): any {
     console.log('shizheem:', id);
     return this.http.get('/data/realdata/' + id);
   }
}
