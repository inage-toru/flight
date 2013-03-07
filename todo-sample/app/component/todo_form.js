define(
    [
        // コンポーネントモジュール
        'components/flight/lib/component'
    ],
    
    function (defineComponent) {
        'use strict';
        // TodoFormコンポーネントコンストラクタ
        var todoForm = function () {
            // デフォルトアトリビュート
            this.defaultAttrs({
                textSelector: 'input[type="text"]'
            });
            // 初期化イベントハンドラ
            this.after('initialize', function (event) {
                // submitイベントを購読
                this.on('submit', function (event) {
                    // submitイベントのデフォルト処理をキャンセル
                    event.preventDefault();
                    // テキストフィールドから文字列を取得
                    var todo = this.select('textSelector').val();
                    if (!todo) {
                        return;
                    }
                    // newTodoイベントを発行
                    this.trigger('newTodo', {
                        todo: todo
                    });
                    // テキストフィールドをクリア
                    this.select('textSelector').val(null);
                });
            });
        };
        // TodoFormコンポーネントを定義
        return defineComponent(todoForm);
    }
);