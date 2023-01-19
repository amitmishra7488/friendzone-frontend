var myData={
    users:[],
    fetchData:[],
    sort:[],
    toggle:false
}

export const reducer = (storeData=myData,action)=>{

    switch(action.type){
        case "ADD_USER":{
            return{
                ...storeData,
                users:[...storeData.users,action.payload]
            }
        }
        case "FETCH":{
            return{
                ...storeData,
                fetchData:action.payload
            }
        }
        case "SORTBYNAME":{
            const handleSort=[...storeData.fetchData];
            return{
                ...storeData,
                sort:handleSort.sort((a,b)=>{
                    return a.first_name.localeCompare(b.first_name)

                })
            }
        }
        case "TOGGLE":{
            // const handleToggle=[...storeData.toggle];
            return{
                ...storeData,toggle:action.payload
            }
            
        }
        default: return storeData;
    }
}