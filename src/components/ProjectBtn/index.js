import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RiGithubLine } from "react-icons/ri";

export default function ProjectBtn() {

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
                style={{ backgroundColor: "cornflowerblue", color: "#eee", marginLeft: "10px", height: "30px", width: "30px", outline: "none" }}
            >
                <ExpandMoreIcon />
            </IconButton>

            <Collapse in={expanded} timeout={800} unmountOnExit>

                <div className="card-container">
                    <div className="card-body">
                        <a style={{ textDecoration: "none" }} href="https://hi-ho-frontend.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="logo" src={process.env.PUBLIC_URL + "/images/hihowhite.png"} alt="Hi Ho Logo" />
                            
                        </a>
                        <p style={{ fontSize: "20px", color: "#3f51b5", marginBottom:"0" }}>Hi Ho</p>
                        <a style={{ textDecoration: "none", color: "#3f51b5" }} href="https://github.com/dspark410/hi-ho-frontend" target="_blank" rel="noopener noreferrer"><RiGithubLine style={{ fontSize: "18px",height:"18px"}} /></a>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-body2">
                        <a style={{ textDecoration: "none" }} href="https://radiant-spire-72704.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="logo2" src={process.env.PUBLIC_URL + "/images/smasual.jpg"} alt="Smasual Logo" />
                            
                        </a>
                        <p style={{ fontSize: "20px", color: "#e91d63", marginBottom:"0" }}>Smasuals</p>
                        <a style={{ textDecoration: "none",color: "#e91d63" }} href="https://github.com/dspark410/Smasual" target="_blank" rel="noopener noreferrer"><RiGithubLine style={{ fontSize: "18px",height:"18px"}} /></a>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-body">
                        <a style={{ textDecoration: "none" }} href="https://staffbotsteve.github.io/lazy-loaders/" target="_blank" rel="noopener noreferrer">
                            <img className="logo" src={process.env.PUBLIC_URL + "/images/travelnurse.png"} alt="Nurse Logo" />
                            
                        </a>
                        <p style={{ fontSize: "20px", color: "#006599", marginBottom:"0" }}>Travel Nurse</p>
                        <a style={{ textDecoration: "none",color: "#006599" }} href="https://github.com/dspark410/lazy-loaders" target="_blank" rel="noopener noreferrer"><RiGithubLine style={{ fontSize: "18px",height:"18px"}} /></a>
                    </div>
                </div>

            </Collapse>
        </div>
    );
}
