import React from 'react';
import Layout from '../components/Layout';

export default function Contact() {
    return(
        <Layout>
            <div id="contact-container">
                <h1 id="title">Contact</h1>
            </div>
            
            <style jsx>{`
            #contact-container {
                position: relative;
                height: 100%;
            }

            #title {
                margin-top: 10vh;
                color: white;
                font-size: 2em;
                font-family: 'Roboto', open-sans;
                text-align: center;
            }
            `}</style>
        </Layout>   
    )
}