export default (store = {
    videos_list: [],
    loading: true
}, action) => {

    switch (action.type) {
        case 'GET_VIDEOS': {
            return {
                ...store,
                loading: true
            }
        }
        case 'GET_VIDEOS_DONE': {
            return {
                ...store,
                videos_list: action.videos,
                loading: false
            }
        }

    }

    return store
}