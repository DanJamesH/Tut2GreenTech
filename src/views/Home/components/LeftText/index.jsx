import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid,  Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    dialog: {
        position: "absolute",
        height: '65vh',
        width: '50vw',
        right: 10,
        bottom: 50,
    },
    formControl: {
        marginLeft: theme.spacing(3),
        minWidth: 120,
        maxWidth: 320,
    },
    button: {
        borderColor:'#006e39',
        color:'#006e39',
        borderRadius:20,
    }
}));

const LeftText = ({
    handleClickOpen
}) => {

    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            style={{
                alignItems: "center",
            }}
        >
            <Grid
            container
            item
            direction="row"
            style={{
                alignItems: "center",
                justifyContent: "center",
                width: "75%",
                    marginTop: "2%",
                    marginBottom: "2%",
            }}
        >
            <Typography
                variant="h3"
                style={{
                    
                    textAlign: "center",
                }}
            >
                What is
            </Typography>
            <Typography
                variant="h3"
                style={{
                    color:'#006e39',
                    textAlign: "center",
                    marginLeft:'2%',
                }}
            >
                Green
            </Typography>
            <Typography
                variant="h3"
                style={{
                    
                    textAlign: "center",
                }}
            >
                Tech?
            </Typography>
        </Grid>
            
            <Typography
                variant="body1"
                style={{
                    width: "75%",
                    marginTop: "2%",
                    marginBottom: "2%",
                    textAlign: "center",
                    fontFamily: "Roboto",
                }}
            >
                Green tech refers to a type of technology that is considered
                environmentally friendly based on its production process. Although the
                market for green technology is a relatively young, it has garnered a
                significant amount of investor interest due to increasing awareness
                about the impacts of climate change and the depletion of natural
                resources.
            </Typography>
            <Typography
                variant="body1"
                style={{
                    width: "75%",
                    marginTop: "2%",
                    marginBottom: "2%",
                    textAlign: "center",
                    fontFamily: "Roboto",
                }}
            >
                Here at GreenTech we specialize in fabricating technology for the future
                out of sustainable materials. From renewable energy to smart farming to aerospace manufacturing,
                GreenTech is here to empower progress and save the planet.
            </Typography>
            <Button variant="outlined" onClick={() => handleClickOpen()} className={classes.button}>
                Country wide Branches
            </Button>
        </Grid>
    );
};

export default LeftText;
