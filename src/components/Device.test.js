import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Device from './Device';

describe('Device', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Device />);
    expect(wrapper).to.have.lengthOf(1);
  });
});
