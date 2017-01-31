import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {addFavorite} from './actions/videoactions.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const divStyle = {
    padding: '10px',
    display: 'inline-block',
    width: '640px'

};

@connect((store)=> {
    return {
        favorite: store.favorite
    }
})


class Output extends React.Component {
    constructor(){
        super();
        this.state = {
            load: true
        }
    }


    render(){
        return (
            <div style={divStyle}>
                <Card>
                    <CardHeader
                        title={this.props.video.snippet.title}
                        subtitle={this.props.video.snippet.channelTitle}
                    />
                    <CardMedia>
                        <img src={this.props.video.snippet.thumbnails.standard.url}></img>
                    </CardMedia>
                    <CardTitle/>
                    <CardText>
                        {this.props.video.snippet.description}
                    </CardText>
                    <CardActions>
                        <Link to={"/onevideo/" + this.props.video.id}><FlatButton label="Open Video" /></Link>
                        <FlatButton label="Add To Favorite" onClick={() => addFavorite(this.props.video.id)} />
                    </CardActions>
                </Card>
            </div>)
    }
}
export default Output;