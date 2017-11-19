var model = {
    user: "Pandiyan",
    items: [
        { action: "update anti virus", done: false },
        { action: "read a book daily", done: false },
        { action: "workout for 15 mins", done: false }
    ]
};

export class Model {
    user;
    items;

    constructor() {
        this.user = "Pandiyan";
        this.items = [
            new TodoItem("update anti virus", false),
            new TodoItem("read a book daily", false),
            new TodoItem("workout for 15 mins", false)
        ]
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}