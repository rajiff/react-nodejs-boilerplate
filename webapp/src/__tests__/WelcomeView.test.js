import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeView from '../components/WelcomeView';
import chai from 'chai';

Enzyme.configure({ adapter: new Adapter() });

const expect = chai.expect;

describe('Unit testing for component <WelcomeView />', function() {
  it('Check WelcomeView renders welcome message', function() {
  	const welcomeView = shallow(<WelcomeView />);
  	expect(welcomeView.find('h2').exists()).to.equal(true);
		expect(welcomeView.find('h2').text()).to.equal("Welcome View");
  })
})