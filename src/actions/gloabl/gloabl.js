const GLOBAL_TEST='GLOBAL_TEST';

const globalTest=(t)=>({
    type:GLOBAL_TEST,
    payload:t
})

export default{
    globalTest
}
export const ACTION_HANDLERS={
    [GLOBAL_TEST]:(global,{payload})=>{
        return Object.assign({},global,{t:payload})
    }
}