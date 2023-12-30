export const regexCheckRenderInput = /(\[\])/g; // []
export const regexCheckRenderInteger =
  /(\#\_\(\d*\D*\W*\w*\d*\D*\d*\D*\W*\w*\d*\D*\)\-\_\#)/g; // #_(abc...)-_#
export const regexCheckRenderIntegerValue =
  /(\(\d*\D*\W*\w*\d*\D*\d*\D*\W*\w*\d*\D*\)\-)/g; // (abc...)-

export const regexStartBlock = /(\#\_)/g; // #_
export const regexEndBlock = /(\_\#)/g; // _#
export const regexCheckBlock = /[#_][_#]/g; // #_ or _#
export const regexCheckInput = /(\#\_\[\]\_\#)/g; // #_[]_#
export const regexCheckDropbox = /(#_DR:)/g; // #_DR:
export const regexCheckImage = /.(gif_#|jpeg_#|png_#|jpg_#|bmp_#)/i; // .gif or .jpeg
export const regexCheckAudio = /.(mp3_#)/i;
export const regexCheckVideo = /.(mp4_#)/i;
export const FractionAndMixedNumbers =
  /(<|>|=|\+|(\#\_\[\]\/\d+\_\#)|(\#\_\d+\/\[\]\_\#)|(\#\_\[\]\/\[\]\_\#)|(\#\_\d+\/\d+\_\#)|(\#\_\w+\/\w+\_\#)|(\#\_(\w+|\[\]) (\w+|\[\])\/(\w+|\[\])\_\#))/g;
export const regexCheckFrac = /(\#\_\d+\/\d+\_\#)/g; // #_1/1_#
export const regexCheckFrac3 = /(\#\_(\w+|\[\]) (\w+|\[\])\/(\w+|\[\])\_\#)/g; // #_a a/a_# or #_1 2/3_#
export const regexCheckFracAny = /(\#\_\w+\/\w+\_\#)/g; // #_abc/abc_# or #_134/123_#
export const regexCheckFracInput = /(\#\_\[\]\/\[\]\_\#)/g; // #_[]/[]_#
export const regexCheckFracInputTop = /(\#\_\[\]\/\d+\_\#)/g; // #_[]/1_# ... #_[]/123456_# ...
export const regexCheckFracInputBottom = /(\#\_\d+\/\[\]\_\#)/g; // #_1/[]_# ... #_1234/[]_# ...
export const regexCheckInputNoneblockSpace = /(\[\] )/g; // []
export const regexCheckInterger =
  /(\#\_\((\d*\D*\W*\w*\d*\D*\d*\D*\W*\w*\d*\D*)\)\-\_\#)/g; // #_(abc...)-_#
export const regexCheckIntegerFail = /(\#\_\((\d*\D*\W*\w*\d*\D*)\)\_\#)/g; // #_(abc...)_#
export const regexCheckIndexNumber = /\#\_(\m\^\d+)\_\#/g; // #_m^1_# ..
export const regexCheckIndexNumber2 = /\#\_(\m\^2)\_\#/g; // #_m^3_#
export const regexCheckIndexNumber3 = /\#\_(\m\^3)\_\#/g; // #_m^3_#
export const regexCheckIndexKm2 = /(\#\_(km\^2)\_\#\_\#)|(\#\_(km\^2)\_\#)/g; // #_km^2_#
export const regexCheckIndexCm2 = /(\#\_(cm\^2)\_\#\_\#)|(\#\_(cm\^2)\_\#)/g; // #_cm^2_#
export const regexCheckIndexDm2 = /(\#\_(dm\^2)\_\#\_\#)|(\#\_(dm\^2)\_\#)/g; // #_dm^2_#
export const regexCheckIndexHm2 = /(\#\_(hm\^2)\_\#\_\#)|(\#\_(hm\^2)\_\#)/g; // #_hm^2_#
export const regexCheckIndexDam2 = /(\#\_(dam\^2)\_\#\_\#)|(\#\_(dam\^2)\_\#)/g; // #_hm^2_#
export const regexCheckIndexMm2 = /(\#\_(mm\^2)\_\#\_\#)|(\#\_(mm\^2)\_\#)/g; // #_mm^2_#
export const regexCheckIndexKm3 = /(\#\_(km\^3)\_\#\_\#)|(\#\_(km\^3)\_\#)/g; // #_km^3_#
export const regexCheckIndexCm3 = /(\#\_(cm\^3)\_\#\_\#)|(\#\_(cm\^3)\_\#)/g; // #_cm^3_#
export const regexCheckIndexDm3 = /(\#\_(dm\^3)\_\#\_\#)|(\#\_(dm\^3)\_\#)/g; // #_dm^3_#
export const regexCheckIndexHm3 = /(\#\_(hm\^3)\_\#\_\#)|(\#\_(hm\^3)\_\#)/g; // #_hm^3_#
export const regexCheckIndexDam3 = /(\#\_(dam\^3)\_\#\_\#)|(\#\_(dam\^3)\_\#)/g; // #_hm^3_#
export const regexCheckIndexMm3 = /(\#\_(mm\^3)\_\#\_\#)|(\#\_(mm\^3)\_\#)/g; // #_mm^3_#
export const regexCheckThreeDots = /(\#\_\(…\)\_\#)|(\#\_\(...\)\_\#)/g; // #_(…)_# | #_(...)_#
export const regexCheckImageUrl = /(http[s]*:\/\/)(.*?)\.(jpg|jpeg|png|gif)/i; // https://picture.com/images.png
export const regexCheckAudioUrl = /(http[s]*:\/\/)(.*?)\.(mp3)/i;
export const regexCheckVideoUrl = /(http[s]*:\/\/)(.*?)\.(mp4)/i;
export const regexCheckSubTag = /(\#\_[a-zA-Z]{0,1}\_[^\#\_]{0,}\_\#)/g; // #_V_xuôi dòng_#
export const regexCheckFracSubTagFull =
  /(\#\_[a-zA-Z]{0,1}\_[^\#\_]{0,}\_\#)\/(\#\_[a-zA-Z]{0,1}\_[^\#\_]{0,}\_\#)/g; // #_V_xuôi dòng_#/#_V_ngược dòng_#
export const regexCheckFracSubTag =
  /(\#\_[a-zA-Z]{0,1}\_[^\#\_]{0,})\/([a-zA-Z]{0,1}\_[^\#\_]{0,}\_\#)/g; // #_V_xuôi dòng/V_ngược dòng_#
export const regexCheckBlockFS1 = /(\_\#\/\#\_)/g; // _#/#_
// export const regexCheckFracSubTagRoundBrackets = /(\#\_\(\#\_[a-zA-Z]{0,1}\_[^\#\_]{0,}\_\#\)\/\(\#\_[a-zA-Z]{0,1}\_[^\#\_]{0,}\_\#\)\_\#)/g // #_(#_V_xuôi dòng_#)/(#_V_ngược dòng_#)_#
export const regexCheckBlockRB1 = /(\#\_\(|\)\_\#)/g; // #_( or )_#
export const regexCheckBlockRB2 = /(\_\#\)\/\(\#\_)/g; // _#)/(#_
export const regexCheckBreakLine = /(\n|\\n|\r\n|\\r\\n)/g; // \n or \r\n
export const regexCheckUnderHyphen = /([\w]\_[\w])/g; // D_A
export const regexCheckFracAdvan1 = /((\#|\$)\_\(.*?\)\/\(.*?\)\)\_(\#|\$))/g; // #_(a+#_0/c_#)/((#_a/c_#+#_c/d_#)+(#_a/c_#+#_c/d_#))_#
export const regexCheckFracAdvan2 = /((\#|\$)\_\(\(.*?\)\/\(.*?\)\_(\#|\$))/g; // #_((#_a/c_#+#_c/d_#)+(#_a/c_#+#_c/d_#))/(a+#_0/c_#)_#
export const regexCheckFracAdvan3 = /((\#|\$)\_\(.*?(\)\/\().*?\)\_(\#|\$))/g; // #_(#_S_ABC_#)/(#_S_ABD_# + #_S_BCD_#)_#  or  #_(#_a/c_#+#_c/d_#)/(#_a/c_#+#_c/d_#)_#
export const regexCheckSquareBrackets = /\[\]/g; // []
export const regexCheckFirstAndLastCharacter = /^(.)|(.)$/g; // check first and last character eg: ((#_a/c_#+#_c/d_#) + (#_a/c_#+#_c/d_#)) => (#_a/c_#+#_c/d_#) + (#_a/c_#+#_c/d_#)
