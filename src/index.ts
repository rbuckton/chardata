import { CharSet } from "chardata-charset";
import * as gc from "./generalCategory";
import * as sc from "./script";
import * as scx from "./scriptExtensions";
import * as Properties from "./properties";

export {
    CharSet,
    gc, gc as General_Category,
    sc, sc as Script,
    scx, scx as Script_Extensions,
    Properties
};

export * from "./generalCategory";
export * from "./properties";

import getGeneralCategoryCharSet from "./generalCategory";
import getScriptCharSet from "./script";
import getScriptExtensionsCharSet from "./scriptExtensions";
import getPropertyCharSet from "./properties";

export default function (propertyNameOrValue: string): CharSet | undefined;
export default function (propertyName: string, propertyValue: string): CharSet | undefined;
export default function (propertyName: string, propertyValue?: string): CharSet | undefined {
    if (propertyValue === undefined) {
        return getGeneralCategoryCharSet(propertyName)
            || getPropertyCharSet(propertyName);
    }
    else {
        switch (propertyName) {
            case "General_Category":
            case "gc":
                return getGeneralCategoryCharSet(propertyValue);
            case "Script":
            case "sc":
                return getScriptCharSet(propertyValue);
            case "Script_Extensions":
            case "scx":
                return getScriptExtensionsCharSet(propertyValue);
        }
    }
}