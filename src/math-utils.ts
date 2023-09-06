export namespace MathUtils {
    export const PI: number  = 3.14;

    export function sum(...values: number[]): number {
        return values.reduce((a, b) => a + b, 0);
    }
}