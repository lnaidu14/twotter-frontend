import React from 'react'
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import Home from "../components/Home"
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Navbar() {
    return (
        <Router>
            <div>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                    </ul>
                </nav>
                <div className="login-nav">
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            <Switch>
                <Route path="/home">
                    <Home />
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
