import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function OpenBtn() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="project-header">
            Projects
            <IconButton
                
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                style={{ backgroundColor: "cornflowerblue", color: "#eee", marginLeft: "10px", height: "30px", width: "30px" }}
            >
                <ExpandMoreIcon />
            </IconButton>

            <Collapse in={expanded} timeout={800} unmountOnExit>

                <div className="card-container">
                    <div className="card-body">
                        <a style={{textDecoration:"none"}} href="https://hi-ho-frontend.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src="/images/hihowhite.png" alt="Hi Ho Logo" />
                        <p style={{fontSize:"20px",color:"#3f51b5"}}>Hi Ho</p>
                        </a>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-body2">
                        <a style={{textDecoration:"none"}} href="https://radiant-spire-72704.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="logo2" src="/images/smasual.jpg" alt="Smasual Logo" />
                        <p style={{fontSize:"20px",color:"#e91d63"}}>Smasuals</p>
                        </a>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-body">             
                        <a style={{textDecoration:"none"}} href="https://staffbotsteve.github.io/lazy-loaders/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src="/images/travelnurse.png" alt="Nurse Logo" />
                        <p style={{fontSize:"20px",color:"#006599"}}>Travel Nurse</p>
                        </a>                       
                    </div>
                </div>
                
            </Collapse>
        </div>
    );
}
