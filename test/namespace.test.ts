import {MathUtils} from "../src/math-utils";

describe('Namespace', () => {
    it('should support namespace', () => {
        console.info(MathUtils.sum(1, 2, 3, 4, 5));
        console.info(MathUtils.sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    });
});