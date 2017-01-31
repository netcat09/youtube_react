export default (store = {
    fav_id: ['_hZCsgcKa-g', 'GF9B-9PH4qQ'],
    videos_fav: [],
    loading: true
}, action) => {

    switch (action.type) {
        case 'GET_FAVORITE': {
            return {
                ...store,
                loading: true
            }
        }
        case 'GET_FAVORITE_DONE': {
            return {
                ...store,
                videos_fav: action.favorite,
                loading: false
            }
        }
        case 'ADD_FAVORITE': {
            return {
                ...store,
                fav_id: fav_id.push(this.props.id)
            }

        }

    }

    return store
}