import {getDate} from "./getDate";

describe("getDate function", () => {
    it("test timestamp correct", ()=>{
        const timestamp = 'December 17, 1995 03:24:00';
        const result = getDate(timestamp);
        expect(result).toEqual('17 декабря, вс, 1995 год')
    });

    it('timestamp is undefined', ()=>{
        const result = getDate(undefined);
        expect(result).toBeNull()
    });

    it('timestamp is null', ()=>{
        const result = getDate(null);
        expect(result).toBeNull()
    });

    it('timestamp is not timestamp', ()=>{
        const result = getDate("i dont know wat is it");
        expect(result).toBeNull()
    });
});