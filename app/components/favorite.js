import React from 'react';
import API from '../api.js';
import Output from '../output.js';
import {connect} from 'react-redux';
import {getFavorite} from './../actions/videoactions.js'


@connect((store)=> {
    return {
        favorite: store.favorite
    }
})
class Favorite extends React.Component {
    constructor(){
        super();
        this.state = {
            videos: []
        }
    }
    componentDidMount(){

        this.props.dispatch(getFavorite())
    }

    render(){
        return (
            <div>
                {
                    this.props.favorite.videos_fav.map((video, index) =>{
                        return (<div  key={index}>
                            <Output video={video}/>
                        </div>)
                    })
                }
            </div>)
    }
}

export default Favorite;