'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'instaclone-frontend',
    podModulePrefix: 'instaclone-frontend/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }
  ENV.authenticationURL = 'http://localhost:1337/auth/login'
  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    authenticationRoute: 'login',
    routeAfterAuthentication: 'home',
    routeIfAlreadyAuthenticated: 'home',
    crossOriginWhitelist: [ENV.authenticationURL]
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: ENV.authenticationURL,
    identificationField: 'identification',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    // refreshAccessTokens: true, // Mudar quando for tratar isso
    // serverTokenRefreshEndpoint: ENV.accountApi + '/login/refresh-token',
    // refreshLeeway: 600,
    // timeFactor: 1000
  };

  return ENV;
};
