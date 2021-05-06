import faker from "faker";


export  function VideoListReducer(state,action){
    switch(action.type){
        
        case "ADD_TO_CUSTOM_PLAYLIST":
            return { ...state,playlist: state.playlist.concat({ pid: faker.datatype.uuid(),name: action.payload.newPlaylist,videoes: [{id:action.payload.id,heading: action.payload.heading,img: action.payload.img, channel_name: action.payload.channel_name}] }) };
        case "ADD_TO_EXISTING_CUSTOM_PLAYLIST":
            return {...state, addToPlaylist: !state.addToPlaylist};
        case "SHOW_MODAL":
            return {...state, showModal: true};
        case "CLOSE_MODAL":
            return {...state, showModal:false};
        default:
            return state;
    }
}
