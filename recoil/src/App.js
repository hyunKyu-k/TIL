import React from 'react';
import {
  RecoilRoot,
} from 'recoil'
import CharacterCounter from './components/CharacterCounter';

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
};

export default App;