define(['viewmodels/answer'], function (Answer) {
    return function (data) {
        data = data || { name: null, answers: null };
        
        function loadAnswers() {
            if (!data.answers)
                return;

            return _(data.answers).map(function (answerData) {
                return new Answer(answerData);
            });
        }

        this.name = ko.observable(data.name || "New Question");
        this.answers = ko.observableArray(loadAnswers() || [
            new Answer({ name: "Answer 1" }),
            new Answer({ name: "Answer 2" })
        ]);
    };
});