import React, {Component} from 'react';
import './NavigationMap.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class NavigationMap extends Component {
    constructor(props) {
        super(props);
    }

    createMapView = () => {
        return (
            <Card >
                <CardHeader
                    title="Directions to Classroom A"
                    subheader="Estimated distance: 4 min walk"
                />
                <CardMedia
                    component="img"
                    alt="Map Navigation View"
                    height="600"
                    image="/images/indoorNavigation.png"
                    title="Map Navigation View"
                />
                {/*<CardActions disableSpacing>*/}
                {/*    <IconButton aria-label="add to favorites">*/}
                {/*        <FavoriteIcon/>*/}
                {/*    </IconButton>*/}
                {/*    <IconButton aria-label="share">*/}
                {/*        <ShareIcon/>*/}
                {/*    </IconButton>*/}
                {/*</CardActions>*/}
            </Card>
        );
    };

    render() {
        return (
            <div className="NavigationMap">
                {this.createMapView()}
            </div>
        );
    }
}

export default NavigationMap;