import React from 'react';
import { Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';





class Main extends React.Component {
    render() {
        return (<div>
                    <Tabs>
                        <Tab label="Most Popular Videos" containerElement={<Link to="/"/>}>
                        </Tab>

                        <Tab label="Favorite Videos" containerElement={<Link to="/favorite"/>}>
                        </Tab>

                    </Tabs>

                  {this.props.children}
                </div>)
    }
};

export default Main;
