// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
        apiKey: 'AIzaSyDLps28blvsEqFOCxWgDHSd2c0HfVBSO54',
        authDomain: 'doctorprescriptionapp.firebaseapp.com',
        databaseURL: 'https://doctorprescriptionapp.firebaseio.com',
        projectId: 'doctorprescriptionapp',
        storageBucket: 'doctorprescriptionapp.appspot.com',
        messagingSenderId: '946507249664'
  }
};
