import React from 'react';
import { shallow } from 'enzyme';
import { ItemCount } from '../ItemCount';

describe("ItemCount", () => {
    it("should match initial snapshot", () => {
        const props = {
            count: 5,
            name: "test"
        };
        expect(shallow(<ItemCount {...props} />)).toMatchSnapshot();
    });
});