import { Box, Button, TextField , makeStyles } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import {getData} from "./Api"
import Information from "./Information"

const useStyles = makeStyles({
    input:{
        color : "black" , 
        marginRight : 15 , 

    } , 
    component :{
        padding : 15 , 
        
       
    },
    button :{
        width : 150,
        height : 40,
        background : "grey",
        color : '#fff',
        marginTop :15
    }
})

const Form = () =>{
    const classes = useStyles();
    const [data , getWeatherData ] = useState();
    const [city , setCity] = useState("");
    const [country , setCountry] = useState("");
    const [click,handleClick] = useState(false);
    

    useEffect(()=>{
        
        const getWeather = async() =>{
            city &&await getData(city,country).then(response =>{
                getWeatherData(response.data)
                console.log(response.data)
            })
        }

        getWeather();
        handleClick(false);
    },[click]);

    const handleCityChange =(value)=>{
        setCity(value);
    }
    const handleCountryChange =(value)=>{
        setCountry(value);
    }
   
    return(
       
        <div style={{color:"white",fontSize:"50px",fontFamily:"serif"}}>
             <Box style={{borderStyle:"solid",borderRadius:20,borderColor:"white",
             borderWidth:"1px"}}>

            Weather Checking....
      
<br/>
        <React.Fragment>
            <Box className = {classes.component}>
                <TextField inputProps = {{className:classes.input}}
                       onChange = {(e) => handleCityChange(e.target.value)}
                       className = {classes.input} 
                       label = "City"   required/>

                <TextField inputProps = {{className:classes.input}}
                        onChange = {(e) => handleCountryChange(e.target.value)}
                       className = {classes.input}
                  
                       label = "Country"  required/>
                <Button 
                type="button"
                onClick = {() => handleClick(true)}
                className = {classes.button} 
                variant = "contained" 
                >Check</Button>
            </Box>

            <Information data = {data}>

            </Information>
        </React.Fragment>
        </Box>
        </div>
    )
}
export default Form;