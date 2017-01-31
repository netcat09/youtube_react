import React from 'react';
import Youtube from 'react-youtube';


class OneVideo extends React.Component {


    render() {
        return (<div>
                <Youtube
                    videoId={this.props.params.id}
                />

            </div>
        )
    }

}


export default OneVideo;



