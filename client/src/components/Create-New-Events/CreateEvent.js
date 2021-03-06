import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'

// Images
import coruscant from './Coruscant_03db43b4.jpeg'

// core components
import Header from '../Header/Header'
import CustomInput from '../SupportComponents/CustomInput'
import {createEventThunk} from '../../Redux/actions/eventsActions'
import SimpleSelect from'./SimpleSelect'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        display:"grid",
        gridTemplateColumns: "590px 1fr 1fr",
        gridTemplateRows: " 230px 2fr 1fr",
        width:"100vw",
        height:"100vh",
        backgroundImage: ` url(${coruscant})`,
        backgroundSize: '100% 100%'
    },
    middle: {
        display:' flex',
        gridRow: "2/3",
        gridColumnStart: '2',
        alignItems:'Center',
        textAlign:'Center'
    },
    colorMe:{
        // color: 'black',
        backgroundColor:'rgba(255,255,255,0.4)',
        width: '200px'
    },
    textColor:{
        color:'black',
        fontWeight: '500',
        zIndex:2
    },
    sizeMe:{
        width:'10rem',
        backgroundColor:'rgba(255,255,255,0.4)',
    },
    sizeInput:{
        width: '400px'
    }
})


const CreateEventForm = () => {
    const classes = useStyles()

    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [details, setDetails] = useState("")
    const [category, setCategory] = useState('');
    const [planet, setPlanet] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const host_id = useSelector((state) => state.auth.id)

    //formating the date
    const event_date = `${month}/${day}/${year}`


    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) =>{
        const event = {
            name:name,
            event_description: description,
            event_details: details,
            event_date,
            event_planet: planet,
            category_id: category,
            host_id,
        }
        e.preventDefault();
        dispatch(createEventThunk(event))
        history.push('/')
    }
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className={classes.container}>
                <div className={classes.middle}>
                {/* <img className={classes.deathStar} src={deathstar}></img> */}
                    <form method='post' action=''>
                        <div>
                            <Button variant={'contained'} onClick={handleSubmit}>
                            Create New Event
                            </Button>
                        </div>

                        <div>
                            <CustomInput inputValue={name} labelText={'Name Event'} setStateFunc={setName}
                            inputProps={{ className: classes.colorMe}}
                            labelInputProps={{className: classes.textColor}}/>
                        </div>
                        <div>
                            {/* custom react component for calnedar */}
                            {/* <CustomInput labelText={'Date'} setStateFunc={setDate}
                            inputProps={{ className: classes.colorMe}}
                            labelInputProps={{className: classes.textColor}}/> */}
                        </div>
                        <div>
                            <SimpleSelect
                            planet={planet}
                            setPlanet={setPlanet}
                            category={category}
                            setCategory={setCategory}
                            month={month}
                            setMonth={setMonth}
                            day={day}
                            setDay={setDay}
                            year={year}
                            setYear={setYear}
                            inputProps={{ className: classes.sizeMe}}
                            labelInputProps={{className: classes.textColor}}
                            />
                        </div>
                        <div>
                            <CustomInput labelText={'Details'} setStateFunc={setDetails} multiline={true}
                            inputProps={{ className: classes.colorMe}}
                            labelInputProps={{className: classes.textColor}}/>
                        </div>
                        <div>
                            <CustomInput labelText={'Description'} setStateFunc={setDescription} multiline={true}
                            inputProps={{ className: classes.colorMe}}
                            labelInputProps={{className: classes.textColor}}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CreateEventForm;
