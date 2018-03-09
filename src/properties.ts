import { CharSet } from "chardata-charset";
import { Cn } from "./generalCategory";
import getDerivedCorePropertyCharSet from "./derivedCoreProperties.generated";
import getPropListCharSet from "./propList.generated";
import { ReadonlyCharSet } from "chardata-charset/dist/charSet";

export * from "./derivedCoreProperties.generated";
export * from "./propList.generated";

export const Any = Object.freeze(CharSet.any());
export const Assigned = Object.freeze(Cn.invert());
export const ASCII = Object.freeze(CharSet.ascii());

export default function (value: string): ReadonlyCharSet | undefined {
    switch (value) {
        case "Any":
            return Any;
        case "Assigned":
            return Assigned;
        case "ASCII":
            return ASCII;
        default:
            return getDerivedCorePropertyCharSet(value)
                || getPropListCharSet(value);
    }
}