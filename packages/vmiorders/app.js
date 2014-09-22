'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Vmiorders = new Module('vmiorders');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Vmiorders.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Vmiorders.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Vmiorders.menus.add({
    title: 'vmiorders example page',
    link: 'vmiorders example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  //Vmiorders.angularDependencies(['vr.directives.slider']);
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Vmiorders.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Vmiorders.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Vmiorders.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  Vmiorders.aggregateAsset('css', 'vmiorders.css');
  Vmiorders.aggregateAsset('js', 'angular-slider.min.js');

  //Vmiorders.angularDependencies(['vr.directives.slider']);

  return Vmiorders;
});
