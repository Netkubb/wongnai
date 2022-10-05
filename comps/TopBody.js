import {Box} from '@mui/material';

const n = 20;

export default function TopBody(){
    return (
        <Box style={{overflowX:"scroll",display:"flex",padding:"5px"}}>
            {
            [...Array(n)].map((e, i) => <>
            <img id={e}
            src="https://res.cloudinary.com/corpjurist/image/upload/v1649122230/5310773_1_goeaym.png"
            style={{width:"175px",height:"100px",margin:"auto 5px"}}
            />
            <div style={{position:"relative",left:"-160px",width:"0",color:"white"}}><b>{i}</b></div>
            </>)}
            
        </Box>
    )
}