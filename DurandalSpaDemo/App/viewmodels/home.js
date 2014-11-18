define(function () {
    var module = {
        surveyList: ko.observableArray(),
        activate: function () {
            return $.getJSON("api/survey").done(function (data) {
                module.surveyList(data);
            });
        }
    };

    return module;
});