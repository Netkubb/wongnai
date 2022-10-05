import {Box} from '@mui/material';


export default function TopBody(){
    const n = 20;
    return (
        <Box style={{overflowX:"scroll",display:"flex",padding:"5px"}}>
            {
            [...Array(n)].map((e, i) => <div key={i}>
            <img id={i}
            src="https://res.cloudinary.com/corpjurist/image/upload/v1649122230/5310773_1_goeaym.png"
            style={{width:"175px",height:"100px",margin:"auto 5px"}}
            />
            <div style={{position:"relative",left:"-160px",width:"0",color:"white"}}><b>{i}</b></div>
            </div>)}
            
        </Box>
    )
}