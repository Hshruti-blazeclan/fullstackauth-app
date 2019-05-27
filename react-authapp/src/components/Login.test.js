import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import School1Home from './School1Home'

// describe what we are testing
// make our assertion and what we expect to happen 


describe('Test case for testing login', () => {
    let wrapper;
    const props = {
        form: {
            userName: 'shruti.hiremath@blazeclan.com',
            password: ""
        }
    }

    it('should render without throwing an error', () => {
        expect(shallow(<Login {...props} />).find('form').exists()).toBe(true)
    })
    // it('renders a email input', () => {
    //     expect(shallow(<Login />).find('#email').length).toEqual(1)
    // })
    // it('renders a password input', () => {
    //     expect(shallow(<Login />).find('#password').length).toEqual(1)
    // })
    
    //Checking for username and its value
    test('userName check', () => {
        const props = {
            form: {
                userName: 'shruti.hiremath@blazeclan.com',
                password: ""
            }
        },
        wrapper = shallow(<Login {...props}/>);
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'userName', value: 'shruti.hiremath@blazeclan.com' } });
        expect(wrapper.state('userName')).toEqual('shruti.hiremath@blazeclan.com');
    })

    //Checking for password and its value
    it('password check', () => {
        wrapper = shallow(<Login {...props} />);
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'Test@123' } });
        expect(wrapper.state('password')).toEqual('Test@123');
    })

    //checking for both entered data is correct
    it('login check with right data', () => {
        wrapper = shallow(<Login {...props} />);
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'userName', value: 'shruti.hiremath@blazeclan.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'Test@123' } });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('toDashboard')).toBe(false);
    })

    it('login check with wrong data', () => {
        wrapper = shallow(<Login {...props}/>);
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'userName', value: 'shruti.hiremath@blazeclan.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'Test@123' } });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('toDashboard')).toBe(false);
    })
})