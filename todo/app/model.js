"use strict";
var model = {
    user: "Pandiyan",
    items: [
        { action: "update anti virus", done: false },
        { action: "read a book daily", done: false },
        { action: "workout for 15 mins", done: false }
    ]
};
var Model = (function () {
    function Model() {
        this.user = "Pandiyan";
        this.items = [
            new TodoItem("update anti virus", false),
            new TodoItem("read a book daily", false),
            new TodoItem("workout for 15 mins", false)
        ];
    }
    return Model;
}());
exports.Model = Model;
var TodoItem = (function () {
    function TodoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
