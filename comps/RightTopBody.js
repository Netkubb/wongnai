import { Button,Grid } from '@mui/material';


export default function RightTopBody(){
    return(<>
        <Grid container style={{padding:"20px",display:"flex",flexDirection:"horizontal"}}>
            <Grid item xs={12} style={{marginBottom:"1rem"}}>
                <b>ค้นหาจากแผนที่</b>
            </Grid>
            <Grid item xs={12}>
                <div style={{backgroundImage:`url("https://static2.wongnai.com/static2/images/3dwN7In.png")`,width:"auto",height:"140px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Button variant='contained' style={{height:"30px"}}>
                        ดูแผนที่
                    </Button>
                </div>
            </Grid>
        </Grid>
        
    </>)
}