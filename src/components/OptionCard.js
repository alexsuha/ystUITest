import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    col: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    optionLabel: {
        height: 34,
        width: 270,
        display: "flex",
        justifyContent: "center",
        margin: "0 50px 10px",
        padding: "5px 10px",
        borderRadius: 10,
        opacity: 1,
        border: "1px solid #009de0"
    },

    labelText: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        color: "#009de0"
    },

    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
        height: 470,
        width: 370,
        marginLeft: 16,
        marginRight: 16
    },

    highlitedCard: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "#009de0",
        height: 470,
        width: 370,
        marginLeft: 16,
        marginRight: 16
    },

    iconContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 16,
    },

    description: {
        marginBottom: 10
    }

}));


function OptionCard(props) {
    const classes = useStyles();
    const { title, description, buttonText, icon, onClick, showLabel } = props;

    return <div className={classes.col}>
        {showLabel && <Paper
            elevation={0}
            className={classes.optionLabel}
        >
            <span className={classes.labelText}>Most popular</span>
        </Paper>
        }

        {!showLabel && <Paper
            elevation={0}
            className={classes.optionLabel}
            style={{ visibility: "hidden" }}>
            <span className={classes.labelText}>Most popular</span>
        </Paper>
        }
        <Paper
            elevation={3}
            variant='outlined'
            className={showLabel ? classes.highlitedCard : classes.card}
        >
            <div>
                <div className={classes.iconContainer}>
                    {icon}
                </div>
                <div>
                    <h4 style={{ textAlign: "center", fontSize: 22 }}>{title}</h4>
                </div>
                <div>
                    {description.map((item) => (
                        <div className={classes.description} key={item.id}>
                            <span key={item.id} style={{ fontSize: 14 }}>{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <div>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={onClick}>
                    {buttonText}
                </Button>
            </div>
        </Paper>
    </div>


}

export default OptionCard;