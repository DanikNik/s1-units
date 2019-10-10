import React from 'react'
import {sortByDate, sortByItemCount, sortByItemNames} from './sortOrders';

describe('sortByItemCount function', () => {
    it('orders are null', () => {
        const result = sortByItemCount(null, null);
        expect(result).toEqual(0);
    });

    it('same items count', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });

    it('order 1 is larger then 2', () => {
        const order1 = {
            items: ['item1', 'item2', 'item3'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);
        expect(result).toBe(1)
    });

    it('order 2 is larger then 1', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['1', '2', '3'],
        };

        const result = sortByItemCount(order1, order2);
        expect(result).toBe(-1)
    });

    it('order 1 is not a list', () => {
        const order1 = {
            items: "i am not a list",
        };

        const order2 = {
            items: ['1', '2', '3'],
        };

        const result = sortByItemCount(order1, order2);
        expect(result).toBe(0)
    });

    it('order 1 is undefined', () => {
        const order1 = {
            items: undefined,
        };

        const order2 = {
            items: ['1', '2', '3'],
        };

        const result = sortByItemCount(order1, order2);
        expect(result).toBe(0)
    });

    it('order 2 is absent', () => {
        const order1 = {
            items: ['item1'],
        };

        const result = sortByItemCount(order1);
        expect(result).toBe(0)
    })
});

describe('sortItemByNames function', () => {
    it('order 1 is greater then order2 CORRECT', () => {
        const order1 = {
            items: ["q", 'w'],
        };

        const order2 = {
            items: ['a', 'b'],
        };

        const result = sortByItemNames(order1, order2);
        expect(result).toBe(1)
    });

    it('orders are null', () => {
        const order1 = null;

        const order2 = {
            items: ['a', 'b'],
        };

        const result = sortByItemNames(order1, order2);
        expect(result).toBe(0)
    });

    it('order1 is not list', () => {
        const order1 = {
            items: "123456",
        };

        const order2 = {
            items: ['a', 'b'],
        };

        const result = sortByItemNames(order1, order2);
        expect(result).toBe(0)
    });

    it('order 1 is undefined', () => {
        const order1 = {
            items: undefined,
        };

        const order2 = {
            items: ['1', '2', '3'],
        };

        const result = sortByItemNames(order1, order2);
        expect(result).toBe(0)
    });

    it('order 2 is undefined', () => {
        const order1 = {
            items: ["undefined"],
        };

        const order2 = {
            items: undefined,
        };

        const result = sortByItemCount(order1, order2);
        expect(result).toBe(0)
    });

    it('order 2 is absent', () => {
        const order1 = {
            items: ["q", "2"]
        };

        const result = sortByItemNames(order1);

        expect(result).toBe(0)
    });
});

describe("sortItemsByDate", () => {
    it('order1 is earlier than order2 CORRECT', () => {
        const order1 = {
            date: 12345
        };

        const order2 = {
            date: 54321
        };

        const result = sortByDate(order1, order2);
		expect(result).toBe(1);
    });

    it('order1 is null', ()=>{
    	const order1 = null;

		const order2 = {
			date: 12345
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0)
	});

	it('order1 is undefined', ()=>{
		const order1 = undefined;

		const order2 = {
			date: 12345
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0)
	});

	it('order1.date not int', ()=>{
		const order1 = {
			date: "i am not integer"
		};

		const order2 = {
			date: 12345
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0)
	});
});
