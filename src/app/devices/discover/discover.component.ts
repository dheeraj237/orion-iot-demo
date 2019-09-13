import { Component, OnInit } from '@angular/core';


// import { WiFiControl } from 'wifi-control';


declare const wifi: any;

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  // _wifi: wifi;
  constructor() { }

  ngOnInit() {

    // this.wifi.init({
    //   debug: true
    // });

    // //  Try scanning for access points:
    // this.wifi.scanForWiFi(function (err, response) {
    //   if (err) console.log(err);
    console.log(navigator);
    // });
    // var connection = window.navigator.connection ||
    //   window.navigator.mozConnection ||
    //   null;
    // if (connection === null) {
    //   document.getElementById('ni-unsupported').classList.remove('hidden');
    // } else if ('metered' in connection) {
    //   document.getElementById('nio-supported').classList.remove('hidden');
    //   [].slice.call(document.getElementsByClassName('old-api')).forEach(function (element) {
    //     element.classList.remove('hidden');
    //   });

    //   var bandwidthValue = document.getElementById('b-value');
    //   var meteredValue = document.getElementById('m-value');

    //   connection.addEventListener('change', function (event) {
    //     bandwidthValue.innerHTML = connection.bandwidth;
    //     meteredValue.innerHTML = (connection.metered ? '' : 'not ') + 'metered';
    //   });
    //   connection.dispatchEvent(new Event('change'));
    // } else {
    //   var typeValue = document.getElementById('t-value');
    //   [].slice.call(document.getElementsByClassName('new-api')).forEach(function (element) {
    //     element.classList.remove('hidden');
    //   });

    //   connection.addEventListener('typechange', function (event) {
    //     typeValue.innerHTML = connection.type;
    //   });
    //   connection.dispatchEvent(new Event('typechange'));
    // }
  }

}
