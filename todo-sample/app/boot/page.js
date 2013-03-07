define(
    [
        'app/component/todo_form',
        'app/component/todo_list'
    ],
    
    function (TodoForm, TodoList) {
        'use strict';
        var initialize = function () {
            TodoForm.attachTo('#todo-form');
            TodoList.attachTo('#todo-list');
        };
        return initialize;
    }
);