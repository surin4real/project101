// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  stripeKey: 'pk_test_vV4J1xv4Erxp0qbd6zhAjZmo',
  firebase: {
   apiKey: "AIzaSyBt8XJ4UA9ouIVQa8hEe6RdZrQMvRhX2us",
    authDomain: "textapp-7cc4a.firebaseapp.com",
    databaseURL: "https://textapp-7cc4a.firebaseio.com",
    projectId: "textapp-7cc4a",
    storageBucket: "textapp-7cc4a.appspot.com",
    messagingSenderId: "889662776912"
  }
};
