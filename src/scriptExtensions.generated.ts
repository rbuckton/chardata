// Unicode 6.2.0 Script_Extensions
// Derived from: http://www.unicode.org/Public/6.2.0/ucd/ScriptExtensions.txt
import { CharSet, ReadonlyCharSet } from "chardata-charset";

export const Arab = Object.freeze(CharSet.fromStartLengthArray([1548,0,1563,0,1567,0,1600,0,1611,10,1632,9,1648,0,65010,0,65021,0]));
export { Arab as Arabic };
export const Armn = Object.freeze(CharSet.fromStartLengthArray([1417,0]));
export { Armn as Armenian };
export const Beng = Object.freeze(CharSet.fromStartLengthArray([2404,1]));
export { Beng as Bengali };
export const Bopo = Object.freeze(CharSet.fromStartLengthArray([12289,2,12296,9,12307,12,12330,3,12336,0,12343,0,12350,1,12539,0,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4]));
export { Bopo as Bopomofo };
export const Buhd = Object.freeze(CharSet.fromStartLengthArray([5941,1]));
export { Buhd as Buhid };
export const Cprt = Object.freeze(CharSet.fromStartLengthArray([65792,2,65799,44,65847,8]));
export { Cprt as Cypriot };
export const Cyrl = Object.freeze(CharSet.fromStartLengthArray([1157,1]));
export { Cyrl as Cyrillic };
export const Deva = Object.freeze(CharSet.fromStartLengthArray([2385,1,2404,1,7376,2,7380,20,7405,0,7410,2,43056,9]));
export { Deva as Devanagari };
export const Geor = Object.freeze(CharSet.fromStartLengthArray([1417,0]));
export { Geor as Georgian };
export const Grek = Object.freeze(CharSet.fromStartLengthArray([834,0,837,0,7616,1]));
export { Grek as Greek };
export const Gujr = Object.freeze(CharSet.fromStartLengthArray([43056,9]));
export { Gujr as Gujarati };
export const Guru = Object.freeze(CharSet.fromStartLengthArray([2404,1,43056,9]));
export { Guru as Gurmukhi };
export const Hang = Object.freeze(CharSet.fromStartLengthArray([12289,2,12296,9,12307,12,12336,0,12343,0,12350,1,12539,0,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4]));
export { Hang as Hangul };
export const Hani = Object.freeze(CharSet.fromStartLengthArray([12289,2,12294,0,12296,9,12307,12,12330,3,12336,0,12343,0,12348,3,12539,0,12688,15,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4]));
export { Hani as Han };
export const Hano = Object.freeze(CharSet.fromStartLengthArray([5941,1]));
export { Hano as Hanunoo };
export const Hira = Object.freeze(CharSet.fromStartLengthArray([12289,2,12294,0,12296,9,12307,12,12336,5,12343,0,12348,3,12441,3,12448,0,12539,1,12688,15,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4,65392,0,65438,1]));
export { Hira as Hiragana };
export const Kana = Object.freeze(CharSet.fromStartLengthArray([12289,2,12294,0,12296,9,12307,12,12336,5,12343,0,12348,3,12441,3,12448,0,12539,1,12688,15,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4,65392,0,65438,1]));
export { Kana as Katakana };
export const Kthi = Object.freeze(CharSet.fromStartLengthArray([43056,9]));
export { Kthi as Kaithi };
export const Latn = Object.freeze(CharSet.fromStartLengthArray([867,12,1157,1,2385,1]));
export { Latn as Latin };
export const Linb = Object.freeze(CharSet.fromStartLengthArray([65792,2,65799,44,65847,8]));
export { Linb as Linear_B };
export const Mand = Object.freeze(CharSet.fromStartLengthArray([1600,0]));
export { Mand as Mandaic };
export const Mong = Object.freeze(CharSet.fromStartLengthArray([6146,1,6149,0]));
export { Mong as Mongolian };
export const Orya = Object.freeze(CharSet.fromStartLengthArray([2404,1]));
export { Orya as Oriya };
export const Phag = Object.freeze(CharSet.fromStartLengthArray([6146,1,6149,0]));
export { Phag as Phags_Pa };
export const Syrc = Object.freeze(CharSet.fromStartLengthArray([1548,0,1563,0,1567,0,1600,0,1611,10,1648,0]));
export { Syrc as Syriac };
export const Tagb = Object.freeze(CharSet.fromStartLengthArray([5941,1]));
export { Tagb as Tagbanwa };
export const Takr = Object.freeze(CharSet.fromStartLengthArray([2404,1,43056,9]));
export { Takr as Takri };
export const Tglg = Object.freeze(CharSet.fromStartLengthArray([5941,1]));
export { Tglg as Tagalog };
export const Thaa = Object.freeze(CharSet.fromStartLengthArray([1548,0,1563,0,1567,0,1632,9,65010,0,65021,0]));
export { Thaa as Thaana };
export const Yiii = Object.freeze(CharSet.fromStartLengthArray([12289,1,12296,9,12308,7,12539,0,65377,4]));
export { Yiii as Yi };
export default function (value: string): ReadonlyCharSet | undefined {
    switch (value) {
        case "Arab":
        case "Arabic":
            return Arab;
        case "Armn":
        case "Armenian":
            return Armn;
        case "Beng":
        case "Bengali":
            return Beng;
        case "Bopo":
        case "Bopomofo":
            return Bopo;
        case "Buhd":
        case "Buhid":
            return Buhd;
        case "Cprt":
        case "Cypriot":
            return Cprt;
        case "Cyrl":
        case "Cyrillic":
            return Cyrl;
        case "Deva":
        case "Devanagari":
            return Deva;
        case "Geor":
        case "Georgian":
            return Geor;
        case "Grek":
        case "Greek":
            return Grek;
        case "Gujr":
        case "Gujarati":
            return Gujr;
        case "Guru":
        case "Gurmukhi":
            return Guru;
        case "Hang":
        case "Hangul":
            return Hang;
        case "Hani":
        case "Han":
            return Hani;
        case "Hano":
        case "Hanunoo":
            return Hano;
        case "Hira":
        case "Hiragana":
            return Hira;
        case "Kana":
        case "Katakana":
            return Kana;
        case "Kthi":
        case "Kaithi":
            return Kthi;
        case "Latn":
        case "Latin":
            return Latn;
        case "Linb":
        case "Linear_B":
            return Linb;
        case "Mand":
        case "Mandaic":
            return Mand;
        case "Mong":
        case "Mongolian":
            return Mong;
        case "Orya":
        case "Oriya":
            return Orya;
        case "Phag":
        case "Phags_Pa":
            return Phag;
        case "Syrc":
        case "Syriac":
            return Syrc;
        case "Tagb":
        case "Tagbanwa":
            return Tagb;
        case "Takr":
        case "Takri":
            return Takr;
        case "Tglg":
        case "Tagalog":
            return Tglg;
        case "Thaa":
        case "Thaana":
            return Thaa;
        case "Yiii":
        case "Yi":
            return Yiii;
    }
    return undefined;
}
