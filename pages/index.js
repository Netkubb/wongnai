import Head from 'next/head'
import Image from 'next/image'
import Header from '../comps/Header'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
    <Header/>
    <Navbar/>
  </>)
}
