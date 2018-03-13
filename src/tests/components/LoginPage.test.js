import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'
import { startLogin } from '../../actions/auth'

let startLoginfunction, wrapper

beforeEach(() => {
    startLoginfunction = jest.fn()
    wrapper = shallow(<LoginPage startLogin={startLoginfunction}/>)
})

test('should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should call start login on button click', () => {
    wrapper.find('button').simulate('click')
    expect(startLoginfunction).toHaveBeenCalled()
})