import React from 'react';
import Youtube from 'react-youtube';
import LinearProgress from 'material-ui/LinearProgress';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const divStyle = {
    padding: '10px',
    display: 'inline-block',
    width: '640px'

};

class Output extends React.Component {
    constructor(){
        super();
        this.state = {
            load: true
        }
    }


    changeLoad(){
        this.setState({
            load: false
        })
    }



    render(){
        return (
            <div style={divStyle}>

                <Card>

                    <CardHeader
                        title={this.props.video.snippet.title}
                        subtitle={this.props.video.snippet.channelTitle}
                    />
                    {
                        this.state.load ? <LinearProgress mode="indeterminate" />: null
                    }
                    <CardMedia>
                        <img src={this.props.video.snippet.thumbnails.standard.url}></img>
                    </CardMedia>
                    <CardTitle/>
                    <CardText>
                        {this.props.video.snippet.description}
                    </CardText>
                    <CardActions>
                        <Link to={"/onevideo/" + this.props.video.id}><FlatButton label="new window" /></Link>

                    </CardActions>
                </Card>






            </div>)
    }
}
export default Output;