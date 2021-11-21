import { atom, selector } from "recoil";

export const textState = atom({
    key: 'textState',
    default: '',
});

export const countState = selector({
    key: 'countState',
    get: ({ get }) => {
        const text = get(textState);
        return text.length
    }
})

export const inputText = atom({
    key: 'inputText',
    default: '',
})