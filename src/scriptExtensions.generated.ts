// Unicode 6.2.0 Script_Extensions
// Derived from: http://www.unicode.org/Public/6.2.0/ucd/ScriptExtensions.txt
import { CharSet, ReadonlyCharSet } from "chardata-charset";

export const Arabic = Object.freeze(CharSet.fromStartLengthArray([1548,0,1563,0,1567,0,1600,0,1611,10,1632,9,1648,0,65010,0,65021,0]));
export { Arabic as Arab };
export const Armenian = Object.freeze(CharSet.fromStartLengthArray([1417,0]));
export { Armenian as Armn };
export const Bengali = Object.freeze(CharSet.fromStartLengthArray([2404,1]));
export { Bengali as Beng };
export const Bopomofo = Object.freeze(CharSet.fromStartLengthArray([12289,2,12296,9,12307,8,12316,3,12330,3,12336,0,12343,0,12350,1,12539,0,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4]));
export { Bopomofo as Bopo };
export const Buhid = Object.freeze(CharSet.fromStartLengthArray([5941,1]));
export { Buhid as Buhd };
export const Cypriot = Object.freeze(CharSet.fromStartLengthArray([65792,2,65799,44,65847,8]));
export { Cypriot as Cprt };
export const Cyrillic = Object.freeze(CharSet.fromStartLengthArray([1157,1]));
export { Cyrillic as Cyrl };
export const Devanagari = Object.freeze(CharSet.fromStartLengthArray([2385,1,2404,1,7376,2,7380,20,7405,0,7410,2,43056,9]));
export { Devanagari as Deva };
export const Georgian = Object.freeze(CharSet.fromStartLengthArray([1417,0]));
export { Georgian as Geor };
export const Greek = Object.freeze(CharSet.fromStartLengthArray([834,0,837,0,7616,1]));
export { Greek as Grek };
export const Gujarati = Object.freeze(CharSet.fromStartLengthArray([43056,9]));
export { Gujarati as Gujr };
export const Gurmukhi = Object.freeze(CharSet.fromStartLengthArray([2404,1,43056,9]));
export { Gurmukhi as Guru };
export const Hangul = Object.freeze(CharSet.fromStartLengthArray([12289,2,12296,9,12307,8,12316,3,12336,0,12343,0,12350,1,12539,0,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4]));
export { Hangul as Hang };
export const Han = Object.freeze(CharSet.fromStartLengthArray([12289,2,12294,0,12296,9,12307,8,12316,3,12330,3,12336,0,12343,0,12348,3,12539,0,12688,15,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4]));
export { Han as Hani };
export const Hanunoo = Object.freeze(CharSet.fromStartLengthArray([5941,1]));
export { Hanunoo as Hano };
export const Hiragana = Object.freeze(CharSet.fromStartLengthArray([12289,2,12294,0,12296,9,12307,8,12316,3,12336,5,12343,0,12348,3,12441,3,12448,0,12539,1,12688,15,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4,65392,0,65438,1]));
export { Hiragana as Hira };
export const Katakana = Object.freeze(CharSet.fromStartLengthArray([12289,2,12294,0,12296,9,12307,8,12316,3,12336,5,12343,0,12348,3,12441,3,12448,0,12539,1,12688,15,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4,65392,0,65438,1]));
export { Katakana as Kana };
export const Kaithi = Object.freeze(CharSet.fromStartLengthArray([43056,9]));
export { Kaithi as Kthi };
export const Latin = Object.freeze(CharSet.fromStartLengthArray([867,12,1157,1,2385,1]));
export { Latin as Latn };
export const Linear_B = Object.freeze(CharSet.fromStartLengthArray([65792,2,65799,44,65847,8]));
export { Linear_B as Linb };
export const Mandaic = Object.freeze(CharSet.fromStartLengthArray([1600,0]));
export { Mandaic as Mand };
export const Mongolian = Object.freeze(CharSet.fromStartLengthArray([6146,1,6149,0]));
export { Mongolian as Mong };
export const Oriya = Object.freeze(CharSet.fromStartLengthArray([2404,1]));
export { Oriya as Orya };
export const Phags_Pa = Object.freeze(CharSet.fromStartLengthArray([6146,1,6149,0]));
export { Phags_Pa as Phag };
export const Syriac = Object.freeze(CharSet.fromStartLengthArray([1548,0,1563,0,1567,0,1600,0,1611,10,1648,0]));
export { Syriac as Syrc };
export const Tagbanwa = Object.freeze(CharSet.fromStartLengthArray([5941,1]));
export { Tagbanwa as Tagb };
export const Takri = Object.freeze(CharSet.fromStartLengthArray([2404,1,43056,9]));
export { Takri as Takr };
export const Tagalog = Object.freeze(CharSet.fromStartLengthArray([5941,1]));
export { Tagalog as Tglg };
export const Thaana = Object.freeze(CharSet.fromStartLengthArray([1548,0,1563,0,1567,0,1632,9,65010,0,65021,0]));
export { Thaana as Thaa };
export const Yi = Object.freeze(CharSet.fromStartLengthArray([12289,1,12296,9,12308,7,12539,0,65377,4]));
export { Yi as Yiii };
export default function (value: string): ReadonlyCharSet | undefined {
    switch (value) {
        case "Arab":
        case "Arabic":
            return Arabic;
        case "Armn":
        case "Armenian":
            return Armenian;
        case "Beng":
        case "Bengali":
            return Bengali;
        case "Bopo":
        case "Bopomofo":
            return Bopomofo;
        case "Buhd":
        case "Buhid":
            return Buhid;
        case "Cprt":
        case "Cypriot":
            return Cypriot;
        case "Cyrl":
        case "Cyrillic":
            return Cyrillic;
        case "Deva":
        case "Devanagari":
            return Devanagari;
        case "Geor":
        case "Georgian":
            return Georgian;
        case "Grek":
        case "Greek":
            return Greek;
        case "Gujr":
        case "Gujarati":
            return Gujarati;
        case "Guru":
        case "Gurmukhi":
            return Gurmukhi;
        case "Hang":
        case "Hangul":
            return Hangul;
        case "Hani":
        case "Han":
            return Han;
        case "Hano":
        case "Hanunoo":
            return Hanunoo;
        case "Hira":
        case "Hiragana":
            return Hiragana;
        case "Kana":
        case "Katakana":
            return Katakana;
        case "Kthi":
        case "Kaithi":
            return Kaithi;
        case "Latn":
        case "Latin":
            return Latin;
        case "Linb":
        case "Linear_B":
            return Linear_B;
        case "Mand":
        case "Mandaic":
            return Mandaic;
        case "Mong":
        case "Mongolian":
            return Mongolian;
        case "Orya":
        case "Oriya":
            return Oriya;
        case "Phag":
        case "Phags_Pa":
            return Phags_Pa;
        case "Syrc":
        case "Syriac":
            return Syriac;
        case "Tagb":
        case "Tagbanwa":
            return Tagbanwa;
        case "Takr":
        case "Takri":
            return Takri;
        case "Tglg":
        case "Tagalog":
            return Tagalog;
        case "Thaa":
        case "Thaana":
            return Thaana;
        case "Yiii":
        case "Yi":
            return Yi;
    }
    return undefined;
}
