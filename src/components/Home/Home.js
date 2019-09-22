import React, {Component} from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [{
                name: "Classroom A",
                imageName: "classroomA.jpg",
                roomNumber: "2.12",
                floorNumber: "2"
            }, {
                name: "Classroom B",
                imageName: "classroomB.jpg",
                roomNumber: "3.22",
                floorNumber: "3"
            }, {
                name: "Classroom C",
                imageName: "classroomC.jpg",
                roomNumber: "1.31",
                floorNumber: "1"
            }],
        };
    }

    createTile = (location, index) => {
        return (
            <Card raised={true} key={index} style={{maxWidth: "345", marginBottom: "18px"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={location.name}
                        height="140"
                        image={"/images/" + location.imageName}
                        title={location.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {location.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Located in ECSS Floor {location.floorNumber}, room {location.roomNumber}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    };

    render() {
        return (
            <div className="Home">
                {this.state.locations.map(((value, index) => this.createTile(value, index)))}
            </div>
        );
    }
}

export default Home;