const randomId = () => Math.random().toString();

// различные типы действий (action types),
const types = {
    ADD: 'ADD',
    DONE: 'DONE',
    REMOVE: 'REMOVE',
}

export const initialState = [
    {id: randomId(), task: 'Prepare work/study presentation.', checked: false},
    {id: randomId(), task: 'Begin new course.', checked: false},
    {id: randomId(), task: 'Start exercising, join gym.', checked: false},
    {id: randomId(), task: 'Begin exercising or living a healthy lifestyle, for example, join a fitness club or start practicing yoga.', checked: false},
    {id: randomId(), task: 'Read self-improvement book', checked: false},
]

// объект, содержащий функции-создатели действий (action creators), которые создают действия (actions)
export const actionCreators = {
    add: (newTask) => ({ type: types.ADD, payload: {id: randomId(), task: newTask, checked: false} }),
    done: (id) => ({ type: types.DONE, payload: id }),
    remove: (id) => ({ type: types.REMOVE, payload: id })
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(types.ADD):
            return [
                ...state,
                action.payload
            ];
        case(types.DONE):
            return state.map(item => {
                if(item.id === action.payload) {
                    return {...item, checked: !item.checked}
                }
                return item;
            });
        case(types.REMOVE):
            return state.filter(item => item.id !== action.payload);
    }
}