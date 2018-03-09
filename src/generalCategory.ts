import { CharSet, ReadonlyCharSet } from "chardata-charset";
import getGeneralCategoryCharSet from "./generalCategory.generated";
import * as gc from "./generalCategory.generated";

export * from "./generalCategory.generated";

export const LC = Object.freeze(CharSet.of(gc.Lu, gc.Ll, gc.Lt));
export { LC as Cased_Letter };
export const L = Object.freeze(CharSet.of(gc.Lu, gc.Ll, gc.Lt, gc.Lm, gc.Lo));
export { L as Letter };
export const M = Object.freeze(CharSet.of(gc.Mn, gc.Mc, gc.Me));
export { M as Mark };
export const N = Object.freeze(CharSet.of(gc.Nd, gc.Nl, gc.No));
export { N as Number };
export const P = Object.freeze(CharSet.of(gc.Pc, gc.Pd, gc.Ps, gc.Pe, gc.Pi, gc.Pf, gc.Po));
export { P as Punctuation };
export const S = Object.freeze(CharSet.of(gc.Sm, gc.Sc, gc.Sk, gc.So));
export { S as Symbol };
export const Z = Object.freeze(CharSet.of(gc.Zs, gc.Zl, gc.Zp));
export { Z as Separator };
export const C = Object.freeze(CharSet.of(gc.Cc, gc.Cf, gc.Cs, gc.Co, gc.Cn));
export { C as Other };
export default function (value: string): ReadonlyCharSet | undefined {
    switch (value) {
        case "LC":
        case "Cased_Letter":
            return LC;
        case "L":
        case "Letter":
            return L;
        case "M":
        case "Mark":
            return M;
        case "N":
        case "Number":
            return N;
        case "P":
        case "Punctuation":
            return P;
        case "S":
        case "Symbol":
            return S;
        case "Z":
        case "Separator":
            return Z;
        case "C":
        case "Other":
            return C;
        default:
            return getGeneralCategoryCharSet(value);
    }
}