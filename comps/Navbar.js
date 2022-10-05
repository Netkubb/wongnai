import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Typography,Link,Box,AppBar} from '@mui/material'


export default function Navbar(){
    return (
        <Box>
            <AppBar color={"transparent"} position="static" style={{padding:"3vh 10vw",minHeight:"48px",boxShadow: "none"}}  >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        หน้าแรก
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        ร้านอาหาร
                    </Link>
                    <Typography color="text.primary">ค้นหาร้านอาหาร</Typography>
                </Breadcrumbs>
                <Typography variant='h2' style={{paddingTop:"1vh"}}>
                    ร้านอาหาร ยอดนิยม
                </Typography>
            </AppBar>
        </Box>
    )
}