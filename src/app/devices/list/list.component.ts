import { Component, OnInit } from '@angular/core';

import { DeviceService } from '../../core/services/device.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  devices;
  constructor(public deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.getDevices().subscribe(devices => this.devices = devices);
  }



}
