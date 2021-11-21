import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './Atom/Atom';

const InputText = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div>
            <input value={text} onChange={onChange} />
            <br />
            text: {text}
        </div>
    );
};

export default InputText;