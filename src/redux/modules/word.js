import { firestore } from '../../firebase';

const word_db = firestore.collection('dict');

// Actions
const LOAD   = 'word/LOAD';
const CREATE = 'word/CREATE';

const initialState = {
    word_data: [
    //     {
    //         id: 'list_00',
    //         word: '단어1',
    //         desc: '설명1',
    //         exam: '예시1',
    //     },
        // {
        //     id: 'list_01',
        //     word: '단어2',
        //     desc: '설명2',
        //     exam: '예시2',
        // },
        // {
        //     id: 'list_02',
        //     word: '단어3',
        //     desc: '설명3',
        //     exam: '예시3',
        // },
        // {
        //     id: 'list_03',
        //     word: '단어4',
        //     desc: '설명4',
        //     exam: '예시4',
        // }
    ],    
};

// Action Creators
export const loadWord = (word) => {
    return { type: LOAD, word };
}

export const createWord = (word) => {
    return { type: CREATE, word };
}

// Firebase와 통신
export const loadWordFB = () => {
    return function (dispatch) {
        word_db.get().then((docs) => {
            let word_data = [];
            docs.forEach((doc) => {
                if (doc.exists) {
                    word_data = [...word_data, {id: doc.id, ...doc.data()}];
                }
            });
            // console.log(word_data);
            dispatch(loadWord(word_data));
        });
    };
};

export const addWordFB = (word) => {
    return function (dispatch) {
        // console.log(word);
        let word_data = word;
        word_db.add(word_data).then(() => {
            word_data = { ...word_data };
            // console.log(word_data);
            dispatch(createWord(word_data));
        });
    };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    // do reducer stuff
        case 'word/LOAD': {
            if (action.word.length > 0) {
                return { list: action.word };
            }
            return state;
        }

        case 'word/CREATE': {
            // console.log(state.list)
            const new_word_list = [ ...state.list, action.word ];
            return { word_data: new_word_list };
        }

        default:
            return state;
    };
}

// export const getWord = (word) => {
//     return dispatch => getWord('/add').then(word => dispatch(createWord(word)))
// }