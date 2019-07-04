import React, { Component, Fragment } from 'react'

export default class MainLayout extends Component {
    render() {
        return (
            <Fragment> 

                <header>
                    <div className="brand">
                        <img src="https://demo.layerz.com.ve/horet/assets/img/logo.png" alt="Brand"/>
                    </div>
                    <div className="icon">
                        <div>
                            <span>Menu</span>
                            <img src="/images/menu.svg"/>
                        </div>
                    </div>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    this is footer
                </footer>

            </Fragment>
        )
    }
}
