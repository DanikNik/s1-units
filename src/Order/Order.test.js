import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Order from "./Order";
import toJson from "enzyme-to-json";
import React from "react";
import {fakeOrders} from "../mock/fakeOrders";

configure({adapter: new Adapter()});

describe('Order component', () => {
    const wrapper = shallow(<Order key={0} order={fakeOrders[0]}/>);

    it('render with default state: snapshot test', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('order empty items list', () => {
        const order = fakeOrders[0];
        order.items = [];
        wrapper.setProps({order: order});
        expect(wrapper).toEqual({});
    });

    it('order is null', () => {
        wrapper.setProps({order: null});
        expect(wrapper).toEqual({});
    });

    it('order is undefined', () => {
        wrapper.setProps({order: undefined});
        expect(wrapper).toEqual({});
    });
});
