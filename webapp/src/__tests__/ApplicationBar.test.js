import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ApplicationBar from '../components/ApplicationBar';
import chai from 'chai';

Enzyme.configure({ adapter: new Adapter() });

const expect = chai.expect;

describe('Unit testing for component <ApplicationBar />', function() {
  it('Check ApplicationBar renders App bar', function() {
  	const appBarWrapper = shallow(<ApplicationBar />);
  	console.log("What ", appBarWrapper.contains('MERN App'))
  	expect(appBarWrapper.contains('MERN App')).to.equal(true);
  })
})