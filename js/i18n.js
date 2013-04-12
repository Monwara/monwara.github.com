/**
 * @license RequireJS i18n 1.0.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

(function(){function n(e,t,n,r,i,s){t[e]&&(n.push(e),(t[e]===!0||t[e]===1)&&r.push(i+e+"/"+s))}function r(e,t,n,r,i){var s=r+t+"/"+i;require._fileExists(e.toUrl(s))&&n.push(s)}function i(e,n,r){for(var i in n)!(i in t)&&(!(i in e)||r)&&(e[i]=n[i])}var e=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/,t={};define({version:"1.0.0",load:function(t,s,o,u){u=u||{};var a,f=e.exec(t),l=f[1],c=f[4],h=f[5],p=c.split("-"),d=[],v={},m,g,y="";f[5]?(l=f[1],a=l+h):(a=t,h=f[4],c=u.locale||(u.locale=typeof navigator=="undefined"?"root":(navigator.language||navigator.userLanguage||"root").toLowerCase()),p=c.split("-"));if(u.isBuild){d.push(a),r(s,"root",d,l,h);for(m=0;g=p[m];m++)y+=(y?"-":"")+g,r(s,y,d,l,h);s(d,function(){o()})}else s([a],function(e){var t=[];n("root",e,t,d,l,h);for(m=0;g=p[m];m++)y+=(y?"-":"")+g,n(y,e,t,d,l,h);s(d,function(){var n,r;for(n=t.length-1;n>-1&&(g=t[n]);n--){r=e[g];if(r===!0||r===1)r=s(l+g+"/"+h);i(v,r)}o(v)})})}})})();