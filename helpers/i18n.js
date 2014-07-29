/**
 * Created by luser on 29/07/14.
 */
var i18next = require("i18next");

module.exports = function () {

    var self = this;

    i18next.init({  lng: 'es-ES',fallbackLng: 'es-ES' ,preload: ['en-US', 'es-ES'],debug: true},function(t) {
        console.log('Loaded resources ');
        console.log('Lang:' + i18next.lng() +', ' + i18next.t("form-comment.name_error") + ', ' + i18next.t("app.name"));
    });

    this.init = function (app) {
        app.use(i18next.handle);
        i18next.registerAppHelper(app)
    };

};