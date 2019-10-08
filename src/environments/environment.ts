// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiendpoint: 'https://ccnnen1pn6.execute-api.ap-south-1.amazonaws.com/dev',
  firebase: {
    apiKey: 'AIzaSyA718n2EoQEbjiOFc96gzEVZLKiNW9yU7o',
    authDomain: 'orion-iot.firebaseapp.com',
    databaseURL: 'https://orion-iot.firebaseio.com',
    projectId: 'orion-iot',
    storageBucket: '',
    messagingSenderId: '522548589142',
    appId: '1:522548589142:web:d0c56e872fc5b8629a41f7'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
