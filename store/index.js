export const state = ()=>({
 hide: false
})

export const mutations = { 
    changeHide(state, payload){
        state.hide = payload;
    }
}