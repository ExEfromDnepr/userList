import jsonData from './clients.json'


 export const initialActions = ()=> ({
    type:"initialStateFromJson",
    payload: jsonData
})

