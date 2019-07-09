import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll'

export default class MainLayout extends Component {
    componentDidMount(){
        window.addEventListener("scroll", (e) => {
            let top = window.scrollY;
            console.log(top)
            if(top === 0){
                document.getElementById('scrollTop').classList.add('hide');
            }else{
                document.getElementById('scrollTop').classList.remove('hide');
            }
        }, false);
    }
    handleClick = () => {
        document.getElementById('menu').classList.toggle('active');
        document.body.classList.toggle('hidden');
    }
    scrollTop = () => {
        scroll.scrollToTop({
            duration: `${this.props.duration}ms`
        });
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
                <button id="scrollTop" className="top-btn hide" onClick={this.scrollTop}>^</button>
            </Fragment>
        )
    }
}
