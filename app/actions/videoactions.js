import API from './../api.js';

export function getVideos() {
    return (dispatch) => {
        API.getVideos().then((data) => {
            dispatch({
                type: 'GET_VIDEOS_DONE',
                videos: data
            })
        });

    }
}

export function getFavorite() {
    return (dispatch) => {
        API.getFavorite().then((data_fav) => {
            dispatch({
                type: 'GET_FAVORITE_DONE',
                favorite: data_fav
            })
        })
    }
}

export function addFavorite(id) {
    alert("kkkk"+id);
    return (dispatch) => {
              dispatch({
                type: 'ADD_FAVORITE',
                fav_id: action.fav_id

        })

    }
}