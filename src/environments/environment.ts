// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCTSIeG0G74poLRX1ZNQJphSWgPGD6Uj1I',
    authDomain: 'just-for-today-c43e3.firebaseapp.com',
    databaseURL: 'https://just-for-today-c43e3.firebaseio.com',
    projectId: 'just-for-today-c43e3',
    storageBucket: 'just-for-today-c43e3.appspot.com',
    messagingSenderId: '819188652514'
  },
  apiUrl: 'http://localhost:3000/v2'
  // apiUrl: 'https://o8ode1k5le.execute-api.us-east-1.amazonaws.com/dev/feeds'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
