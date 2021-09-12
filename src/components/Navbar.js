import React from 'react'
import Contact from "../components/Contact"
import About from "../components/About"
import Posts from "../components/Posts"
import Home from "../components/Home"
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Navbar() {
    return (
        <Router>
        <div>
            <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/posts">
                <Posts />
            </Route>
        </Switch>
        </div>
        </Router>
    )
}
