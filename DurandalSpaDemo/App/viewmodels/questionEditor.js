define(['viewmodels/question', 'viewmodels/answer'], function (Question, Answer) {
    return function (question) {
        this.question = question || new Question();
        this.addAnswer = function () {
            this.question.answers.push(new Answer());
        };
    };
});