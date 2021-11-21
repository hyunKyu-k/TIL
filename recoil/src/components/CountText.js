import React from 'react';
import { useRecoilValue } from 'recoil';
import { countState } from './Atom/Atom';


const CountText = () => {
    const count = useRecoilValue(countState);
    return (
        <div>
            Text Input Count: {count}
        </div>
    );
};

export default CountText;