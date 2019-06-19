import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App', () => {
	const id = 1;
	it('renders correctly', () => {
		expect(app).toMatchSnapshot();
	});
});
