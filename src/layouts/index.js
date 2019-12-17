import React from "react"
import Link from "gatsby-link"
import {Helmet} from "react-helmet"
import styles from "./index.module.css"

const ListLink = props =>(
    <li style={{display: `inline-block`, marginRight: `1rem`, textDecoration:`underline #1ca086`}}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>
)
export default ({children})=>(
<div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Joel Neale</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div style={{margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem`}} >
        <header style={{marginBottom: `1.5rem`}}>
             <ul style={{ listStyle: `none`, float: `right`, }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/sound_reel/">Sound Reel</ListLink>
                <ListLink to="/more/">More</ListLink>
            </ul>
                <h1 style={{display: `inline`}}>Joel Neale</h1>
                <h2 style={{marginTop: `40px`, marginBottom: `30px`}}>Sound Recordist and Audio Post Production</h2>
        </header>
        {children()}
        <footer style={{display: `inline-block`, float: `right`, fontSize: 16,  bottom: 0}}>
            <br />
            email: <a href="mailto:joelpneale@gmail.com">joelpneale@gmail.com</a><br />
            phone: <a href="tel:07590334666">07590334666</a>
            <p></p>
        </footer>
    </div>
</div>
);