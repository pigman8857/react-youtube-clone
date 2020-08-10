import React, {Component} from 'react';
import { Grid } from '@material-ui/core';

import {SearchBar, VideoList, VideoDetail} from './components'

import youtubeApi from './api/youtube';

class App extends Component{
    render(){
        return (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}> 
                            {/*Search bar */}
                        </Grid>
                        <Grid item xs={8}> 
                             {/*Video detail */}
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
