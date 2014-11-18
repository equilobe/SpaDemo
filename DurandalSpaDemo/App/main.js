requirejs.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],
    function (system, app, viewLocator) {
        system.debug(true);

        app.title = 'SPA Demo';

        app.configurePlugins({
            router: true
        });

        app.start().then(function () {

            viewLocator.useConvention();

            app.setRoot('viewmodels/shell', "entrance");
        });
    });

