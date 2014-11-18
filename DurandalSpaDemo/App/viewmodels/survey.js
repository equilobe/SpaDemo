define(['viewmodels/question'], function (Question) {
    return function (data) {
        var that = this;
        data = data || { name: null, questions: null};

        function loadQuestions() {
            if (!data.questions)
                return;
            
            return _(data.questions).map(function (questionData) {
                return new Question(questionData);
            });
        }

        this.name = ko.observable(data.name || "New Survey");
        this.questions = ko.observableArray(loadQuestions() || [
            new Question({ name: "Question 1" }),
            new Question({ name: "Question 2" })
        ]);
    };
});