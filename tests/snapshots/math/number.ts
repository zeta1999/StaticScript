
{
    function simpleAdd(): number {
        const a: number = 5;
        const b: number = 10;

        return a + b;
    }

    function simpleSub(): number {
        const a: number = 5;
        const b: number = 10;

        return a - b;
    }

    function simpleDiv(): number {
        const a: number = 5;
        const b: number = 10;

        return a / b;
    }

    function simpleMul(): number {
        const a: number = 5;
        const b: number = 10;

        return a * b;
    }

    function simpleXor(): number {
        const a: number = 5;
        const b: number = 10;

        return 5 ^ 10;
    }

    function simpleAshr(): number {
        const a: number = 5;
        const b: number = 10;

        return 16 >> 2;
    }

    function mathFloor(): number {
        return Math.floor(5.45);
    }

    function mathCeil(): number {
        return Math.floor(5.45);
    }

    function mathSqrt(): number {
        return Math.sqrt(4);
    }

    function mathPow(): number {
        return Math.pow(4, 4);
    }

    simpleAdd();
    simpleSub();
    simpleDiv();
    simpleMul();
    simpleXor();
    simpleAshr();

    mathFloor();
    mathCeil();
    mathSqrt();
    mathPow();
}
