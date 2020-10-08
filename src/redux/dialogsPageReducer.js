const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimas'},
        {id: 2, name: 'Vova'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Anton'},
        {id: 6, name: 'Egor'}
    ],
    messagesData: [
        {id: 1, message: 'hello'},
        {id: 2, message: 'adsadwa'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'Hi'}
    ],
};

const dialogsPageReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        messagesData: [...state.messagesData]
    };

    switch(action.type) {
        case SEND_MESSAGE: {
            let messageText = action.messageText;

            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push({id: 6, message: messageText});
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessage = (messageText) => ({type: SEND_MESSAGE, messageText})

export default dialogsPageReducer;