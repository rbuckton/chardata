import { CharSet, ReadonlyCharSet } from "chardata-charset";
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

export default function (propertyName: string, propertyValue?: string): ReadonlyCharSet | undefined {
    if (propertyValue === undefined) {
        return getGeneralCategoryCharSet(propertyName)
            || getPropertyCharSet(propertyName);
    }
    else {
        switch (propertyName) {
            case "gc":
            case "General_Category":
                return getGeneralCategoryCharSet(propertyValue);
            case "sc":
            case "Script":
                return getScriptCharSet(propertyValue);
            case "scx":
            case "Script_Extensions":
                return getScriptExtensionsCharSet(propertyValue);
        }
    }
}