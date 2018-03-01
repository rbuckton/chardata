import { CharSet } from "chardata-charset";
import getGeneralCategoryCharSet from "./generalCategory.generated";
import * as gc from "./generalCategory.generated";

export * from "./generalCategory.generated";

export const LC = CharSet.from([gc.Lu, gc.Ll, gc.Lt]);
export { LC as Cased_Letter };
export const L = CharSet.from([gc.Lu, gc.Ll, gc.Lt, gc.Lm, gc.Lo]);
export { L as Letter };
export const M = CharSet.from([gc.Mn, gc.Mc, gc.Me]);
export { M as Mark };
export const N = CharSet.from([gc.Nd, gc.Nl, gc.No]);
export { N as Number };
export const P = CharSet.from([gc.Pc, gc.Pd, gc.Ps, gc.Pe, gc.Pi, gc.Pf, gc.Po]);
export { P as Punctuation };
export const S = CharSet.from([gc.Sm, gc.Sc, gc.Sk, gc.So]);
export { S as Symbol };
export const Z = CharSet.from([gc.Zs, gc.Zl, gc.Zp]);
export { Z as Separator };
export const C = CharSet.from([gc.Cc, gc.Cf, gc.Cs, gc.Co, gc.Cn]);
export { C as Other };

export default function (value: string): CharSet | undefined {
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