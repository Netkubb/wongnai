import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import {Typography,Input,Box,Select,MenuItem,Checkbox } from '@mui/material'
import { useState } from 'react';

const distance = ["","500 ม.","1 กม.","2 กม."]
const foodType = ["อาหารตามสั่ง","อาหารจานเดียว","ก๋วยเตี๋ยว","ของหวาน","เครื่องดื่ม/ผลไม้","เบเกอรี่/เค้ก"]

export default function LeftBar() {
    const [dis, setDis] = useState('');

    const handleChange = (event) => {
        setDis(event.target.value);
    };

  return (<div style={{backgroundColor:"white"}}>
        <FormControl style={{paddingLeft:"20px"}}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="ร้านอาหาร" control={<Radio />} label={<Typography variant='caption'>ร้านอาหาร</Typography>} />
                <FormControlLabel value="ร้านเสริมสวย และ สปา" control={<Radio />} label={<Typography variant='caption'>ร้านเสริมสวย และ สปา</Typography>} />
                <FormControlLabel value="ที่พัก" control={<Radio />} label={<Typography variant='caption'>ที่พัก</Typography>} />
                <FormControlLabel value="สถานที่ท่องเที่ยว" control={<Radio />} label={<Typography variant='caption'>สถานที่ท่องเที่ยว</Typography>} />
            </RadioGroup>
        </FormControl>
        <Divider style={{width:"80%",margin:"1rem auto"}}/>
        <FormControl style={{paddingLeft:"20px"}}>
            <FormLabel id="demo-radio-buttons-group-label"><Typography style={{color:"black"}}><b>เรตติ้ง</b></Typography></FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="3.5 +" control={<Radio />} label={<Typography variant='caption'>3.5 +</Typography>} />
                <FormControlLabel value="4.0 +" control={<Radio />} label={<Typography variant='caption'>4.0 +</Typography>} />
            </RadioGroup>
        </FormControl>
        <Divider style={{width:"80%",margin:"1rem auto"}}/>
        <Box style={{padding:"0 20px"}}>
            <Typography style={{color:"black"}}><b>ค้นหาตาระยะทาง</b></Typography>
            <Input
            disableUnderline
            id="outlined-required"
            placeholder='เช่น วัดพระแก้ว'
            style={{border:"1px solid #EAEAEA",borderRadius:"3px"}}
            />
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dis}
                    onChange={handleChange}
                >
                    {distance.map((data) => {
                        return (<MenuItem key={data} value={data}>{data}</MenuItem>)
                    })}
                </Select>
            </FormControl>
        </Box>
        <Divider style={{width:"80%",margin:"1rem auto"}}/>
        <FormControl style={{paddingLeft:"20px"}}>
            <FormLabel id="demo-radio-buttons-group-label"><Typography style={{color:"black"}}><b>ประเภทอาหาร</b></Typography></FormLabel>
                {foodType.map((data) => 
                    <FormControlLabel key={data}value={data} control={<Checkbox  />} label={<Typography variant='caption'>{data}</Typography>} />
                )}
        </FormControl>
        <Divider style={{width:"80%",margin:"1rem auto"}}/>
        <FormControl style={{paddingLeft:"20px"}}>
            <FormLabel id="demo-radio-buttons-group-label"><Typography style={{color:"black"}}><b>ส่วนลด</b></Typography></FormLabel>
                {foodType.map((data) => 
                    <FormControlLabel key={data}value={data} control={<Checkbox  />} label={<Typography variant='caption'>{data}</Typography>} />
                )}
        </FormControl>
        <Divider style={{width:"80%",margin:"1rem auto"}}/>
        <FormControl style={{paddingLeft:"20px"}}>
            <FormLabel id="demo-radio-buttons-group-label"><Typography style={{color:"black"}}><b>ราคา</b></Typography></FormLabel>
                {foodType.map((data) => 
                    <FormControlLabel key={data}value={data} control={<Checkbox  />} label={<Typography variant='caption'>{data}</Typography>} />
                )}
        </FormControl>
        <Divider style={{width:"80%",margin:"1rem auto"}}/>
        <FormControl style={{paddingLeft:"20px"}}>
                {foodType.map((data) => 
                    <FormControlLabel key={data}value={data} control={<Checkbox  />} label={<Typography variant='caption'>{data}</Typography>} />
                )}
        </FormControl>
    </div>);
}