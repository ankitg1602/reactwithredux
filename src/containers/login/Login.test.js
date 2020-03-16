import React from 'react'
import { shallow, configure } from 'enzyme'
import Login from './Login';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Test case for testing login', () => {
    let wrapper;
    test('username check', () => {
        wrapper = shallow(<Login/>)
        wrapper.find('input[type="email"]').simulate('change', {
            target: {
                name: 'email', 
                value: 'ankit'
            }
        })
        expect(wrapper.state('email')).toEqual('ankit');
    })
    it('password check',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant123'}});
        expect(wrapper.state('password')).toEqual('krishankant123');
    })
    it('login check with right data',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'krishankantsinghal'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant123'}});
        wrapper.find('button[type="submit"]').at(0).simulate('click');
        // expect(wrapper.state('isLogined')).toBe(true);
        })
    it('login check with wrong data',()=>{
            wrapper = shallow(<Login/>);
            wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'krishankantsinghal'}});
            wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant1234'}});
            wrapper.find('button[type="submit"]').at(0).simulate('click');
            // expect(wrapper.state('isLogined')).toBe(false);
            })
    it("should render my component", () => {
        const wrapper = shallow(<Login/>)
    })
})