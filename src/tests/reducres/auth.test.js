import authReducer from '../../reducers/auth'

test('should setup default auth state', () => {
    const state = authReducer(undefined, {
        type: '@@INIT'
    })
    expect(state).toEqual({})
})

test('should setup login state', () => {
    const state = authReducer(undefined, {
        type: 'LOGIN',
        uid: '123abc'
    })
    expect(state).toEqual({ uid: '123abc' })
})

test('should set up logout state', () => {
    const state = authReducer({ uid: '123abc' }, {
        type: 'LOGOUT'
    })
    expect(state).toEqual({})
})