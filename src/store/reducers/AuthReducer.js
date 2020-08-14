const initialState={
    authError:null
}
const authReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login error')
            return {
                ...state,
                authError:'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return{
                ...state,
                authError:null
            }
        case 'LOGOUT_SUCCESS':
            console.log('signout success')
            return state
        case 'SIGNUP_SUCCESS':
            console.log('SignOut success')
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('SignOut failed')
            return{
                ...state,
                authError:action.err.message
            }
        default:
            return state
    }
}   

export default authReducer