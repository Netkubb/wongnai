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

const n = 20;

export default function Home() {
  return (<>
    <Header/>
    <Navbar/>
    <Box style={{backgroundColor:"#EDF0F2",padding:"5vh 0"}}>
      <Grid container columnSpacing={2} style={{width:"80vw",display:"flex",justifyContent:"center",margin:"auto"}}>
        <Grid item xs={2} style={{borderRadius:"5px",padding:"0"}}>
          <LeftBar/>
        </Grid>
        <Grid item xs={10}>
          <Grid container rowGap={2} direction={"row"}>
            <Grid item xs={12} style={{backgroundColor:"white",borderRadius:"5px",height:"134px"}}>
              <TopBody/>
            </Grid>
            <Grid item xs={12}>
              <Grid container columns={240}>
                <Grid item xs={180} style={{borderRadius:"5px",marginRight:"1vw"}}>
                  {[...Array(10)].map((m) => <CardBody/>)}
                </Grid>
                {/* <Grid item xs={1}>
                </Grid> */}
                <Grid item xs={56} style={{borderRadius:"5px"}}>
                  <Grid container rowGap={2}>
                    <Grid item xs={12} style={{backgroundColor:"white",borderRadius:"5px"}}>
                      <RightTopBody/>
                    </Grid>
                    <Grid item xs={12} style={{backgroundColor:"white",borderRadius:"5px"}}>
                      <RightSecondBody/>
                    </Grid>
                    <Grid item xs={12} style={{backgroundColor:"white",borderRadius:"5px"}}>
                      <div style={{display:"flex",padding:"10px"}}>
                        <Typography flexGrow={1}><b>บทความแนะนำ</b></Typography>
                        <Typography color="primary">ดูทั้งหมด</Typography>
                      </div>
                      {[...Array(5)].map((m) => <RightThirdBody/>)}
                      
                    </Grid>
                    <Grid item xs={12} style={{backgroundColor:"white",borderRadius:"5px"}}>
                    <div style={{display:"flex",padding:"10px"}}>
                        <Typography flexGrow={1}><b>รวมลิสต์แนะนำที่คุณต้องลอง</b></Typography>
                        <Typography color="primary">ดูทั้งหมด</Typography>
                      </div>
                      {[...Array(5)].map((m) => <RightLastBody/>)}
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
