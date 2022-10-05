import {Typography} from '@mui/material';


export default function RightLastBody(){
    const props = {
        image:"https://img.wongnai.com/p/624x0/2022/09/25/9be45797448d40689aecc7dc2ba2563d.jpg",
        description:`25 ร้านหมูกระทะเจ้าเด็ด จัดเต็มอิ่มคุ้ม จุใจในราคาสบายกระเป๋า ปี 2022!`
    }
    return(
        <div style={{padding:"10px"}}>
            <img src={props.image} width="100%" style={{borderRadius:"5px"}}/>
            <Typography color='text.secondary'>{props.description}</Typography>
        </div>
    )
}