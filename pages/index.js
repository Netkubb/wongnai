import Head from 'next/head'
import Image from 'next/image'
import {Box,Grid} from '@mui/material'
import Header from '../comps/Header'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import LeftBar from '../comps/LeftBar'
import TopBody from '../comps/TopBody'

export default function Home() {
  return (<>
    <Header/>
    <Navbar/>
    <Box style={{backgroundColor:"#EDF0F2",padding:"5vh 0"}}>
      <Grid container columnSpacing={2} style={{width:"80vw",display:"flex",justifyContent:"center",margin:"auto"}}>
        <Grid item xs={2} style={{backgroundColor:"white",borderRadius:"5px",padding:"0"}}>
          <LeftBar/>
        </Grid>
        <Grid item xs={10}>
          <Grid container rowGap={2} direction={"row"}>
            <Grid item xs={12} style={{backgroundColor:"white",borderRadius:"5px",height:"134px"}}>
              <TopBody/>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={7} style={{backgroundColor:"white",borderRadius:"5px"}}>
                  <div>3</div>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={4} style={{backgroundColor:"red",borderRadius:"5px"}}>
                  <div>4</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>)
}
