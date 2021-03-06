import React, {useState}  from 'react';

// core components
import CustomInput from '../SupportComponents/CustomInput'


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockIcon from '@material-ui/icons/Lock';


// nodejs library that concatenates classes
import classNames from "classnames";


const useStyles = makeStyles({
    // centerContent: {
    //     zIndex: 2,
    //     gridColumn: "2/3",
    //     gridRowStart: 2,
    //     alignContent: "center",
    // },
    inputGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 6fr 1fr",
        gridTemplateRows: "3fr 20fr 10fr"

    },
    inputs: {
        gridColumn: "2/3",
        gridRow: "2/3",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        margin: "10px",
    },
    inputIconsColor: {
        color: "white",
    },
    input: {
        borderRadius: "5px",
        opacity: 1,
        backgroundColor: "rgba(50, 50, 50, .2)",
        border: "1px solid white",
        "&:hover": {
        },
    }

})

const LoginComponent = ({email, setEmail, password, setPassword}) => {
    const classes = useStyles()

    return (
        <>
                <form>
                    <div className={classes.LoginCard}>
                        <div className={classNames(classes.centerContent, classes.inputGrid)}>
                            <div className={classes.inputs}>
                                <CustomInput
                                    inputValue={email}
                                    setStateFunc={setEmail}
                                    labelText="Email..."
                                    id="email"
                                    inputProps={{
                                        type: "email",
                                        endAdornment: (
                                            <InputAdornment>
                                                <Icon className={classes.inputIconsColor}>
                                                    <Email/>
                                                    </Icon>
                                            </InputAdornment>
                                        ),
                                        className: classes.input
                                    }}
                                />
                                <CustomInput
                                    inputValue={password}
                                    setStateFunc={setPassword}
                                    labelText="password"
                                    id="password"
                                    inputProps={{
                                        type: "password",
                                        endAdornment: (
                                            <InputAdornment>
                                                <Icon className={classes.inputIconsColor}>
                                                    <LockIcon/>
                                                    </Icon>
                                            </InputAdornment>
                                        ),
                                        className: classes.input
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </form>
        </>
    );
};

export default LoginComponent;
