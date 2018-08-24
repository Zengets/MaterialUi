import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { theme } from "../config"
import ProductItem from '../module/ProductItem'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Index extends Component {
    constructor(props) {
        super(props)
        this.updateViewport = this.updateViewport.bind(this)
    }
    render() {
        const { classes } = this.props;
        let items = Array.apply(null,Array(1000)).map((item,index)=>{
            return { title: '图片'+index, image: './assets/images/tts.jpg' }
        });

        return (
            <MuiThemeProvider theme={theme} >
                <Grid container spacing={24}  justify="center">
                    <Grid item xs={8}>
                        <Paper  className={classes.paper}>
                            <Typography variant="body1">Welcome to React</Typography>
                        </Paper>
                    </Grid>
                    {
                        items.map((item,index) => {
                            return (
                            <Grid item xs={8} key={index}>
                                <Paper  className={classes.paper}>
                                    <ProductItem
                                        title={item.title}
                                        image={item.image}
                                        viewport={this.state.viewport}
                                    />
                                </Paper>
                            </Grid>

                            )
                        })
                    }


                </Grid>
            </MuiThemeProvider>

        )
    }
    updateViewport() {
        this.setState({
            viewport : {
                viewTop: window.pageYOffset,
                viewBottom: window.innerHeight + window.pageYOffset
            }
        })
    }

    componentWillMount() {
        window.addEventListener('scroll', this.updateViewport, false);
        window.addEventListener('resize', this.updateViewport, false);
        this.updateViewport();
    }
    componentDidMount() {
        this.updateViewport();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateViewport);
        window.removeEventListener('resize', this.updateViewport);
    }

}

export default  withStyles(styles)(Index);;

