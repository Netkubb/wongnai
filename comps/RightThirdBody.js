import {Typography} from '@mui/material';


export default function RightThirdBody(){
    const props = {
        image:"https://img.wongnai.com/p/800x0/2022/09/20/3f4ceaf0dd6042ea81226d3892378a7b.jpg",
        description:`“Copper Cafe” คาเฟ่สมุทรสาครบรรยากาศชิล เอาใจสายหวานที่รักสุขภาพ!`
    }
    return(
        <div style={{padding:"10px"}}>
            <img src={props.image} width="100%" style={{borderRadius:"5px"}}/>
            <Typography color='text.secondary'>{props.description}</Typography>
        </div>
    )
}