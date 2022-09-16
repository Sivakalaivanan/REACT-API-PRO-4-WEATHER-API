import { Box , Typography , makeStyles} from "@material-ui/core"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import OpacityIcon from '@mui/icons-material/Opacity';
import FlareIcon from '@mui/icons-material/Flare';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DehazeIcon from '@mui/icons-material/Dehaze';


const useStyles = makeStyles({
    component :{
        margin : 50
    },
    row:{
        padding : 10 ,
        fontSize : 20 , 
        letterSpacing : 2
    },
    value:{
        color : 'white'
    },
    icons:{
        marginRight : 15,
        color : 'darkred'
    }
})
  

const Information = ({ data }) =>{
    const classes = useStyles();
    return (
        data?
        <Box className = {classes.component}>
            <Typography className={classes.row} style={{color:"black",fontFamily:"serif"}}><LocationOnIcon style={{color:"red"}} className = {classes.icons}/>Location <Box className={classes.value}style={{color:"black",fontFamily:"serif"}} component = "span"> {data.name} , {data.sys.country}</Box></Typography>
            <Typography className={classes.row} style={{color:"black",fontFamily:"serif"}}><FlareIcon style={{color:"red"}} className = {classes.icons}/>Temperature <Box className={classes.value}style={{color:"black",fontFamily:"serif"}} component = "span">  {data.main.temp}°C</Box></Typography>
            <Typography className={classes.row} style={{color:"black",fontFamily:"serif"}}><OpacityIcon style={{color:"red"}} className = {classes.icons}/>Humidity <Box className={classes.value}style={{color:"black",fontFamily:"serif"}} component = "span">  {data.main.humidity}%</Box></Typography>
            <Typography className={classes.row} style={{color:"black",fontFamily:"serif"}}><Brightness7Icon style={{color:"red"}} className = {classes.icons}/>Sunrise <Box className={classes.value}style={{color:"black",fontFamily:"serif"}} component = "span">  {new Date(data.sys.sunrise *1000).toLocaleTimeString()}</Box></Typography>
            <Typography className={classes.row} style={{color:"black",fontFamily:"serif"}}><Brightness4Icon style={{color:"red"}} className = {classes.icons}/>Sunset <Box className={classes.value}style={{color:"black",fontFamily:"serif"}} component = "span">  {new Date(data.sys.sunset *1000).toLocaleTimeString()}</Box></Typography>
            <Typography className={classes.row} style={{color:"black",fontFamily:"serif"}}><DehazeIcon style={{color:"red"}} className = {classes.icons}/>Conditon <Box className={classes.value}style={{color:"black",fontFamily:"serif"}} component = "span">  {data.weather[0].main}</Box></Typography>
            
        </Box>:''
    )
}
export default Information;
