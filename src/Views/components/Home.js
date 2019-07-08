import React, { Component } from 'react'
import MainLayout from '../layouts/MainLayout';
import {connect} from 'react-redux'
import {getPortfolios, getMore} from '../../actions/portfolioActions'


class Home extends Component {
    componentDidMount(){
        this.props.getPortfolio();
    }
    handleClick = () => {
        this.props.getMore()
        
    }
    render() {
        let {projects} = this.props
        console.log(this.props)
        return (
            <MainLayout>
                <section id="hero">
                    <h1 className="h5-text">Our Works</h1>
                    <h2 className="h1-text">We leverage design to give brands purpose.</h2>
                    <div className="portfolio">
                        {
                            projects.map(project => {
                                let {title, tags, avatar, id} = project
                                return(
                                    <div className="card" key={id}>
                                        <div className="image">
                                            <img src={avatar} alt={title}/>
                                        </div>
                                        <div className="detail">
                                            <span className="title">{title}</span>
                                            <span className="category">{tags}</span>
                                            <i className="right"></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <button onClick={this.handleClick}>Load More...</button>
                </section>
            </MainLayout>
        )
    }
}
const mapStateToProps = (state) => {
    return{ 
        projects: state.project.projects
    }
} 

const mapDispatchToProps = (dispatch) => {
    return{
        getPortfolio : () => dispatch(getPortfolios()),
        getMore: (page_id) => dispatch(getMore(page_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)