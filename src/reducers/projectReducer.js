let initState = {
    projects: [],
    allproject: [],
    page_id: 1
}
export default (state = initState, action) => {
    let {type, payload} = action
    switch(type){
        case 'GET_PORTFOLIO':
            let {allproject, projects, page_id} = payload
            return{
                allproject,
                projects,
                page_id 
            }
        default:
            return state;
    }
}