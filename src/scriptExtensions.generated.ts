// Unicode 6.2.0 Script_Extensions
// Derived from: http://www.unicode.org/Public/6.2.0/ucd/ScriptExtensions.txt
import { CharSet } from "chardata-charset";

export const Arabic = new CharSet([1548,0,1563,0,1567,0,1600,0,1611,10,1632,9,1648,0,65010,0,65021,0]);
export { Arabic as Arab };
export const Armenian = new CharSet([1417,0]);
export { Armenian as Armn };
export const Bengali = new CharSet([2404,1]);
export { Bengali as Beng };
export const Bopomofo = new CharSet([12289,2,12296,9,12307,12,12330,3,12336,0,12343,0,12350,1,12539,0,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4]);
export { Bopomofo as Bopo };
export const Buhid = new CharSet([5941,1]);
export { Buhid as Buhd };
export const Cypriot = new CharSet([65792,2,65799,44,65847,8]);
export { Cypriot as Cprt };
export const Cyrillic = new CharSet([1157,1]);
export { Cyrillic as Cyrl };
export const Devanagari = new CharSet([2385,1,2404,1,7376,2,7380,20,7405,0,7410,2,43056,9]);
export { Devanagari as Deva };
export const Georgian = new CharSet([1417,0]);
export { Georgian as Geor };
export const Greek = new CharSet([834,0,837,0,7616,1]);
export { Greek as Grek };
export const Gujarati = new CharSet([43056,9]);
export { Gujarati as Gujr };
export const Gurmukhi = new CharSet([2404,1,43056,9]);
export { Gurmukhi as Guru };
export const Hangul = new CharSet([12289,2,12296,9,12307,12,12336,0,12343,0,12350,1,12539,0,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4]);
export { Hangul as Hang };
export const Han = new CharSet([12289,2,12294,0,12296,9,12307,12,12330,3,12336,0,12343,0,12348,3,12539,0,12688,15,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4]);
export { Han as Hani };
export const Hanunoo = new CharSet([5941,1]);
export { Hanunoo as Hano };
export const Hiragana = new CharSet([12289,2,12294,0,12296,9,12307,12,12336,5,12343,0,12348,3,12441,3,12448,0,12539,1,12688,15,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4,65392,0,65438,1]);
export { Hiragana as Hira };
export const Katakana = new CharSet([12289,2,12294,0,12296,9,12307,12,12336,5,12343,0,12348,3,12441,3,12448,0,12539,1,12688,15,12736,35,12832,35,12928,48,12992,11,13144,24,13179,4,13280,30,65093,1,65377,4,65392,0,65438,1]);
export { Katakana as Kana };
export const Kaithi = new CharSet([43056,9]);
export { Kaithi as Kthi };
export const Latin = new CharSet([867,12,1157,1,2385,1]);
export { Latin as Latn };
export const Linear_B = new CharSet([65792,2,65799,44,65847,8]);
export { Linear_B as Linb };
export const Mandaic = new CharSet([1600,0]);
export { Mandaic as Mand };
export const Mongolian = new CharSet([6146,1,6149,0]);
export { Mongolian as Mong };
export const Oriya = new CharSet([2404,1]);
export { Oriya as Orya };
export const Phags_Pa = new CharSet([6146,1,6149,0]);
export { Phags_Pa as Phag };
export const Syriac = new CharSet([1548,0,1563,0,1567,0,1600,0,1611,10,1648,0]);
export { Syriac as Syrc };
export const Tagbanwa = new CharSet([5941,1]);
export { Tagbanwa as Tagb };
export const Takri = new CharSet([2404,1,43056,9]);
export { Takri as Takr };
export const Tagalog = new CharSet([5941,1]);
export { Tagalog as Tglg };
export const Thaana = new CharSet([1548,0,1563,0,1567,0,1632,9,65010,0,65021,0]);
export { Thaana as Thaa };
export const Yi = new CharSet([12289,1,12296,9,12308,7,12539,0,65377,4]);
export { Yi as Yiii };
export default function (value: string): CharSet | undefined {
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
