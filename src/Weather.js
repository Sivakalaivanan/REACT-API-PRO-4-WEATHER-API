import {Box, makeStyles} from '@material-ui/core'
import siv from './san7.jpg';
import Form from './Form';
import DateTime from './DateTime';


const useStyles = makeStyles({
    component:{
        height :'100vh',
        display:'flex',
        width : '100%',
        margin : '0 auto',

        
    },
    Container :{

        backgroundImage: `url(${siv})`,
        height : '650px',
        width : '4500px',
        backgroundSize : 'cover',
        backgroundRepeat:'no-repeat'
    
    },
    centerContainer:{

        height:'65%',
        width : '40%',
        "z-index":'1',
        float:'right',
        'margin-right':'40px',
        'marginTop':'30px',
       
    },
    leftContainer:{
        fontSize:'40px',
        marginRight:'60px',
        color:'white',
        fontFamily:'serif'
    }
})

const Weather = () =>{
    const clases = useStyles();
    return(
        <Box className={clases.component}>
            <Box className={clases.Container}>
            <Box className = {clases.centerContainer}>
                <Form sx={{borderRadius:'5px',}}></Form>
            </Box>
            <br/><br/>
            <Box className={clases.leftContainer}>
            <DateTime/>
           
            </Box>
        </Box>    
        </Box>
    )
}

export default Weather;