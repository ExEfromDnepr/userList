

const initialState = {userList: []};

function MyReduser (state = initialState, actions){
    switch(actions.type){
        case 'initialStateFromJson': return {...state, userList: actions.payload};

        default: return state;
    }
}
export default MyReduser;