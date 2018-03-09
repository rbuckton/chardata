// Unicode 6.2.0 PropList
// Derived from: http://www.unicode.org/Public/6.2.0/ucd/PropList.txt
import { CharSet, ReadonlyCharSet } from "chardata-charset";

export const ASCII_Hex_Digit = Object.freeze(CharSet.fromStartLengthArray([48,9,65,5,97,5]));
export { ASCII_Hex_Digit as AHex };
export const Bidi_Control = Object.freeze(CharSet.fromStartLengthArray([8206,1,8234,4]));
export { Bidi_Control as Bidi_C };
export const Dash = Object.freeze(CharSet.fromStartLengthArray([45,0,1418,0,1470,0,5120,0,6150,0,8208,5,8275,0,8315,0,8331,0,8722,0,11799,0,11802,0,11834,1,12316,0,12336,0,12448,0,65073,1,65112,0,65123,0,65293,0]));
export const Deprecated = Object.freeze(CharSet.fromStartLengthArray([329,0,1651,0,3959,0,3961,0,6051,1,8298,5,9001,1,917505,0,917536,95]));
export { Deprecated as Dep };
export const Diacritic = Object.freeze(CharSet.fromStartLengthArray([94,0,96,0,168,0,175,0,180,0,183,1,688,158,848,7,861,5,884,1,890,0,900,1,1155,4,1369,0,1425,16,1443,26,1471,0,1473,1,1476,0,1611,7,1623,1,1759,1,1765,1,1770,2,1840,26,1958,10,2027,10,2072,1,2276,26,2364,0,2381,0,2385,3,2417,0,2492,0,2509,0,2620,0,2637,0,2748,0,2765,0,2876,0,2893,0,3021,0,3149,0,3260,0,3277,0,3405,0,3530,0,3655,5,3662,0,3784,4,3864,1,3893,0,3895,0,3897,0,3902,1,3970,2,3974,1,4038,0,4151,0,4153,1,4231,6,4239,0,4250,1,6089,10,6109,0,6457,2,6773,7,6783,0,6964,0,6980,0,7019,8,7082,1,7222,1,7288,5,7376,24,7405,0,7412,0,7468,62,7620,11,7677,2,8125,0,8127,2,8141,2,8157,2,8173,2,8189,1,11503,2,11823,0,12330,5,12441,3,12540,0,42607,0,42620,1,42623,0,42736,1,42775,10,42888,0,43000,1,43204,0,43232,17,43307,3,43347,0,43443,0,43456,0,43643,0,43711,3,43766,0,44012,1,64286,0,65056,6,65342,0,65344,0,65392,0,65438,1,65507,0,69817,1,69939,1,70080,0,71350,1,94095,16,119143,2,119149,5,119163,7,119173,6,119210,3]));
export { Diacritic as Dia };
export const Extender = Object.freeze(CharSet.fromStartLengthArray([183,0,720,1,1600,0,2042,0,3654,0,3782,0,6154,0,6211,0,6823,0,7222,0,7291,0,12293,0,12337,4,12445,1,12540,2,40981,0,42508,0,43471,0,43632,0,43741,0,43763,1,65392,0]));
export { Extender as Ext };
export const Hex_Digit = Object.freeze(CharSet.fromStartLengthArray([48,9,65,5,97,5,65296,9,65313,5,65345,5]));
export { Hex_Digit as Hex };
export const Hyphen = Object.freeze(CharSet.fromStartLengthArray([45,0,173,0,1418,0,6150,0,8208,1,11799,0,12539,0,65123,0,65293,0,65381,0]));
export const IDS_Binary_Operator = Object.freeze(CharSet.fromStartLengthArray([12272,1,12276,7]));
export { IDS_Binary_Operator as IDSB };
export const IDS_Trinary_Operator = Object.freeze(CharSet.fromStartLengthArray([12274,1]));
export { IDS_Trinary_Operator as IDST };
export const Ideographic = Object.freeze(CharSet.fromStartLengthArray([12294,1,12321,8,12344,2,13312,6581,19968,20940,63744,365,64112,105,131072,42710,173824,4148,177984,221,194560,541]));
export { Ideographic as Ideo };
export const Join_Control = Object.freeze(CharSet.fromStartLengthArray([8204,1]));
export { Join_Control as Join_C };
export const Logical_Order_Exception = Object.freeze(CharSet.fromStartLengthArray([3648,4,3776,4,43701,1,43705,0,43707,1]));
export { Logical_Order_Exception as LOE };
export const Noncharacter_Code_Point = Object.freeze(CharSet.fromStartLengthArray([64976,31,65534,1,131070,1,196606,1,262142,1,327678,1,393214,1,458750,1,524286,1,589822,1,655358,1,720894,1,786430,1,851966,1,917502,1,983038,1,1048574,1,1114110,1]));
export { Noncharacter_Code_Point as NChar };
export const Other_Alphabetic = Object.freeze(CharSet.fromStartLengthArray([837,0,1456,13,1471,0,1473,1,1476,1,1479,0,1552,10,1611,12,1625,6,1648,0,1750,6,1761,3,1767,1,1773,0,1809,0,1840,15,1958,10,2070,1,2075,8,2085,2,2089,3,2276,5,2288,14,2304,3,2362,1,2366,14,2382,1,2389,2,2402,1,2433,2,2494,6,2503,1,2507,1,2519,0,2530,1,2561,2,2622,4,2631,1,2635,1,2641,0,2672,1,2677,0,2689,2,2750,7,2759,2,2763,1,2786,1,2817,2,2878,6,2887,1,2891,1,2902,1,2914,1,2946,0,3006,4,3014,2,3018,2,3031,0,3073,2,3134,6,3142,2,3146,2,3157,1,3170,1,3202,1,3262,6,3270,2,3274,2,3285,1,3298,1,3330,1,3390,6,3398,2,3402,2,3415,0,3426,1,3458,1,3535,5,3542,0,3544,7,3570,1,3633,0,3636,6,3661,0,3761,0,3764,5,3771,1,3789,0,3953,16,3981,10,3993,35,4139,11,4152,0,4155,3,4182,3,4190,2,4194,0,4199,1,4209,3,4226,4,4252,1,4959,0,5906,1,5938,1,5970,1,6002,1,6070,18,6313,0,6432,11,6448,8,6576,16,6600,1,6679,4,6741,9,6753,19,6912,4,6965,14,7040,2,7073,8,7084,1,7143,10,7204,17,7410,1,9398,51,11744,31,42612,7,42655,0,43043,4,43136,1,43188,15,43302,4,43335,11,43392,3,43444,11,43561,13,43587,0,43596,1,43696,0,43698,2,43703,1,43710,0,43755,4,43765,0,44003,7,64286,0,68097,2,68101,1,68108,3,69632,2,69688,13,69762,0,69808,8,69888,2,69927,11,70016,2,70067,12,71339,10,94033,45]));
export { Other_Alphabetic as OAlpha };
export const Other_Default_Ignorable_Code_Point = Object.freeze(CharSet.fromStartLengthArray([847,0,4447,1,6068,1,8293,4,12644,0,65440,0,65520,8,917504,0,917506,29,917632,127,918000,3599]));
export { Other_Default_Ignorable_Code_Point as ODI };
export const Other_Grapheme_Extend = Object.freeze(CharSet.fromStartLengthArray([2494,0,2519,0,2878,0,2903,0,3006,0,3031,0,3266,0,3285,1,3390,0,3415,0,3535,0,3551,0,8204,1,12334,1,65438,1,119141,0,119150,4]));
export { Other_Grapheme_Extend as OGr_Ext };
export const Other_ID_Continue = Object.freeze(CharSet.fromStartLengthArray([183,0,903,0,4969,8,6618,0]));
export { Other_ID_Continue as OIDC };
export const Other_ID_Start = Object.freeze(CharSet.fromStartLengthArray([8472,0,8494,0,12443,1]));
export { Other_ID_Start as OIDS };
export const Other_Lowercase = Object.freeze(CharSet.fromStartLengthArray([170,0,186,0,688,8,704,1,736,4,837,0,890,0,7468,62,7544,0,7579,36,8305,0,8319,0,8336,12,8560,15,9424,25,11388,1,42864,0,43000,1]));
export { Other_Lowercase as OLower };
export const Other_Math = Object.freeze(CharSet.fromStartLengthArray([94,0,976,2,981,0,1008,1,1012,1,8214,0,8242,2,8256,0,8289,3,8317,1,8333,1,8400,12,8417,0,8421,1,8427,4,8450,0,8455,0,8458,9,8469,0,8473,4,8484,0,8488,1,8492,1,8495,2,8499,5,8508,3,8517,4,8597,4,8604,3,8609,1,8612,1,8615,0,8617,4,8624,1,8630,1,8636,17,8656,1,8659,0,8661,6,8669,0,8676,1,9140,1,9143,0,9168,0,9186,0,9632,1,9646,8,9660,4,9670,1,9674,1,9679,4,9698,0,9700,0,9703,5,9733,1,9792,0,9794,0,9824,3,9837,1,10181,1,10214,9,10627,21,10712,3,10748,1,65121,0,65123,0,65128,0,65340,0,65342,0,119808,84,119894,70,119966,1,119970,0,119973,1,119977,3,119982,11,119995,0,119997,6,120005,64,120071,3,120077,7,120086,6,120094,27,120123,3,120128,4,120134,0,120138,6,120146,339,120488,24,120514,24,120540,30,120572,24,120598,30,120630,24,120656,30,120688,24,120714,30,120746,24,120772,7,120782,49,126464,3,126469,26,126497,1,126500,0,126503,0,126505,9,126516,3,126521,0,126523,0,126530,0,126535,0,126537,0,126539,0,126541,2,126545,1,126548,0,126551,0,126553,0,126555,0,126557,0,126559,0,126561,1,126564,0,126567,3,126572,6,126580,3,126585,3,126590,0,126592,9,126603,16,126625,2,126629,4,126635,16]));
export { Other_Math as OMath };
export const Other_Uppercase = Object.freeze(CharSet.fromStartLengthArray([8544,15,9398,25]));
export { Other_Uppercase as OUpper };
export const Pattern_Syntax = Object.freeze(CharSet.fromStartLengthArray([33,14,58,6,91,3,96,0,123,3,161,6,169,0,171,1,174,0,176,1,182,0,187,0,191,0,215,0,247,0,8208,23,8240,14,8257,18,8277,9,8592,719,9472,629,10132,1131,11776,127,12289,2,12296,24,12336,0,64830,1,65093,1]));
export { Pattern_Syntax as Pat_Syn };
export const Pattern_White_Space = Object.freeze(CharSet.fromStartLengthArray([9,4,32,0,133,0,8206,1,8232,1]));
export { Pattern_White_Space as Pat_WS };
export const Quotation_Mark = Object.freeze(CharSet.fromStartLengthArray([34,0,39,0,171,0,187,0,8216,7,8249,1,12300,3,12317,2,65089,3,65282,0,65287,0,65378,1]));
export { Quotation_Mark as QMark };
export const Radical = Object.freeze(CharSet.fromStartLengthArray([11904,25,11931,88,12032,213]));
export const STerm = Object.freeze(CharSet.fromStartLengthArray([33,0,46,0,63,0,1372,0,1374,0,1417,0,1567,0,1748,0,1792,2,2041,0,2404,1,4170,1,4962,0,4967,1,5742,0,5941,1,6147,0,6153,0,6468,1,6824,3,7002,1,7006,1,7227,1,7294,1,8252,1,8263,2,11822,0,12290,0,42239,0,42510,1,42739,0,42743,0,43126,1,43214,1,43311,0,43464,1,43613,2,43760,1,44011,0,65106,0,65110,1,65281,0,65294,0,65311,0,65377,0,68182,1,69703,1,69822,3,69953,2,70085,1]));
export const Soft_Dotted = Object.freeze(CharSet.fromStartLengthArray([105,1,303,0,585,0,616,0,669,0,690,0,1011,0,1110,0,1112,0,7522,0,7574,0,7588,0,7592,0,7725,0,7883,0,8305,0,8520,1,11388,0,119842,1,119894,1,119946,1,119998,1,120050,1,120102,1,120154,1,120206,1,120258,1,120310,1,120362,1,120414,1,120466,1]));
export { Soft_Dotted as SD };
export const Terminal_Punctuation = Object.freeze(CharSet.fromStartLengthArray([33,0,44,0,46,0,58,1,63,0,894,0,903,0,1417,0,1475,0,1548,0,1563,0,1567,0,1748,0,1792,10,1804,0,2040,1,2096,14,2142,0,2404,1,3674,1,3848,0,3853,5,4170,1,4961,7,5741,1,5867,2,6100,2,6106,0,6146,3,6152,1,6468,1,6824,3,7002,1,7005,2,7227,4,7294,1,8252,1,8263,2,11822,0,12289,1,42238,1,42509,2,42739,4,43126,1,43214,1,43311,0,43463,2,43613,2,43743,0,43760,1,44011,0,65104,2,65108,3,65281,0,65292,0,65294,0,65306,1,65311,0,65377,0,65380,0,66463,0,66512,0,67671,0,67871,0,68410,5,69703,6,69822,3,69953,2,70085,1,74864,3]));
export { Terminal_Punctuation as Term };
export const Unified_Ideograph = Object.freeze(CharSet.fromStartLengthArray([13312,6581,19968,20940,64014,1,64017,0,64019,1,64031,0,64033,0,64035,1,64039,2,131072,42710,173824,4148,177984,221]));
export { Unified_Ideograph as UIdeo };
export const Variation_Selector = Object.freeze(CharSet.fromStartLengthArray([6155,2,65024,15,917760,239]));
export { Variation_Selector as VS };
export const White_Space = Object.freeze(CharSet.fromStartLengthArray([9,4,32,0,133,0,160,0,5760,0,6158,0,8192,10,8232,1,8239,0,8287,0,12288,0]));
export { White_Space as WSpace, White_Space as space };
export default function (value: string): ReadonlyCharSet | undefined {
    switch (value) {
        case "AHex":
        case "ASCII_Hex_Digit":
            return ASCII_Hex_Digit;
        case "Bidi_C":
        case "Bidi_Control":
            return Bidi_Control;
        case "Dash":
        case "Dash":
            return Dash;
        case "Dep":
        case "Deprecated":
            return Deprecated;
        case "Dia":
        case "Diacritic":
            return Diacritic;
        case "Ext":
        case "Extender":
            return Extender;
        case "Hex":
        case "Hex_Digit":
            return Hex_Digit;
        case "Hyphen":
        case "Hyphen":
            return Hyphen;
        case "IDSB":
        case "IDS_Binary_Operator":
            return IDS_Binary_Operator;
        case "IDST":
        case "IDS_Trinary_Operator":
            return IDS_Trinary_Operator;
        case "Ideo":
        case "Ideographic":
            return Ideographic;
        case "Join_C":
        case "Join_Control":
            return Join_Control;
        case "LOE":
        case "Logical_Order_Exception":
            return Logical_Order_Exception;
        case "NChar":
        case "Noncharacter_Code_Point":
            return Noncharacter_Code_Point;
        case "OAlpha":
        case "Other_Alphabetic":
            return Other_Alphabetic;
        case "ODI":
        case "Other_Default_Ignorable_Code_Point":
            return Other_Default_Ignorable_Code_Point;
        case "OGr_Ext":
        case "Other_Grapheme_Extend":
            return Other_Grapheme_Extend;
        case "OIDC":
        case "Other_ID_Continue":
            return Other_ID_Continue;
        case "OIDS":
        case "Other_ID_Start":
            return Other_ID_Start;
        case "OLower":
        case "Other_Lowercase":
            return Other_Lowercase;
        case "OMath":
        case "Other_Math":
            return Other_Math;
        case "OUpper":
        case "Other_Uppercase":
            return Other_Uppercase;
        case "Pat_Syn":
        case "Pattern_Syntax":
            return Pattern_Syntax;
        case "Pat_WS":
        case "Pattern_White_Space":
            return Pattern_White_Space;
        case "QMark":
        case "Quotation_Mark":
            return Quotation_Mark;
        case "Radical":
        case "Radical":
            return Radical;
        case "STerm":
        case "STerm":
            return STerm;
        case "SD":
        case "Soft_Dotted":
            return Soft_Dotted;
        case "Term":
        case "Terminal_Punctuation":
            return Terminal_Punctuation;
        case "UIdeo":
        case "Unified_Ideograph":
            return Unified_Ideograph;
        case "VS":
        case "Variation_Selector":
            return Variation_Selector;
        case "WSpace":
        case "White_Space":
        case "space":
            return White_Space;
    }
    return undefined;
}
