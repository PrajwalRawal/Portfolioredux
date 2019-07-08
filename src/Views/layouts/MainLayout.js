import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

export default class MainLayout extends Component {
    handleClick = () => {
        document.getElementById('menu').classList.toggle('active');
        document.body.classList.toggle('hidden');
    }
    render() {
        return (
            <Fragment> 

                <header>
                    <div className="brand">
                        <img src="https://demo.layerz.com.ve/horet/assets/img/logo.png" alt="Brand"/>
                    </div>
                    <div className="icon" >
                        <div onClick={this.handleClick}>
                            <span>Menu</span>
                            <img src="/images/menu.svg"/>
                        </div>
                    </div>
                    <nav id="menu">
                        <span onClick={this.handleClick}>X</span>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/works">Works</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <div className="copyright">
                        &copy; {new Date().getFullYear()}. All Rights Reserved.
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href="https://facebook.com">Fb</a></li>
                            <li><a href="https://twitter.com">Tw</a></li>
                            <li><a href="https://instagram.com">Ig</a></li>
                            <li><a href="https://Youtube.com">Yt</a></li>
                            <li><a href="https://LinkedIn.com">In</a></li>
                        </ul>
                    </div>
                </footer>

            </Fragment>
        )
    }
}
