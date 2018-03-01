import { CharSet } from "chardata-charset";
import { Cn } from "./generalCategory";
import getDerivedCorePropertyCharSet from "./derivedCoreProperties.generated";
import getPropListCharSet from "./propList.generated";

export * from "./derivedCoreProperties.generated";
export * from "./propList.generated";

export const Any = CharSet.any();
export const Assigned = Cn.invert();
export const ASCII = CharSet.ascii();

export default function (value: string): CharSet | undefined {
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