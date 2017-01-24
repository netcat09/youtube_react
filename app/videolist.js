import React from 'react';
import API from './api.js';
import Output from './output.js';



class VideoList extends React.Component {
    constructor(){
        super();
        this.state = {
            videos: []
        }
    }
    componentDidMount(){
            API.getVideos().then((data) => {
                this.setState({
                    videos: data
                })
            });
    }

    render(){
        return (
            <div>{
            this.state.videos.map((video, index) =>{
                return (<div  key={index}>
                            <Output video={video}/>
                        </div>)
            })
        }</div>)
    }
}

export default VideoList;

