import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const props = {
    image:["https://bit.ly/3J96arf","https://bit.ly/3K8JYyL","https://bit.ly/35B9PAe","https://bit.ly/3Jmu173","https://bit.ly/3NLqvpX"],
    name:"Us Cafe",
    description:"คาเฟ่ pet friendly จิบกาแฟ เบเกอรี่ ชิมอาหารจานโปรด ในบรรยากาศสุดร่มรื่น",
    review:1,
    price:"฿",
    opening:"ปิดอยู่",
    type:"คาเฟ่, ร้านกาแฟ/ชา"
}

export default function CardBody(){
    return (
        <Card sx={{ width:"100%",marginBottom:"1rem",paddingTop:"1rem",minHeight:"300px" }}>
            <div style={{display:"flex",justifyContent:"center"}}>
                {
                    props.image.map((data) => 
                    <img key={data}
                    src={data}
                    style={{width:"15%",height:"80px",margin:"auto auto"}}
                    />
                )}
            </div>
            <CardContent>
            <div style={{display:"flex"}}>
                <Typography gutterBottom variant="h5" component="div" style={{margin:"0"}} flexGrow={1}>
                    {props.name}
                </Typography>
                <Button variant='secondary'>
                    <BookmarkIcon/>
                </Button>
            </div>
              <Typography variant="body2" color="primary">
                {props.description}
              </Typography>
              <Typography variant="body2" color="text.primary" style={{marginTop:"1rem"}}>
                {props.review} รีวิว {props.price} <span><b style={{color:"red"}}>{props.opening}</b></span>
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{marginTop:"1rem"}}>
                {props.type}
              </Typography>
              <div style={{display:"flex",backgroundColor:"#EAEAEA",margin:"auto"}}>
                    <DeliveryDiningIcon style={{margin:"5px"}}/>
                    <Typography style={{margin:"5px"}}><b>เดลิเวอรี่</b></Typography>
                    <Typography style={{margin:"5px"}} flexGrow={1}>ค่าส่งเริ่มต้น 0 บาท *ภายในระยะทางที่กำหนด</Typography>
                    <Button variant='contained'>สั่ง</Button>
              </div>
            </CardContent>
        </Card>
      );
}