import React, { Component } from 'react'
import { Cell ,Grid, List, ListItem, ListItemContent } from 'react-mdl';

class contact extends Component {
    render() {
        return (
                <div className = "contact-body">
                    <Grid className = "contact-grid">
                        <Cell col = {6}>
                            <h2>Shreyan Ganguly</h2>
                            <img
                                src = "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.15752-0/p280x280/105256754_2352640398373155_1613749823072332843_n.jpg?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=YZBVr_fU4IAAX_Ol991&_nc_ht=scontent.fccu3-1.fna&_nc_tp=6&oh=c74ba4a968cf84cace08880fab98f193&oe=5F1426B3"
                                alt = "avatar"
                                style = {{height: '250px', borderRadius: "100px"}}                           
                            />
                            <p style = {{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                                Feel free to contact me in the details provided alongside!
                            </p>

                        </Cell>
                        <Cell col = {6}>
                            <h2>Contact Me</h2>
                            <hr/>
                            
                            <div className = "contact-list">
                                    <List>
                                        <ListItem>
                                            <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                                <i className = "fa fa-phone-square" aria-hidden = "true" />
                                                +91 9775672103</ListItemContent>
                                        </ListItem>


                                        <ListItem>
                                            <ListItemContent style = {{fontSize: '20px', fontFamily: 'Anton'}}>
                                                <i className = "fa fa-envelope" aria-hidden = "true" />
                                                126shreyan@gmail.com</ListItemContent>
                                        </ListItem>
                                    </List>
                            </div>
                            


                        </Cell>
                    </Grid>
                </div>
            )
    }
}

export default contact;