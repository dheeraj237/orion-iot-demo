import { Component, OnInit } from '@angular/core';

import { DeviceService } from '../device.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  devices;
  loading: boolean = true;
  constructor(public deviceService: DeviceService) {
  }

  ngOnInit() {
    setTimeout(() => {
      // this.deviceService.getDevices();
      this.deviceService.getDevices().subscribe(devices => {
        this.devices = devices;
        this.loading = false;
      });
    }, 1000);
    setInterval(() => {
      // this.deviceService.getDevices();
      this.deviceService.getDevices().subscribe(devices => {
        this.devices = devices;
      });
    }, 5000);
  }

  ngOnDestroy() {

  }



}
