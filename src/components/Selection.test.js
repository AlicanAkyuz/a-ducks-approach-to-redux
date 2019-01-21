import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Selection from './Selection';

describe('Selection', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Selection />);
    expect(wrapper).to.have.lengthOf(1);
  });
});
