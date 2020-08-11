import React, {Component} from 'react';
import { Grid } from '@material-ui/core';

import {SearchBar,VideoDetail} from './components';

import youtubeApi from './api/youtube';

class App extends Component{
    state = {
        videos : [],
        selectedVideo : null
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtubeApi.get('search' , {
            params : {
                part : 'snippet',
                maxResults : 5,
                key : '{youtube api key}',
                q : searchTerm
            }
        });

        console.log(response.data.items);

        this.setState({
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        });
    }

    render(){
        const {selectedVideo} = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}> 
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}> 
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}> 
                            {/*Video list */}
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}


export default App;
