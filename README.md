# ShoeManagementApp Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

This web application is built to consume REST API developed in the project https://github.com/sandeepn623/proeins

##Basic functionalities:
This web application provides user with functionalities mentioned below:
1. The user is navigated to a Welcome screen when user hits the URL on a browser. The user can navigate between Home/Welcome screen and shoe list screen from the navigation tab provided. Once in the shoe list screen, the user can perform actions like add, edit, search, delete by clicking on the appropriate buttons.
2. The user can add/create new shoe entries. Appropriate validations are added to avoid user from creating corrupted entry in the database.
3. The user can modify/edit existing shoes details except for Article number and Id. The Article number is disabled. The user can update shoe details by entering minimum of 1 field and maximum of all fields. The API's are designed to handle update for multiple fields in a single request.
4. The user can query by multiple parameters in a single request. The user has to provide atleast 1 field and a maximum of all fields to get the result.
5. The shoe list screen queries all shoe entries from the database and lists on th UI when user lands on Shoe List screen.
6. The user can delete individual shoe entry by clicking on dlete button.
7. To update the stock the user can navigate to edit screen and update only stock value and submit it to update the stock value in the backend database.

##Minimum reuqirements to run the application
1. Install Visual studio code.
2. Install Angular CLI.
3. Modify _shoeUrl in shoe.services.ts file.
4. Change the @CrossOrigin in ShoeController.java in backend project with http:localhost:4200(this url and port is dependent on the configuration to run angular app) 
5. Launch the internal terminal from views in Visual studio and run the command 'npm start'. Once the app is deplyoed successfully. It will be launched in the default browser.

Note: Ensure MySQL server is running and backend web services app is deployed and running. 

##Additonal software used:
ngrok to support local tunneling, so that my app is accesbile from anywhere.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
