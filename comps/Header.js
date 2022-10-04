import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'
import { Input,InputAdornment } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header() {
  return (
    <Box>
      <AppBar color={"transparent"} position="static" style={{paddingLeft:"10vw",paddingRight:"10vw",boxShadow: "none",borderBottom:"1px solid #EAEAEA"}}  >
        <Toolbar>
            <img src='https://static2.wongnai.com/static2/images/HTZaHLM.png' className={styles.wongnaiIcon}/>
            <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <LocationOnIcon />
                    </InputAdornment>
                }
                placeholder="พิมพ์สถานที่.."
                style={{backgroundColor:"#e9ecee",borderRadius:"10px",width:"180px",marginLeft:"3vw"}}
                disableUnderline
            />
            <Input
                id="input-with-icon-adornment"
                endAdornment={
                    <InputAdornment position="start">
                        {/* <Button variant='contained' style={{borderRadius:"10px"}}> */}
                            <SearchIcon />
                        {/* </Button> */}
                    </InputAdornment>
                }
                placeholder="ร้านอาหาร โรงแรม ที่เที่ยว ร้านเสริมสวย สปา ..."
                style={{backgroundColor:"#e9ecee",borderRadius:"10px",width:"267px",marginLeft:"1vw",paddingLeft:"1vw"}}
                disableUnderline
            />
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" style={{borderRadius:"20px",borderStyle:"solid",borderWidth:"1px"}}><PersonIcon/><b>เข้าสู่ระบบ</b></Button>
          <Button color="inherit" style={{borderRadius:"20px",borderStyle:"solid",borderWidth:"1px"}}><KeyboardArrowDownIcon/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}