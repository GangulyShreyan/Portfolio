import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Interest from './interest';

class resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col = {4}>
                        <div style ={{ textAlign : "center"}}>
                            <img 
                                src = "https://media-exp1.licdn.com/dms/image/C5103AQEYZFwr0mKwiw/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=C-Oo90iHrn8PCTd0NXT8JY73HnpUXY_EVs7HjFHfi2g"
                                alt = "avatar"
                                style = {{height : "200px", borderRadius:"100px"}}
                            />
                        </div>
                        <h2 style = {{paddingTop: "2em"}}>Shreyan Ganguly</h2>
                        <h4 style =  {{color:'grey'}}>Programmer</h4>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>I am Shreyan Ganguly. I always have been fascinated by the web and its applications.
                             I like to build rich web applications and implement Artificial Intelligence in them.
                        </p>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>Ganguly Mansion, Habra, West Bengal, 743263</p>
                        <h5>Phone</h5>
                        <p> +91 9775672103 </p>
                        <h5>Email</h5>
                        <p>126shreyan@gmail.com</p>
                        <h5>Website</h5>
                        <a href = "https://gangulyshreyan.netlify.app/">gangulyshreyan.netlify.app</a>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className = "resume-right-col" col = {8}>
                        <h2>Education</h2>

                        <Education
                            startYear = {2019}
                            endYear = {2023}
                            schoolName = "Jadavpur University"
                            schoolDescription = "B.E."
                        />
                        <Education
                            startYear = {2016}
                            endYear = {2018}
                            schoolName = "Kalyani Public School"
                            schoolDescription = "Mathematics, Physics, Computer Science"
                        />
                        <hr style = {{borderTop:'3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                            startYear = {2020}
                            endYear = "Present"
                            jobName = "SM&PR Group, Construction Engineering JU"
                            jobDescription = "Maintenance In-Charge, Assosciate Team Head, Web Development Team"
                        />
                        <hr style = {{borderTop:'3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills
                            skill = "Python"
                            progress = {85}
                        />
                        <Skills
                            skill = "HTML"
                            progress = {75}
                        />
                        <Skills
                            skill = "CSS"
                            progress = {70}
                        />
                        <Skills
                            skill = "JQuery"
                            progress = {70}
                        />
                        <Skills
                            skill = "ReactJS"
                            progress = {50}
                        />

                        <hr style = {{borderTop:'3px solid #e22947'}} />
                        <h2>Area of Interest</h2>
                        <ul>
                            <Interest
                                interest = "Machine Learning and Artificial Intelligence"
                             />
                            <Interest
                                interest = "Application of AI in Construction Management"
                            />
                            <Interest 
                                interest = "Computer Vision"
                            />
                        </ul>
                        

                    </Cell>
                </Grid>
            </div>
            )
    }
}

export default resume;
