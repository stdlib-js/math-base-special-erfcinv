// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";function i(i){var a,m,d,o;return e(i)?NaN:0===i?n:2===i?r:1===i?0:i>2||i<0?NaN:(i>1?(a=-1,m=2-i):(a=1,m=i),(i=1-m)<=.5?(d=i*(i+10),o=function(e){var t,s;return 0===e?-.0005087819496582806:((e<0?-e:e)<=1?(t=e*(e*(.03348066254097446+e*(e*(e*(.02198786811111689+e*(.008226878746769157+e*(e*(0+0*e)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,s=1+e*(e*(e*(1.5622155839842302+e*(.662328840472003+e*(e*(e*(.07952836873415717+e*(.0008862163904564247*e-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(t=0+(e=1/e)*(0+e*(e*(.008226878746769157+e*(.02198786811111689+e*(e*(e*(.03348066254097446+e*(-.0005087819496582806*e-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),s=.0008862163904564247+e*(e*(.07952836873415717+e*(e*(e*(.662328840472003+e*(1.5622155839842302+e*(e*(1*e-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),t/s)}(i),a*(.08913147449493408*d+d*o)):m>=.25?(d=t(-2*s(m)),o=function(e){var t,s;return 0===e?-.20243350835593876:((e<0?-e:e)<=1?(t=e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(e*(e*(17.445385985570866+e*(21.12946554483405+-3.6719225470772936*e))-44.6382324441787)-18.851064805871424))))-.20243350835593876,s=1+e*(6.242641248542475+e*(3.971343795334387+e*(e*(e*(48.560921310873994+e*(10.826866735546016+e*(1.7211476576120028*e-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(t=(e=1/e)*(21.12946554483405+e*(17.445385985570866+e*(e*(e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+-.20243350835593876*e)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,s=1.7211476576120028+e*(e*(10.826866735546016+e*(48.560921310873994+e*(e*(e*(3.971343795334387+e*(6.242641248542475+1*e))-28.66081804998)-20.14326346804852)))-22.643693341313973)),t/s)}(m-=.25),a*(d/(2.249481201171875+o))):(m=t(-s(m)))<3?(o=function(e){var t,s;return 0===e?-.1311027816799519:((e<0?-e:e)<=1?(t=e*(e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(e*(2.8522533178221704e-8+-6.81149956853777e-10*e)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,s=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+0*e)))))))))):(t=(e=1/e)*(2.8522533178221704e-8+e*(e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.1311027816799519*e-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,s=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+1*e)))))))))),t/s)}(m-1.125),a*(.807220458984375*m+o*m)):m<6?(o=function(e){var t,s;return 0===e?-.0350353787183178:((e<0?-e:e)<=1?(t=e*(e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(26633922742578204e-28*e-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,s=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+0*e)))))))):(t=26633922742578204e-28+(e=1/e)*(e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0350353787183178*e-.0022242652921344794))))))-2.304047769118826e-10),s=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+1*e)))))))),t/s)}(m-3),a*(.9399557113647461*m+o*m)):(o=function(e){var t,s;return 0===e?-.016743100507663373:((e<0?-e:e)<=1?(t=e*(e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(4.4969678992770644e-7+e*(4.625961635228786e-9+e*(9905570997331033e-32*e-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,s=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(2.82243172016108e-7+e*(0+0*e)))))))):(t=9905570997331033e-32+(e=1/e)*(e*(4.625961635228786e-9+e*(4.4969678992770644e-7+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.016743100507663373*e-.0011295143874558028))))))-2811287356288318e-29),s=0+e*(0+e*(2.82243172016108e-7+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+1*e)))))))),t/s)}(m-6),a*(.9836282730102539*m+o*m)))}export{i as default};
//# sourceMappingURL=index.mjs.map
