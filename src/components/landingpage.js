import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class landin extends Component {
    render() {
        return (

            <div style = {{height:'auto', width : '100%', margin : 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col = {12}>
                        <img
                            src = "https://media-exp1.licdn.com/dms/image/C5103AQEYZFwr0mKwiw/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=C-Oo90iHrn8PCTd0NXT8JY73HnpUXY_EVs7HjFHfi2g"
                            alt = "avatar"
                            className = "avatar-img"        
                       /> 

                       <div className = "banner-text">
                           
                            <h1 id= "tag-head" >Full-Stack Developer</h1>

                            <hr/>
                            <p>Python | HTML/CSS | Flask | ReactJS | Firebase</p>
                    
                            <div className = "social-links">
                                {/* LinkedIn */}
                                <a href = "https://www.linkedin.com/in/shreyan-ganguly-467882191/" target = "_blank"  rel = "noopener noreferrer">
                                    <i className = "fa fa-linkedin" aria-hidden ="true"></i>
                                </a>

                                {/* Github */}
                                <a href = "https://github.com/GangulyShreyan" target = "_blank"  rel = "noopener noreferrer">
                                    <i className = "fa fa-github" aria-hidden ="true"></i>
                                </a>

                                {/* Instagram */}
                                <a href = "https://www.instagram.com/shreyan11235/" target = "_blank"  rel = "noopener noreferrer">
                                    <i className = "fa fa-instagram" aria-hidden ="true"></i>
                                </a>

                            </div>
                    
                       </div>
                    </Cell>
                </Grid>
            </div>


            )
    }
}

export default landin;