import { Injectable } from '@angular/core';


import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../core/services/auth.service';
import { take, map, switchMap, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private RESOURCE_PATH = '/devices';
  private SAMPLE_UID = '65432123456';

  constructor(
    private httpClient: HttpClient,
    private afAuth: AngularFireAuth,

  ) { }



  public getDevices() {
    const params = new HttpParams();
    // this.afAuth.authState.pipe(
    // mergeMap(user =>{
    //  return this.httpClient.get(environment.apiendpoint + this.RESOURCE_PATH, { params: params.append('userid', user.uid) })
    // }));



    // user => {
    //     params = params.append('userid', user.uid);
    //     console.log('afAuth state user', user)
    //   });
    return this.afAuth.authState.pipe(
      mergeMap((user: any) => {
        return this.httpClient.get(environment.apiendpoint + this.RESOURCE_PATH, { params: params.append('userid', user.uid) });
      }));
    // const user = this.afAuth.authState.toPromise();

    // // params = params.append('userid', this.SAMPLE_UID);

    // user.then(user => {
    //   params = params.append('userid', this.SAMPLE_UID);
    //   return this.httpClient.get(environment.apiendpoint + this.RESOURCE_PATH, { params: params });
    // })


  }
}
