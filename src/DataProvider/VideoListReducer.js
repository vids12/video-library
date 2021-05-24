import faker from "faker";
import { list } from "../DataProvider/data"

export  function VideoListReducer(state,action){
    switch(action.type){
        case "ADD_TO_CUSTOM_PLAYLIST":
            return { ...state,playlist: state.playlist.concat({ pid: faker.datatype.uuid(),name: action.payload.newPlaylist,videoes: [{id:action.payload.id,heading: action.payload.heading,img: action.payload.img, channel_name: action.payload.channel_name}] }),showPlaylistModal: false };

        case "ADD_TO_EXISTING_CUSTOM_PLAYLIST":
            let video = list.find(obj=> obj.id===action.payload.id);
            return {...state,playlist: state.playlist.map(obj=>obj.pid === action.payload.pid ?{ ...obj,videoes: obj.videoes.concat(video)} : obj)};
    
        case "ADD_TO_WATCH_LATER":
            let {id,channel_name,heading,img} = list.find(obj=> obj.id===action.payload);
            return ({...state,watchLaterList: state.watchLaterList.concat({id,channel_name,heading,img})});
        
        case "REMOVE_FROM_WATCH_LIST":
            return{...state, watchLaterList: state.watchLaterList.filter(obj=>obj.id === action.payload ? !obj : obj)};

        case "SHOW_MODAL":
            return {...state, showModal: true};

        case "CLOSE_MODAL":
            return {...state, showModal: false};
        
        case "CLOSE_PLAYLIST_MODAL":
            return {...state,showPlaylistModal: false};
        
        case "SHOW_PLAYLIST_MODAL":
            return {...state,showPlaylistModal: true};

        case "REMOVE_PLAYLIST":
            return {...state,playlist: state.playlist.filter(obj=>obj.pid===action.payload ? !obj : obj)};

        case "REMOVE_FROM_PLAYLIST":
            return {...state,playlist: state.playlist.map(obj=>obj.pid === action.payload.pid ?{ ...obj,videoes: obj.videoes.filter(video => video.id ===action.payload.id ? !video : video)} : obj)};
        
        case "REMOVE_FROM_LIKED_VIDEO":
            return {...state,likedvideo: state.likedvideo.filter(obj => obj.id=== action.payload ? !obj : obj)};
        
        case "ADD_TO_LIKED_VIDEO":
            return {...state,likedvideo: state.likedvideo.concat({id:action.payload.id,heading: action.payload.heading,img: action.payload.img, channel_name: action.payload.channel_name})};

        default:
            return state;
    }
}
