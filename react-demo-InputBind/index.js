import React from 'react';
import ReactDOM from 'react-dom';
import InputBind from './js/InputBind';
import Header from './js/Header';

let content = 'div中的内容绑定输入框';

ReactDOM.render(
    <div>
        <Header content={content} />
        <InputBind />
    </div>,
    document.getElementById('root')
);

