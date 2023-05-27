import '../styles/Home.css';
//import {useState} from 'react';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <div>
        <div id="first">
           <Navbar/>
            <main>
                <section id="hero">
                    <h1>Welcome</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                    vel molestias doloremque?</p>
                </section>
           </main>
        </div>
    </div>
  )
}

export default Home