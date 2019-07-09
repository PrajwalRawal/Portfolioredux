let initState = {
    projects: [],
    page_id: 1,
}
export default (state = initState, action) => {
    let {type, payload} = action
    switch(type){
        case 'GET_PORTFOLIO':
            return{
                ...state,
                projects: payload,
                has_more: true
            }
        case 'CHANGE_PAGE':
            return{
                ...state,
                page_id: payload
            }
        default:
            return state;
    }
}