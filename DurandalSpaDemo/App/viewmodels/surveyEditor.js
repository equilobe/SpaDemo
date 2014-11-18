define(['viewmodels/survey', 'viewmodels/question', 'viewmodels/questionEditor'], function (Survey, Question, QuestionEditor) {
    return function (survey) {
        var that = this;
        this.survey = survey || new Survey();
        this.questionEditors = ko.observableArray();

        _(this.survey.questions()).each(function (question) {
            that.questionEditors.push(new QuestionEditor(question));
        });

        this.addQuestion = function () {
            var question = new Question();
            that.survey.questions.push(question);
            that.questionEditors.push(new QuestionEditor(question));
        }

    };
});