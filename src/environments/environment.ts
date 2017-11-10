// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDvTGFFLE3y1os7tZolYmkli7vU1-QbAPE",
    authDomain: "awesome-angular.firebaseapp.com",
    databaseURL: "https://awesome-angular.firebaseio.com",
    projectId: "awesome-angular",
    storageBucket: "awesome-angular.appspot.com",
    messagingSenderId: "615479082969"
  }
};
