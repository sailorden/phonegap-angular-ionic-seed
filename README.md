PHONEGAP, ANGULAR, IONIC SEED
=========

Grunt, Phonegap, Angular and Ionic seed. Very barebones.


## Development

To start developing in the project run:

```bash
grunt serve
```

Then head to `http://localhost:9000` in your browser.

Put all your development code in the app/ directory.

## Tests

To run tests run:

```bash
grunt test
```

## Phonegap ready build

To make the app ready for phonegap to build:

```bash
grunt build
```

All resources are minified and copied to the www directory, incuding third party libraries installed with bower, these will be concatenated and minified into `vendors.js` and `vendors.css` respectively.


## Phonegap build

To build the application with phonegap:

```bash
phonegap build ios|android|windows|whatevs
```

Check the platforms directory.


## NOTE: 

I've left a copy of the original www (www copy) directory with config.xml and res folder. If the working www directory gets wiped out, copy the assets over.

I've ammended the Gruntfile clean task such that it doesn't destroy these resources, but just in case!

## To Do:
Create grunt task to build the www directory as part of the main grunt:build task and remove it from source control.





