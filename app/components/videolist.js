import React from 'react';
import API from '../api.js';
import Output from '../output.js';
import {connect} from 'react-redux';
import {getVideos} from './../actions/videoactions.js'


@connect((store)=> {
    return {
        videos: store.videos
    }
})
class VideoList extends React.Component {
    constructor(){
        super();
        this.state = {
            videos: []
        }
    }
    componentDidMount(){

            this.props.dispatch(getVideos())
    }

    render(){
        return (
            <div>
                {
                this.props.videos.videos_list.map((video, index) =>{
                     return (<div  key={index}>
                                  <Output video={video}/>
                            </div>)
                     })
                }
            </div>)
    }
}

export default VideoList;

