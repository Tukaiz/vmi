'use strict';

// The Package is past automatically as first parameter
module.exports = function(Vmiorders, app, auth, database) {

  app.get('/vmiorders/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/vmiorders/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/vmiorders/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/vmiorders/example/render', function(req, res, next) {
    Vmiorders.render('index', {
      package: 'vmiorders'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
