import Head from 'next/head'
import Image from 'next/image'
import {Box,Grid,Typography} from '@mui/material'
import Header from '../comps/Header'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import LeftBar from '../comps/LeftBar'
import TopBody from '../comps/TopBody'
import CardBody from '../comps/CardBody'
import RightTopBody from '../comps/RightTopBody'
import RightSecondBody from '../comps/RightSecondBody'
import RightThirdBody from '../comps/RightThirdBody'
import RightLastBody from '../comps/RightLastBody'


export default function Home() {
  return (<>
    <Header/>
    <Navbar/>
    <Box style={{backgroundColor:"#EDF0F2",padding:"5vh 0"}}>
      <Grid container columnSpacing={2} style={{width:"80vw",display:"flex",justifyContent:"center",margin:"auto"}}>
        <Grid item md={2} xs={12} style={{borderRadius:"5px",padding:"0"}}>
          <LeftBar/>
        </Grid>
        <Grid item md={10} xs={12}>
          <Grid container rowGap={2} direction={"row"}>
            <Grid item md={12} xs={12} style={{backgroundColor:"white",borderRadius:"5px",height:"134px"}}>
              <TopBody/>
            </Grid>
            <Grid item md={12} xs={12}>
              <Grid container columns={240}>
                <Grid item md={180} xs={240} style={{borderRadius:"5px",marginRight:"1vw"}}>
                  {[...Array(10)].map((key,value) => <CardBody key={value}/>)}
                </Grid>
                <Grid item md={56} xs={240} style={{borderRadius:"5px"}}>
                  <Grid container rowGap={2}>
                    <Grid item md={12} xs={12} style={{backgroundColor:"white",borderRadius:"5px"}}>
                      <RightTopBody/>
                    </Grid>
                    <Grid item md={12} xs={12} style={{backgroundColor:"white",borderRadius:"5px"}}>
                      <RightSecondBody/>
                    </Grid>
                    <Grid item md={12} xs={12} style={{backgroundColor:"white",borderRadius:"5px"}}>
                      <div style={{display:"flex",padding:"10px"}}>
                        <Typography flexGrow={1}><b>บทความแนะนำ</b></Typography>
                        <Typography color="primary">ดูทั้งหมด</Typography>
                      </div>
                      {[...Array(5)].map((key,value) => <RightThirdBody key={value}/>)}
                      
                    </Grid>
                    <Grid item md={12} xs={12} style={{backgroundColor:"white",borderRadius:"5px"}}>
                    <div style={{display:"flex",padding:"10px"}}>
                        <Typography flexGrow={1}><b>รวมลิสต์แนะนำที่คุณต้องลอง</b></Typography>
                        <Typography color="primary">ดูทั้งหมด</Typography>
                      </div>
                      {[...Array(10)].map((key,value) => <RightLastBody key={value}/>)}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>)
}
