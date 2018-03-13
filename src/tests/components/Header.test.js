import React from 'react'
import { shallow } from 'enzyme'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
// no use cause we setin jest config
//import toJSON from 'enzyme-to-json'
import { Header } from '../../components/Header'
import { startLogout } from '../../actions/auth'

test('should render Header conrrectly', () => {
    // test by enzyme is easier
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
    //expect(toJSON(wrapper)).toMatchSnapshot()
    //expect(wrapper.find('h1').text()).toBe('Expensify')

    // test by ReactShallowRenderer to create snapshot
    //const renderer = new ReactShallowRenderer()
    //renderer.render(<Header/>) 
    //expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should call start logout on button click', () => {
    const startLogout = jest.fn()
    const warpper = shallow(<Header startLogout={startLogout}/>)
    warpper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})