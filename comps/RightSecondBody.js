import { Button,Grid,Typography } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export default function RightSecondBody(){
    return(<>
        <Grid container style={{padding:"20px"}}>
            <Grid item xs={12} style={{marginBottom:"1rem"}}>
                <b>ร้านอาหารที่น่าสนใจ</b>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={12} style={{marginBottom:"1rem"}}>
                        <div style={{display:"flex"}}>
                            <img src="https://bit.ly/3K8JYyL" width={"30%"} height={"80px"}/>
                            <div>
                                <div style={{display:"flex"}}>
                                    <Typography gutterBottom variant="h5" component="div" style={{margin:"0"}} flexGrow={1}>
                                        Us Cafe
                                    </Typography>
                                    <Button variant='secondary'>
                                        <BookmarkIcon/>
                                    </Button>
                                </div>
                                <Typography variant="body2" color="text.primary" style={{marginTop:"1rem"}}>
                                    1 รีวิว ฿ <span><b style={{color:"red"}}>ปิดอยู่</b></span>
                                </Typography>
                                <Typography variant="body2" color="primary">
                                    คาเฟ่ pet friendly จิบกาแฟ เบเกอรี่ ชิมอาหารจานโปรด ในบรรยากาศสุดร่มรื่น
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div style={{display:"flex"}}>
                            <img src="https://bit.ly/3K8JYyL" width={"30%"} height={"80px"}/>
                            <div>
                                <div style={{display:"flex"}}>
                                    <Typography gutterBottom variant="h5" component="div" style={{margin:"0"}} flexGrow={1}>
                                        Us Cafe
                                    </Typography>
                                    <Button variant='secondary'>
                                        <BookmarkIcon/>
                                    </Button>
                                </div>
                                <Typography variant="body2" color="text.primary" style={{marginTop:"1rem"}}>
                                    1 รีวิว ฿ <span><b style={{color:"red"}}>ปิดอยู่</b></span>
                                </Typography>
                                <Typography variant="body2" color="primary">
                                    คาเฟ่ pet friendly จิบกาแฟ เบเกอรี่ ชิมอาหารจานโปรด ในบรรยากาศสุดร่มรื่น
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    </>)
}