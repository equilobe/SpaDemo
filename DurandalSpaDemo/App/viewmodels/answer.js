define(function () {
    return function (data) {
        data = data || { name: null };
        this.name = ko.observable(data.name || "New Answer");
    };
});