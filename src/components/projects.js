import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl';


class projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }; 
    }

    toggleCatagories(){

        
        if(this.state.activeTab === 2){
            return(
                <Card shadow = {5} style ={{ minWidth :'450', margin : 'auto'}}>
                    <CardTitle style = {{color: '#fff',height:'176px', background: 'url(data:image/png;base64,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) center/cover'}}>My Portfolio</CardTitle>
                    <CardText>A simple portfolio made using ReactJS</CardText>
                    <CardActions border>
                        <Button href = "https://github.com/GangulyShreyan/Portfolio" target = "_blank" colored>Github</Button>
                    </CardActions> 
                    <CardMenu style = {{color: '#fff'}}>
                        <IconButton name = "share" />
                    </CardMenu>   
                </Card>
            )
        }

       
        if(this.state.activeTab === 1){
            return(
                <Card shadow = {5} style ={{ minWidth :'450', margin : 'auto'}}>
                    <CardTitle style = {{color: '#fff',height:'176px', background: 'url(data:image/png;base64,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) center/cover'}}>Alumni Login Portal</CardTitle>
                    <CardText>A departmental alumni login portal</CardText>
                    
                    <CardMenu style = {{color: '#fff'}}>
                        <IconButton name = "share" />
                    </CardMenu>   
                </Card>
            )
        }

        
        if(this.state.activeTab === 0){
            return(

                <div className = "projects-grid">
                    <Grid>
                        <Cell col = {4}>
                            <Card className ="cardmain" shadow = {5} style ={{ minWidth :'300'}}>
                                <CardTitle style = {{color: '#fff',height:'176px', background: 'url(https://buttercms.com/static/images/tech_banners/Flask.png) center/cover'}}>Pixelator</CardTitle>
                                <CardText>A webapp to pixelate your favourite computer graphics.</CardText>
                                <CardActions border>
                                    <Button href = "https://github.com/GangulyShreyan/Pixelator" target = "_blank" colored>Github</Button>
                                    <Button href = "https://whispering-savannah-06872.herokuapp.com/" target = "_blank" colored>Website</Button>
                                </CardActions> 
                                <CardMenu style = {{color: '#fff'}}>
                                    <IconButton name = "share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell col = {4}>
                            <Card shadow = {5} style ={{ minWidth :'300'}}>
                                <CardTitle style = {{color: '#fff',height:'176px', background: 'url(https://buttercms.com/static/images/tech_banners/Flask.png) center/cover'}}>DarkTorrent</CardTitle>
                                <CardText>A powerful torrent scraper to yield your favorite torrent site.</CardText>
                                <CardActions border>
                                    <Button href = "https://github.com/GangulyShreyan/AnonymousReview" target = "_blank" colored>Github</Button>
                                    <Button href = "https://anonymousreview.herokuapp.com/" target = "_blank" colored>Website</Button>
                                </CardActions> 
                                <CardMenu style = {{color: '#fff'}}>
                                    <IconButton name = "share" />
                                </CardMenu>
                            </Card>
                        </Cell>


                        <Cell col = {4}>
                            <Card shadow = {5} style ={{ minWidth :'300'}}>
                                <CardTitle style = {{color: '#fff',height:'176px', background: 'url(https://buttercms.com/static/images/tech_banners/Flask.png) center/cover'}}>AnonymousReview</CardTitle>
                                <CardText>A Firebase backed network for sending/ receiving anonymous reviews.</CardText>
                                
                                <CardActions border>
                                    <Button href = "https://github.com/GangulyShreyan/DarkTorrent" target = "_blank" colored>Github</Button>
                                    <Button href = "https://guarded-retreat-67123.herokuapp.com/" target = "_blank" colored>Website</Button>
                                </CardActions> 
                                <CardMenu style = {{color: '#fff'}}>
                                    <IconButton name = "share" />
                                </CardMenu>   
                            </Card>
                        </Cell>
                    </Grid>
                </div>
                
            )
        }
    }

    render() {
        return (
            <div className = "catagory-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Flask</Tab>
                    <Tab>JQuery</Tab>
                    <Tab>ReactJS</Tab>
                </Tabs>

                <section className = "projects-grid">
                    <Grid>
                        <Cell col = {12}>
                            {this.toggleCatagories()}
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
            )
    }
}

export default projects;