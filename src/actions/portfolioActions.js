import axios from 'axios'
import { statement } from '@babel/template';

export const getPortfolios = () => {
    return (dispatch, getState) => {
        axios.get('/portfolio')
        .then(result => {
            let state = getState().project
            dispatch({
                type: 'GET_PORTFOLIO', 
                
                payload: {
                    ...state,
                    projects: result.data.slice(0,6),
                    allproject: result.data
                }
            })
        })
        .catch(err => {
            console.error(err)
        })
    }
}

export const getMore = () => {
    return (dispatch, getState) => {
        let start = (getState().project.page_id-1)*6;
        let end = getState().project.page_id*6
        console.log(start, end);
        console.log(getState().project.projects);
        let newProjects = getState().project.allproject.slice(start, end);
        console.log([...getState().project.projects, ...newProjects])
        dispatch({
            type: 'GET_PORTFOLIO', 
            payload:{
                projects: newProjects,
                allproject: getState().project.allproject,
                page_id: getState().project.page_id +1
            }
        })
    }
}