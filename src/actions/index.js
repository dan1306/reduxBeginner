export const increment = (inc) => {
    return {
        type: 'INCREMENT',
        payload: inc
    }
}


export const decrement = (inc) => {
    return {
        type: 'DECREMENT',
        payload: inc
    }
}



export const signIn = () => {
    return {
        type: 'SIGN_IN',
    }
}


export const signOut = () => {
    return {
        type: 'DECREMENT',
    }
}