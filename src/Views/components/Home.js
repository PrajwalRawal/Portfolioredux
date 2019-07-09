import React, { Component } from 'react'
import MainLayout from '../layouts/MainLayout';
import {connect} from 'react-redux'
import {getPortfolios, changePage} from '../../actions/portfolioActions'
import InfiniteScroll from 'react-infinite-scroller'
import { loadPartialConfig } from '@babel/core';


class Home extends Component {
    constructor(props){
        super(props);
        this._hasMore = false;
    }
    componentDidMount(){
        this.props.getPortfolio();
        this._hasMore = this.props.page_id <= 834
    }
    handleClick = () => {
        console.log('hehe')
        this.props.changePage();
        
    }
    render() {
        let {projects, page_id} = this.props
        let end = page_id * 6
        return (
            <MainLayout duration={page_id*300}>
                <section id="hero">
                    <h1 className="h5-text">Our Works</h1>
                    <h2 className="h1-text">We leverage design to give brands purpose.</h2>

                        <InfiniteScroll
                            pageStart={page_id}
                            loadMore= {() => this.handleClick()}
                            hasMore={this._hasMore}
                            loader= {'loading...'}
                            getScrollParent={() => this.scrollParentRef} 
                        >
                        <div className="portfolio" ref={(ref) => this.scrollParentRef = ref}>
                            {
                                projects.slice(0,end).map(project => {
                                    let {title, id, url} = project
                                    return(
                                        <div className="card" key={id}>
                                            <div className="image">
                                                <img src={url} alt={title}/>
                                            </div>
                                            <div className="detail">
                                                <span className="title">{title}</span>
                                                <span className="category">Tags {id}</span>
                                                <i className="right"></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </InfiniteScroll>
                    <button onClick={this.handleClick}>Load More...</button>
                </section>
            </MainLayout>
        )
    }
}
const mapStateToProps = (state) => {
    return{ 
        projects: state.project.projects,
        page_id: state.project.page_id,
    }
} 

const mapDispatchToProps = (dispatch) => {
    return{
        getPortfolio : () => dispatch(getPortfolios()),
        changePage: () => dispatch(changePage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)