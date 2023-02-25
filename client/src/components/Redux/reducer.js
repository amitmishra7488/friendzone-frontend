var myData={
    userProfile:{},
}

export const reducer = (storeData=myData,action)=>{

    switch(action.type){
        case "USER_PROFILE":{
            return{
                ...storeData,
                userProfile:action.payload
            }
        }
        
        default: return storeData;
    }
}