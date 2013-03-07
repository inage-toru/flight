define(
    [
        // コンポーネントモジュール
        'components/flight/lib/component'
    ],
    
    function (defineComponent) {
        'use strict';
        // TodoListコンポーネントコンストラクタ
        var todoList = function () {
            // デフォルトアトリビュート
            this.defaultAttrs({
                itemSelector: 'li',
                checkboxSelector: 'input[type="checkbox"]',
                buttonSelector: 'button.close'
            });
            // clickイベントハンドラー
            this.clickHandler = function (event, data) {
                // イベントターゲットがチェックボックスかの判別
                if (this.select('checkboxSelector').is(event.target)) {
                    $(data.el).toggleClass('completed', event.target.checked);
                }
                // イベントターゲットがクローズボタンかの判別
                if (this.select('buttonSelector').is(event.target)) {
                    $(data.el).remove();
                }
            };
            // 初期化イベントハンドラ
            this.after('initialize', function (event) {
                // newTodoイベントを購読
                this.on(document, 'newTodo', function (event, data) {
                    this.$node.append('<li class="well well-small"><label class="checkbox"><input type="checkbox">' + data.todo + '<button class="close">×</button></label></li>');
                });
                // clickイベントを購読
                this.on('click', {
                    itemSelector: this.clickHandler
                });
            });
        };
        // TodoListコンポーネントを定義
        return defineComponent(todoList);
    }
);