// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r=Math.sqrt,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,i=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol:void 0,u="function"==typeof f?f.toStringTag:"",a=e&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,e,f,a;if(null==n)return o.call(n);r=n[u],a=u,t=null!=(f=n)&&i.call(f,a);try{n[u]=void 0}catch(t){return o.call(n)}return e=o.call(n),t?n[u]=r:delete n[u],e}:function(n){return o.call(n)},c="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(c&&r instanceof Uint32Array||"[object Uint32Array]"===a(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?l:function(){throw new Error("not implemented")};var p,A=t,v="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;p=function(){var n,t,r;if("function"!=typeof b)return!1;try{t=new b([1,3.14,-3.14,NaN]),r=t,n=(v&&r instanceof Float64Array||"[object Float64Array]"===a(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var U,m=p,w="function"==typeof Uint8Array,s="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var n,t,r;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,256,257]),r=t,n=(w&&r instanceof Uint8Array||"[object Uint8Array]"===a(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?N:function(){throw new Error("not implemented")};var h,F=U,I="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,T="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,65536,65537]),r=t,n=(I&&r instanceof Uint16Array||"[object Uint16Array]"===a(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?T:function(){throw new Error("not implemented")};var g,j={uint16:h,uint8:F};(g=new j.uint16(1))[0]=4660;var E=52===new j.uint8(g.buffer)[0],O=!0===E?1:0,x=new m(1),P=new A(x.buffer);function V(n){return x[0]=n,P[O]}var Y=!0===E?1:0,_=new m(1),q=new A(_.buffer),G=Number.NEGATIVE_INFINITY,M=.6931471803691238,k=1.9082149292705877e-10,z=1048575;function B(t){var r,e,o,i,f,u,a,c,y,l,p,A;return 0===t?G:n(t)||t<0?NaN:(f=0,(e=V(t))<1048576&&(f-=54,e=V(t*=0x40000000000000)),e>=2146435072?t+t:(f+=(e>>20)-1023|0,f+=(c=614244+(e&=z)&1048576|0)>>20|0,a=(t=function(n,t){return _[0]=n,q[Y]=t>>>0,_[0]}(t,e|1072693248^c))-1,(z&2+e)<3?0===a?0===f?0:f*M+f*k:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*M-(u-f*k-a)):(c=e-398458|0,y=440401-e|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),o=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=o+i,(c|=y)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*M-(r-(l*(r+u)+f*k)-a)):0===f?a-l*(a-u):f*M-(l*(a-u)-f*k-a))))}var C=Number.POSITIVE_INFINITY;return function(t){var e,o,i,f;return n(t)?NaN:0===t?C:2===t?G:1===t?0:t>2||t<0?NaN:(t>1?(e=-1,o=2-t):(e=1,o=t),(t=1-o)<=.5?(i=t*(t+10),f=function(n){var t,r;return 0===n?-.0005087819496582806:((n<0?-n:n)<=1?(t=n*(n*(.03348066254097446+n*(n*(n*(.02198786811111689+n*(.008226878746769157+n*(n*(0+0*n)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,r=1+n*(n*(n*(1.5622155839842302+n*(.662328840472003+n*(n*(n*(.07952836873415717+n*(.0008862163904564247*n-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(t=0+(n=1/n)*(0+n*(n*(.008226878746769157+n*(.02198786811111689+n*(n*(n*(.03348066254097446+n*(-.0005087819496582806*n-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),r=.0008862163904564247+n*(n*(.07952836873415717+n*(n*(n*(.662328840472003+n*(1.5622155839842302+n*(n*(1*n-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),t/r)}(t),e*(.08913147449493408*i+i*f)):o>=.25?(i=r(-2*B(o)),f=function(n){var t,r;return 0===n?-.20243350835593876:((n<0?-n:n)<=1?(t=n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(n*(n*(17.445385985570866+n*(21.12946554483405+-3.6719225470772936*n))-44.6382324441787)-18.851064805871424))))-.20243350835593876,r=1+n*(6.242641248542475+n*(3.971343795334387+n*(n*(n*(48.560921310873994+n*(10.826866735546016+n*(1.7211476576120028*n-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(t=(n=1/n)*(21.12946554483405+n*(17.445385985570866+n*(n*(n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+-.20243350835593876*n)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,r=1.7211476576120028+n*(n*(10.826866735546016+n*(48.560921310873994+n*(n*(n*(3.971343795334387+n*(6.242641248542475+1*n))-28.66081804998)-20.14326346804852)))-22.643693341313973)),t/r)}(o-=.25),e*(i/(2.249481201171875+f))):(o=r(-B(o)))<3?(f=function(n){var t,r;return 0===n?-.1311027816799519:((n<0?-n:n)<=1?(t=n*(n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(n*(2.8522533178221704e-8+-6.81149956853777e-10*n)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,r=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+0*n)))))))))):(t=(n=1/n)*(2.8522533178221704e-8+n*(n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.1311027816799519*n-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,r=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+1*n)))))))))),t/r)}(o-1.125),e*(.807220458984375*o+f*o)):o<6?(f=function(n){var t,r;return 0===n?-.0350353787183178:((n<0?-n:n)<=1?(t=n*(n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(26633922742578204e-28*n-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,r=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+0*n)))))))):(t=26633922742578204e-28+(n=1/n)*(n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0350353787183178*n-.0022242652921344794))))))-2.304047769118826e-10),r=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+1*n)))))))),t/r)}(o-3),e*(.9399557113647461*o+f*o)):(f=function(n){var t,r;return 0===n?-.016743100507663373:((n<0?-n:n)<=1?(t=n*(n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(4.4969678992770644e-7+n*(4.625961635228786e-9+n*(9905570997331033e-32*n-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,r=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(2.82243172016108e-7+n*(0+0*n)))))))):(t=9905570997331033e-32+(n=1/n)*(n*(4.625961635228786e-9+n*(4.4969678992770644e-7+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.016743100507663373*n-.0011295143874558028))))))-2811287356288318e-29),r=0+n*(0+n*(2.82243172016108e-7+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+1*n)))))))),t/r)}(o-6),e*(.9836282730102539*o+f*o)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).erfcinv=t();
//# sourceMappingURL=browser.js.map
