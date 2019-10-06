import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private REST_API_SERVER = "/devices";

  constructor(private httpClient: HttpClient) { }

  public getDevices() {
    return this.httpClient.get(environment.apiendpoint + this.REST_API_SERVER);
  }
}
