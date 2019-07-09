import axios from 'axios'

export const getPortfolios = () => {
    return (dispatch, getState) => {
        axios.get('/photos')
        .then(result => {
            dispatch({
                type: 'GET_PORTFOLIO', 
                payload: result.data,
            })
        })
        .catch(err => {
            console.error(err)
        })
    }
}

export const changePage = () =>  (dispatch, getState) => {
    let pageId = getState().project.page_id + 1;
    dispatch({type: 'CHANGE_PAGE', payload: pageId})

}