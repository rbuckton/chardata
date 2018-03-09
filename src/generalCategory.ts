import { CharSet, ReadonlyCharSet } from "chardata-charset";
import getGeneralCategoryCharSet from "./generalCategory.generated";
import * as gc from "./generalCategory.generated";

export * from "./generalCategory.generated";

export const LC = Object.freeze(CharSet.from([gc.Lu, gc.Ll, gc.Lt]));
export { LC as Cased_Letter };
export const L = Object.freeze(CharSet.from([gc.Lu, gc.Ll, gc.Lt, gc.Lm, gc.Lo]));
export { L as Letter };
export const M = Object.freeze(CharSet.from([gc.Mn, gc.Mc, gc.Me]));
export { M as Mark };
export const N = Object.freeze(CharSet.from([gc.Nd, gc.Nl, gc.No]));
export { N as Number };
export const P = Object.freeze(CharSet.from([gc.Pc, gc.Pd, gc.Ps, gc.Pe, gc.Pi, gc.Pf, gc.Po]));
export { P as Punctuation };
export const S = Object.freeze(CharSet.from([gc.Sm, gc.Sc, gc.Sk, gc.So]));
export { S as Symbol };
export const Z = Object.freeze(CharSet.from([gc.Zs, gc.Zl, gc.Zp]));
export { Z as Separator };
export const C = Object.freeze(CharSet.from([gc.Cc, gc.Cf, gc.Cs, gc.Co, gc.Cn]));
export { C as Other };

export default function (value: string): ReadonlyCharSet | undefined {
    switch (value) {
        case "Cased_Letter":
        case "LC":
            return LC;
        case "Letter":
        case "L":
            return L;
        case "Mark":
        case "M":
            return M;
        case "Number":
        case "N":
            return N;
        case "Punctuation":
        case "P":
            return P;
        case "Symbol":
        case "S":
            return S;
        case "Separator":
        case "Z":
            return Z;
        case "Other":
        case "C":
            return C;
        default:
            return getGeneralCategoryCharSet(value);
    }
}