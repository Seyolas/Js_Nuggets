
const state = {
    loading:true,
    name:'',
    job:'',
}

const updateState = (key,value)=>{
    state[key]=value;
}
updateState('name','John');
updateState('job','software developer');
updateState('name','Peter');
console.log(state);