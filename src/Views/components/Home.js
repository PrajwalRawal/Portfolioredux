import React, { Component } from 'react'
import MainLayout from '../layouts/MainLayout';

export default class Home extends Component {
    render() {
        return (
            <MainLayout>
                <section id="hero">
                    <h1 className="h5-text">Our Works</h1>
                    <h2 className="h1-text">We leverage design to give brands purpose.</h2>
                    <div className="portfolio">
                        <div className="card">
                            <div className="image">
                                <img src="https://demo.layerz.com.ve/horet/assets/img/works/01.jpg" alt="hello"/>
                            </div>
                            <div className="detail">
                                <span className="title">Hello World</span>
                                <span className="category">Arts</span>
                                <i className="right"></i>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image">
                                <img src="https://demo.layerz.com.ve/horet/assets/img/works/01.jpg" alt="hello"/>
                            </div>
                            <div className="detail">
                                <span className="title">Hello World</span>
                                <span className="category">Arts</span>
                                <i className="right"></i>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image">
                                <img src="https://demo.layerz.com.ve/horet/assets/img/works/01.jpg" alt="hello"/>
                            </div>
                            <div className="detail">
                                <span className="title">Hello World</span>
                                <span className="category">Arts</span>
                                <i className="right"></i>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image">
                                <img src="https://demo.layerz.com.ve/horet/assets/img/works/01.jpg" alt="hello"/>
                            </div>
                            <div className="detail">
                                <span className="title">Hello World</span>
                                <span className="category">Arts</span>
                                <i className="right"></i>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image">
                                <img src="https://demo.layerz.com.ve/horet/assets/img/works/01.jpg" alt="hello"/>
                            </div>
                            <div className="detail">
                                <span className="title">Hello World</span>
                                <span className="category">Arts</span>
                                <i className="right"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        )
    }
}
