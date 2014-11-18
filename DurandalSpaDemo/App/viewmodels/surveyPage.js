define(['viewmodels/surveyEditor', 'viewmodels/survey'], function (SurveyEditor, Survey) {
    var module = {
        surveyEditor: ko.observable(),
        save: function () {
            var surveyData = ko.toJS(module.surveyEditor().survey);
            $.post("api/survey", surveyData);
        },
        activate: function (id) {
            if (id) {
                return $.getJSON("api/survey/" + id).done(function (data) {
                    module.surveyEditor(new SurveyEditor(new Survey(data)));
                });
            }
            else {
                module.surveyEditor(new SurveyEditor());
            }
        }
    };

    return module;
});