var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'m-input-view'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'#666666'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z([3,'20'])
Z([3,'clear'])
Z([3,'1'])
Z([[7],[3,'displayable_']])
Z(z[2])
Z(z[3])
Z([[2,'?:'],[[7],[3,'showPassword']],[1,'#666666'],[1,'#cccccc']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'display']]]]]]]]])
Z(z[6])
Z([3,'eye'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'product'])
Z([[7],[3,'productList']])
Z(z[0])
Z([3,'uni-product'])
Z([[7],[3,'renderImage']])
Z([[6],[[7],[3,'product']],[3,'favourPrice']])
Z([[2,'!'],[[6],[[7],[3,'product']],[3,'favourPrice']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'m-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入手机号'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'2'])
Z([[7],[3,'hasProvider']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'email']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入邮箱'])
Z([3,'text'])
Z([[7],[3,'email']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入账号'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'email']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入邮箱'])
Z(z[5])
Z([[7],[3,'email']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'btn-row'])
Z([[2,'!'],[[7],[3,'hasLogin']]])
Z([[7],[3,'hasLogin']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/m-icon/m-icon.wxml','./components/m-input.wxml','./pages/food/food_menu/index.wxml','./pages/login/login.wxml','./pages/main/main.wxml','./pages/pwd/pwd.wxml','./pages/reg/reg.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,1,e,s,gg)){oD.wxVkey=1
var cF=_mz(z,'m-icon',['bind:__l',2,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(oD,cF)
}
var fE=_v()
_(xC,fE)
if(_oz(z,9,e,s,gg)){fE.wxVkey=1
var hG=_mz(z,'m-icon',['bind:__l',10,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(fE,hG)
}
oD.wxXCkey=1
oD.wxXCkey=3
fE.wxXCkey=1
fE.wxXCkey=3
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cI=_v()
_(r,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_n('view')
_rz(z,bO,'class',4,aL,lK,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,5,aL,lK,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,6,aL,lK,gg)){xQ.wxVkey=1
}
var oR=_v()
_(bO,oR)
if(_oz(z,7,aL,lK,gg)){oR.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(tM,bO)
return tM
}
cI.wxXCkey=2
_2z(z,2,oJ,e,s,gg,cI,'product','index','index')
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cT=_n('view')
_rz(z,cT,'class',0,e,s,gg)
var oV=_n('view')
_rz(z,oV,'class',1,e,s,gg)
var cW=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',2,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(oV,cW)
var oX=_mz(z,'m-input',['displayable',-1,'bind:__l',10,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(oV,oX)
_(cT,oV)
var hU=_v()
_(cT,hU)
if(_oz(z,17,e,s,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
_(r,cT)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var t1=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',0,'bind:input',1,'data-event-opts',1,'placeholder',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(r,t1)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var b3=_n('view')
_rz(z,b3,'class',0,e,s,gg)
var o4=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',1,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(b3,o4)
var x5=_mz(z,'m-input',['displayable',-1,'bind:__l',8,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(b3,x5)
var o6=_mz(z,'m-input',['clearable',-1,'bind:__l',15,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(b3,o6)
_(r,b3)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var c8=_n('view')
_rz(z,c8,'class',0,e,s,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,1,e,s,gg)){h9.wxVkey=1
}
var o0=_v()
_(c8,o0)
if(_oz(z,2,e,s,gg)){o0.wxVkey=1
}
h9.wxXCkey=1
o0.wxXCkey=1
_(r,c8)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/food/food_menu/index","pages/login/login","pages/main/main","pages/reg/reg","pages/pwd/pwd","pages/user/user"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#0faeff","backgroundColor":"#fbf9fe"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"身体数据","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/food/food_menu/index","text":"食堂","iconPath":"static/img/tab-cart.png","selectedIconPath":"static/img/tab-cart-current.png"},{"pagePath":"pages/user/user","text":"个人中心","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"健身","compilerVersion":"2.3.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/m-icon/m-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-icon/m-icon.wxml']=$gwx('./components/m-icon/m-icon.wxml');

__wxAppCode__['components/m-input.json']={"usingComponents":{"m-icon":"/components/m-icon/m-icon"},"component":true};
__wxAppCode__['components/m-input.wxml']=$gwx('./components/m-input.wxml');

__wxAppCode__['pages/food/food_menu/index.json']={"navigationBarTitleText":"食堂","usingComponents":{}};
__wxAppCode__['pages/food/food_menu/index.wxml']=$gwx('./pages/food/food_menu/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/main/main.json']={"navigationBarTitleText":"首页","titleNView":{"buttons":[{"text":"消息","redDot":true,"fontSize":"16","badgeText":"1"}]},"usingComponents":{}};
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/pwd/pwd.json']={"navigationBarTitleText":"找回密码","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/pwd/pwd.wxml']=$gwx('./pages/pwd/pwd.wxml');

__wxAppCode__['pages/reg/reg.json']={"navigationBarTitleText":"注册","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/reg/reg.wxml']=$gwx('./pages/reg/reg.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"个人中心","usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0d84":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};t.default=n}).call(this,n("0de9")["default"])},"273a":function(e,t,n){"use strict";(function(e){n("eb1b"),n("921b");var t=r(n("66fd")),o=r(n("dc1b")),u=r(n("c744"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.prototype.$store=u.default,o.default.mpType="app";var f=new t.default(a({store:u.default},o.default));e(f).$mount()}).call(this,n("6e42")["createApp"])},"53f7":function(e,t,n){},a75b:function(e,t,n){"use strict";var o=n("53f7"),u=n.n(o);u.a},d9fa:function(e,t,n){"use strict";n.r(t);var o=n("0d84"),u=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=u.a},dc1b:function(e,t,n){"use strict";n.r(t);var o=n("d9fa");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("a75b");var r,a,c=n("2877"),f=Object(c["a"])(o["default"],r,a,!1,null,null,null);t["default"]=f.exports}},[["273a","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, a = t[0], c = t[1], l = t[2], s = 0, f = []; s < a.length; s++) {
      o = a[s], u[o] && f.push(u[o][0]), u[o] = 0;
    }

    for (r in c) {
      Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    }

    p && p(t);

    while (f.length) {
      f.shift()();
    }

    return i.push.apply(i, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== u[a] && (r = !1);
      }

      r && (i.splice(t--, 1), e = c(c.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return c.p + "" + e + ".js";
  }

  function c(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports;
  }

  c.e = function (e) {
    var t = [],
        n = {
      "components/m-input": 1,
      "components/m-icon/m-icon": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/m-input": "components/m-input",
        "components/m-icon/m-icon": "components/m-icon/m-icon"
      }[e] || e) + ".wxss", u = c.p + r, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var l = i[a],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === r || s === u)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (a = 0; a < f.length; a++) {
        l = f[a], s = l.getAttribute("data-href");
        if (s === r || s === u) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        i.request = r, delete o[e], p.parentNode.removeChild(p), n(i);
      }, p.href = u;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var i = new Promise(function (t, n) {
        r = u[e] = [t, n];
      });
      t.push(r[2] = i);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = a(e), l = function l(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var n = u[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            i.type = r, i.request = o, n[1](i);
          }

          u[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, c.m = e, c.c = r, c.d = function (e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      c.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(t, "a", t), t;
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var f = 0; f < l.length; f++) {
    t(l[f]);
  }

  var p = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(r.length>1){var a=r.pop();o=r.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=r[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"24f6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="USERS_KEY",i=function(){var e="";return e=t.getStorageSync(n),e||(e="[]"),JSON.parse(e)},r=function(e){var r=i();r.push({account:e.account,password:e.password}),t.setStorageSync(n,JSON.stringify(r))},o={getUsers:i,addUser:r};e.default=o}).call(this,n("6e42")["default"])},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return O}),n.d(e,"mapState",function(){return D}),n.d(e,"mapMutations",function(){return $}),n.d(e,"mapGetters",function(){return M}),n.d(e,"mapActions",function(){return C}),n.d(e,"createNamespacedHelpers",function(){return R});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,u);var h=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;p(t.concat(i),e.getChild(i),n.modules[i])}}h.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},h.prototype.update=function(t){p([],this.root,t)},h.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new c(e,n);if(0===t.length)this.root=r;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],r)}e.modules&&a(e.modules,function(e,r){i.register(t.concat(r),e,n)})},h.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var f;var d=function(t){var e=this;void 0===t&&(t={}),!f&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var a=this,s=this,l=s.dispatch,c=s.commit;this.dispatch=function(t,e){return l.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=i,_(this,r,[],this._modules.root),x(this,r),n.forEach(function(t){return t(e)}),f.config.devtools&&o(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),x(t,n,e)}function x(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,o={};a(r,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=f.config.silent;f.config.silent=!0,t._vm=new f({data:{$$state:e},computed:o}),f.config.silent=s,t.strict&&P(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),f.nextTick(function(){return i.$destroy()}))}function _(t,e,n,i,r){var o=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a]=i),!o&&!r){var s=T(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){f.set(s,l,i.state)})}var c=i.context=m(t,a,n);i.forEachMutation(function(e,n){var i=a+n;S(t,i,e,c)}),i.forEachAction(function(e,n){var i=e.root?n:a+n,r=e.handler||e;w(t,i,r,c)}),i.forEachGetter(function(e,n){var i=a+n;A(t,i,e,c)}),i.forEachChild(function(i,o){_(t,e,n.concat(o),i,r)})}function m(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var o=k(n,i,r),a=o.payload,s=o.options,l=o.type;return s&&s.root||(l=e+l),t.dispatch(l,a)},commit:i?t.commit:function(n,i,r){var o=k(n,i,r),a=o.payload,s=o.options,l=o.type;s&&s.root||(l=e+l),t.commit(l,a,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return T(t.state,n)}}}),r}function b(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function S(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,i.state,e)})}function w(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(e,r){var o=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return l(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function A(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function P(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function T(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function O(t){f&&t===f||(f=t,i(f))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var i=this,r=k(t,e,n),o=r.type,a=r.payload,s=(r.options,{type:o,payload:a}),l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},d.prototype.dispatch=function(t,e){var n=this,i=k(t,e),r=i.type,o=i.payload,a={type:r,payload:o},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),x(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=T(e.state,t.slice(0,-1));f.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var D=F(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=L(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),$=F(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var o=L(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),M=F(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||L(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),C=F(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var o=L(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),R=function(t){return{mapState:D.bind(null,t),mapGetters:M.bind(null,t),mapMutations:$.bind(null,t),mapActions:C.bind(null,t)}};function E(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function L(t,e,n){var i=t._modulesNamespaceMap[n];return i}var j={Store:d,install:O,version:"3.0.1",mapState:D,mapMutations:$,mapGetters:M,mapActions:C,createNamespacedHelpers:R};e["default"]=j},"607c":function(t,e,n){"use strict";(function(e,n){var i,r={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};i=Object.assign?Object.assign:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n};var o={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function a(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),o=parseInt(r[1],16),a=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+o+","+a+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function l(t,e,n,i){for(var r=[],o=0;o<t.length;o++){for(var a={data:[],name:e[o],color:n[o]},s=0,l=i.length;s<l;s++)if(s<t[o])a.data.push(null);else{for(var c=0,u=0;u<t[o];u++)c+=i[s-u][1];a.data.push(+(c/t[o]).toFixed(3))}r.push(a)}return r}function c(t,e,n,i){var r=i.width-i.area[1]-i.area[3],o=e.eachSpacing*(i.chartData.xAxisData.xAxisPoints.length-1),a=t;return t>=0?a=0:Math.abs(t)>=o-r&&(a=r-o),a}function u(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function h(t,e,n){var i=t,r=n-e,o=i+(n-r-i)/Math.sqrt(2);o*=-1;var a=(n-r)*(Math.sqrt(2)-1)-(n-r-i)/Math.sqrt(2);return{transX:o,transY:a}}function p(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,r=.2,o=null,a=null,s=null,l=null;if(e<1?(o=t[0].x+(t[1].x-t[0].x)*i,a=t[0].y+(t[1].y-t[0].y)*i):(o=t[e].x+(t[e+1].x-t[e-1].x)*i,a=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*r,l=t[c].y-(t[c].y-t[c-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,l=t[e+1].y-(t[e+2].y-t[e].y)*r;return n(t,e+1)&&(l=t[e+1].y),n(t,e)&&(a=t[e].y),{ctrA:{x:o,y:a},ctrB:{x:s,y:l}}}function f(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)while(o.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function v(t,e,n){var i=0;return t.map(function(t){if(t.color||(t.color=n.colors[i],i=(i+1)%n.colors.length),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function g(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:i>=.01?.01:i>=.001?.001:i>=1e-4?1e-4:i>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.fontSize;t=String(t);t=t.split("");for(var n=0,i=0;i<t.length;i++){var o=t[i];/[a-zA-Z]/.test(o)?n+=7:/[0-9]/.test(o)?n+=5.5:/\./.test(o)?n+=2.7:/-/.test(o)?n+=3.25:/[\u4e00-\u9fa5]/.test(o)?n+=10:/\(|\)/.test(o)?n+=3.73:/\s/.test(o)?n+=2.5:/%/.test(o)?n+=8:n+=10}return n*e/10}function x(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function _(t,e){for(var n=new Array(e),i=0;i<n.length;i++)n[i]=0;for(var r=0;r<t.length;r++)for(i=0;i<n.length;i++)n[i]+=t[r].data[i];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}function m(t,e,n){var i,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:i,y:r}}function b(t,e){for(var n=[],i=0;i<t.length;i++){var r=t[i];if(null!==r.data[e]&&"undefined"!==typeof r.data[e]&&r.show){var o={};o.color=r.color,o.type=r.type,o.style=r.style,o.pointShape=r.pointShape,o.disableLegend=r.disableLegend,o.name=r.name,o.show=r.show,o.data=r.format?r.format(r.data[e]):r.data[e],n.push(o)}}return n}function S(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function w(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function A(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color}}),a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var h=a[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=a.length,{textList:o,offset:s}}function P(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});o=o.filter(function(t){if(!0!==t.disableLegend)return t});for(var a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var h=a[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=a.length,{textList:o,offset:s}}function T(t,e,n,i,r,o){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var a=o.color.upFill,s=o.color.downFill,l=[a,a,s,a],c=[],u={text:r[i],color:null};c.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[i-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[i-1][1]&&(l[2]=a),e.data[3]<t[i-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},r={text:"收盘："+e.data[1],color:l[1]},o={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,r,o,u)});for(var h=[],p={x:0,y:0},f=0;f<n.length;f++){var d=n[f];"undefined"!==typeof d[i]&&null!==d[i]&&h.push(d[i])}return p.x=Math.round(h[0][0].x),{textList:c,offset:p}}function k(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}function O(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1,a=0;return"line"!=n.type&&"area"!=n.type||"justify"!=n.xAxis.boundaryGap||(a=n.chartData.eachSpacing/2),M(t,n,i)&&e.forEach(function(e,n){t.x+r+a>e&&(o=n)}),o}function D(t,e,n){var i=-1;if($(t,e.area)){for(var r=e.points,o=-1,a=0,s=r.length;a<s;a++)for(var l=r[a],c=0;c<l.length;c++){o+=1;var u=l[c]["area"];if(t.x>u[0]&&t.x<u[2]&&t.y>u[1]&&t.y<u[3]){i=o;break}}return i}return i}function $(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function M(t,e,n){return t.x<e.width-e.area[1]+10&&t.x>e.area[3]-10&&t.y>e.area[0]&&t.y<e.height-e.area[2]}function C(t,e,n){var i=2*Math.PI/n,r=-1;if(j(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a*=-1,a<0&&(a+=2*Math.PI);var s=e.angleList.map(function(t){return t=o(-1*t),t});s.forEach(function(t,e){var n=o(t-i/2),s=o(t+i/2);s<n&&(s+=2*Math.PI),(a>=n&&a<=s||a+2*Math.PI>=n&&a+2*Math.PI<=s)&&(r=e)})}return r}function R(t,e){for(var n=-1,i=0,r=e.series.length;i<r;i++){var o=e.series[i];if(t.x>o.funnelArea[0]&&t.x<o.funnelArea[2]&&t.y>o.funnelArea[1]&&t.y<o.funnelArea[3]){n=i;break}}return n}function E(t,e){for(var n=-1,i=0,r=e.length;i<r;i++){var o=e[i];if(t.x>o.area[0]&&t.x<o.area[2]&&t.y>o.area[1]&&t.y<o.area[3]){n=i;break}}return n}function F(t,e){for(var n=-1,i=e.chartData.mapData,r=e.series,o=It(t.y,t.x,i.bounds,i.scale,i.xoffset,i.yoffset),a=[o.x,o.y],s=0,l=r.length;s<l;s++){var c=r[s].geometry.coordinates;if(Nt(a,c)){n=s;break}}return n}function L(t,e){var n=-1;if(j(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var r=0,o=e.series.length;r<o;r++){var a=e.series[r];if(u(i,a._start_,a._start_+2*a._proportion_*Math.PI)){n=r;break}}}return n}function j(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function I(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function z(t,e,n,i){var r={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return i.legendData=r,r;var o=e.legend.padding,a=e.legend.margin,s=e.legend.fontSize,l=15*e.pixelRatio,c=5*e.pixelRatio,u=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var h=[],p=0,f=[],d=[],v=0;v<t.length;v++){var g=t[v],x=l+c+y(g.name||"undefined",s)+e.legend.itemGap;p+x>e.width-e.padding[1]-e.padding[3]?(h.push(d),f.push(p-e.legend.itemGap),p=x,d=[g]):(p+=x,d.push(g))}if(d.length){h.push(d),f.push(p-e.legend.itemGap),r.widthArr=f;var _=Math.max.apply(null,f);switch(e.legend.float){case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+2*o;break;case"right":r.area.start.x=e.width-e.padding[1]-_-2*o,r.area.end.x=e.width-e.padding[1];break;default:r.area.start.x=(e.width-_)/2-o,r.area.end.x=(e.width+_)/2+o}r.area.width=_+2*o,r.area.wholeWidth=_+2*o,r.area.height=h.length*u+2*o,r.area.wholeHeight=h.length*u+2*o+2*a,r.points=h}}else{var m=t.length,b=e.height-e.padding[0]-e.padding[2]-2*a-2*o,S=Math.min(Math.floor(b/u),m);switch(r.area.height=S*u+2*o,r.area.wholeHeight=S*u+2*o,e.legend.float){case"top":r.area.start.y=e.padding[0]+a,r.area.end.y=e.padding[0]+a+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-a-r.area.height,r.area.end.y=e.height-e.padding[2]-a;break;default:r.area.start.y=(e.height-r.area.height)/2,r.area.end.y=(e.height+r.area.height)/2}for(var w=m%S===0?m/S:Math.floor(m/S+1),A=[],P=0;P<w;P++){var T=t.slice(P*S,P*S+S);A.push(T)}if(r.points=A,A.length){for(var k=0;k<A.length;k++){for(var O=A[k],D=0,$=0;$<O.length;$++){var M=l+c+y(O[$].name||"undefined",s)+e.legend.itemGap;M>D&&(D=M)}r.widthArr.push(D),r.heightArr.push(O.length*u+2*o)}for(var C=0,R=0;R<r.widthArr.length;R++)C+=r.widthArr[R];r.area.width=C-e.legend.itemGap+2*o,r.area.wholeWidth=r.area.width+o}}switch(e.legend.position){case"top":r.area.start.y=e.padding[0]+a,r.area.end.y=e.padding[0]+a+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-r.area.height-a,r.area.end.y=e.height-e.padding[2]-a;break;case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+r.area.width;break;case"right":r.area.start.x=e.width-e.padding[1]-r.area.width,r.area.end.x=e.width-e.padding[1];break}return i.legendData=r,r}function N(t,e,n,i){var r={angle:0,xAxisHeight:n.xAxisHeight},o=t.map(function(t){return y(t)}),a=Math.max.apply(this,o);return 1==e.xAxis.rotateLabel&&a+2*n.xAxisTextPadding>i&&(r.angle=45*Math.PI/180,r.xAxisHeight=2*n.xAxisTextPadding+a*Math.sin(r.angle)),r}function B(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=r.extra.radar||{};a.max=a.max||0;for(var s=Math.max(a.max,Math.max.apply(null,x(i))),l=[],c=function(r){var a=i[r],c={};c.color=a.color,c.data=[],a.data.forEach(function(i,r){var a={};a.angle=t[r],a.proportion=i/s,a.position=f(n*a.proportion*o*Math.cos(a.angle),n*a.proportion*o*Math.sin(a.angle),e),c.data.push(a)}),l.push(c)},u=0;u<i.length;u++)c(u);return l}function W(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=0,r=0,o=0;o<t.length;o++){var a=t[o];a.data=null===a.data?0:a.data,i+=a.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===i?1/t.length*n:l.data/i*n,l._radius_=e}for(var c=0;c<t.length;c++){var u=t[c];u._start_=r,r+=2*u._proportion_*Math.PI}return t}function H(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var i=0;i<t.length;i++)t[i].radius=t[i].data/t[0].data*e*n,t[i]._proportion_=t[i].data/t[0].data;return t.reverse()}function U(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=0,a=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,o+=c.data,s.push(c.data)}for(var u=Math.min.apply(null,s),h=Math.max.apply(null,s),p=i-n,f=0;f<t.length;f++){var d=t[f];d.data=null===d.data?0:d.data,0===o||"area"==e?(d._proportion_=d.data/o*r,d._rose_proportion_=1/t.length*r):(d._proportion_=d.data/o*r,d._rose_proportion_=d.data/o*r),d._radius_=n+p*((d.data-u)/(h-u))}for(var v=0;v<t.length;v++){var g=t[v];g._start_=a,a+=2*g._rose_proportion_*Math.PI}return t}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var i=0;i<t.length;i++){var r=t[i];r.data=null===r.data?0:r.data;var o=void 0;o="default"==e.type?e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle:2,r._proportion_=o*r.data*n+e.startAngle,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function q(t,e,n){for(var i=e-n+1,r=e,o=0;o<t.length;o++)t[o].value=null===t[o].value?0:t[o].value,t[o]._startAngle_=r,t[o]._endAngle_=i*t[o].value+e,t[o]._endAngle_>=2&&(t[o]._endAngle_=t[o]._endAngle_%2),r=t[o]._endAngle_;return t}function G(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){var o=t[r];if(o.data=null===o.data?0:o.data,"auto"==n.pointer.color){for(var a=0;a<e.length;a++)if(o.data<=e[a].value){o.color=e[a].color;break}}else o.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;o._endAngle_=s*o.data+n.startAngle,o._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(o._oldAngle_+=2),o.data>=n.oldData?o._proportion_=(o._endAngle_-o._oldAngle_)*i+n.oldAngle:o._proportion_=o._oldAngle_-(o._oldAngle_-o._endAngle_)*i,o._proportion_>=2&&(o._proportion_=o._proportion_%2)}return t}function X(t){t=W(t);for(var e=0,n=0;n<t.length;n++){var i=t[n],r=i.format?i.format(+i._proportion_.toFixed(2)):o.toFixed(100*i._proportion_)+"%";e=Math.max(e,y(r))}return e}function J(t,e,n,i,r,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/n),o.extra.column&&o.extra.column.width&&+o.extra.column.width>0&&(t.width=Math.min(t.width,+o.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(i+.5-n/2)*t.width,t)})}function K(t,e,n,i,r,o,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),o.extra.column&&o.extra.column.width&&+o.extra.column.width>0&&(t.width=Math.min(t.width,+o.extra.column.width)),i>0&&(t.width-=2*a),t)})}function Y(t,e,n,i,r,o,a){return t.map(function(t,n){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),o.extra.column&&o.extra.column.width&&+o.extra.column.width>0&&(t.width=Math.min(t.width,+o.extra.column.width)),t)})}function Z(t,e,n){n.yAxisWidth,n.yAxisTitleWidth;var i=e.width-e.area[1]-e.area[3],r=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&r>1&&"justify"==e.xAxis.boundaryGap&&(r-=1);var o=i/r,a=[],s=e.area[3],l=e.width-e.area[1];return t.forEach(function(t,e){a.push(s+e*o)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?a.push(s+t.length*o):a.push(l)),{xAxisPoints:a,startX:s,endX:l,eachSpacing:o}}function Q(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=o.height-o.area[0]-o.area[2];return t.forEach(function(t,a){if(null===t)l.push(null);else{var u=[];t.forEach(function(t,l){var h={};h.x=i[a]+Math.round(r/2);var p=t.value||t,f=c*(p-e)/(n-e);f*=s,h.y=o.height-Math.round(f)-o.area[2],u.push(h)}),l.push(u)}}),l}function tt(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l="center";"line"!=o.type&&"area"!=o.type||(l=o.xAxis.boundaryGap);var c=[],u=o.height-o.area[0]-o.area[2];return t.forEach(function(t,a){if(null===t)c.push(null);else{var h={};h.color=t.color,h.x=i[a],"center"==l&&(h.x+=Math.round(r/2));var p=t;"object"===typeof t&&null!==t&&(p=t.value);var f=u*(p-e)/(n-e);f*=s,h.y=o.height-Math.round(f)-o.area[2],c.push(h)}}),c}function et(t,e,n,i,r,o,a,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],h=o.height-o.area[0]-o.area[2];return t.forEach(function(t,a){if(null===t)u.push(null);else{var p={};if(p.color=t.color,p.x=i[a]+Math.round(r/2),s>0){for(var f=0,d=0;d<=s;d++)f+=l[d].data[a];var v=f-t,g=h*(f-e)/(n-e),y=h*(v-e)/(n-e)}else f=t,g=h*(f-e)/(n-e),y=0;var x=y;g*=c,x*=c,p.y=o.height-Math.round(g)-o.area[2],p.y0=o.height-Math.round(x)-o.area[2],u.push(p)}}),u}function nt(t,e,n,i){var r;r="stack"==i?_(t,e.categories.length):x(t);var o=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){o.push(t)}):o.push(t.value):o.push(t)});var a=0,s=0;if(o.length>0&&(a=Math.min.apply(this,o),s=Math.max.apply(this,o)),"number"===typeof e.yAxis.min&&(a=Math.min(e.yAxis.min,a)),"number"===typeof e.yAxis.max&&(s=Math.max(e.yAxis.max,s)),a===s){var l=s||10;s+=l}for(var c=g(a,s),u=c.minRange,h=c.maxRange,p=[],f=(h-u)/n.yAxisSplit,d=0;d<=n.yAxisSplit;d++)p.push(u+f*d);return p.reverse()}function it(t,e,n){var r=i({},{type:""},e.extra.column),a=nt(t,e,n,r.type),s=n.yAxisWidth,l=e.yAxis.fontSize||n.fontSize,c=a.map(function(t){return t=o.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,s=Math.max(s,y(t,l)+5),t});return!0===e.yAxis.disabled&&(s=0),{rangesFormat:c,ranges:a,yAxisWidth:s}}function rt(t,e,n,i,r){var o=nt(e,n,i),a=n.height-n.area[0]-n.area[2],s=o[0],l=o[o.length-1],c=n.padding[3],u=n.padding[1]+a,h=s-(s-l)*(t-c)/(u-c);return h=n.yAxis.format?n.yAxis.format(Number(h)):h,h}function ot(t,e,n,i){for(var r=i.height-i.area[0]-i.area[2],o=0;o<n.length;o++){var a=r*(n[o].value-t)/(e-t);n[o].y=i.height-Math.round(a)-i.area[2]}return n}function at(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function st(t,e,n,i,r){i.beginPath(),i.setStrokeStyle("#ffffff"),i.setLineWidth(1*r.pixelRatio),i.setFillStyle(e),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+3.5*r.pixelRatio,t.y),i.arc(t.x,t.y,4*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function lt(t,e,n,i){var r=t.title.fontSize||e.titleFontSize,o=t.subtitle.fontSize||e.subtitleFontSize,a=t.title.name||"",s=t.subtitle.name||"",l=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,u=a?r:0,h=s?o:0,p=5;if(s){var f=y(s,o),d=i.x-f/2+(t.subtitle.offsetX||0),v=i.y+o/2+(t.subtitle.offsetY||0);a&&(v+=(u+p)/2),n.beginPath(),n.setFontSize(o),n.setFillStyle(c),n.fillText(s,d,v),n.closePath(),n.stroke()}if(a){var g=y(a,r),x=i.x-g/2+(t.title.offsetX||0),_=i.y+r/2+(t.title.offsetY||0);s&&(_-=(h+p)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(l),n.fillText(a,x,_),n.closePath(),n.stroke()}}function ct(t,e,n,i){var r=e.data;t.forEach(function(t,o){if(null!==t){i.beginPath(),i.setFontSize(e.textSize||n.fontSize),i.setFillStyle(e.textColor||"#666666");var a=r[o];"object"===typeof r[o]&&null!==r[o]&&(a=r[o].value);var s=e.format?e.format(a):a;i.fillText(String(s),t.x-y(s,e.textSize||n.fontSize)/2,t.y-2),i.closePath(),i.stroke()}})}function ut(t,e,n,i,r,o){e-=t.width/2+r.gaugeLabelTextMargin;for(var a=t.startAngle-t.endAngle+1,s=a/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,h=t.startNumber,p=0;p<t.splitLine.splitNumber+1;p++){var f={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)},d=t.labelFormat?t.labelFormat(h):h;f.x+=n.x-y(d)/2,f.y+=n.y;var v=f.x,g=f.y;o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(t.labelColor||"#666666"),o.fillText(d,v,g+r.fontSize/2),o.closePath(),o.stroke(),u+=s,u>=2&&(u%=2),h+=c}}function ht(t,e,n,i,r,a){var s=i.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=f(c.x,c.y,n),h=u.x,p=u.y;o.approximatelyEqual(c.x,0)?h-=y(i.categories[l]||"")/2:c.x<0&&(h-=y(i.categories[l]||"")),a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(s.labelColor||"#666666"),a.fillText(i.categories[l]||"",h,p+r.fontSize/2),a.closePath(),a.stroke()})}function pt(t,e,n,i,r,a){for(var s=n.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):o.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var n=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),i=t.color,r=t._radius_;return{arc:n,text:e,color:i,radius:r,textColor:t.textColor,textSize:t.textSize}}),h=0;h<u.length;h++){var p=u[h],v=Math.cos(p.arc)*(p.radius+s),g=Math.sin(p.arc)*(p.radius+s),x=Math.cos(p.arc)*p.radius,_=Math.sin(p.arc)*p.radius,m=v>=0?v+n.pieChartTextPadding:v-n.pieChartTextPadding,b=g,S=y(p.text),w=b;c&&o.isSameXCoordinateArea(c.start,{x:m})&&(w=m>0?Math.min(b,c.start.y):v<0?Math.max(b,c.start.y):b>0?Math.max(b,c.start.y):Math.min(b,c.start.y)),m<0&&(m-=S);var A={lineStart:{x:x,y:_},lineEnd:{x:v,y:g},start:{x:m,y:w},width:S,height:n.fontSize,text:p.text,color:p.color,textColor:p.textColor,textSize:p.textSize};c=d(A,c),l.push(c)}for(var P=0;P<l.length;P++){var T=l[P],k=f(T.lineStart.x,T.lineStart.y,a),O=f(T.lineEnd.x,T.lineEnd.y,a),D=f(T.start.x,T.start.y,a);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(T.color),i.setFillStyle(T.color),i.moveTo(k.x,k.y);var $=T.start.x<0?D.x+T.width:D.x,M=T.start.x<0?D.x-5:D.x+5;i.quadraticCurveTo(O.x,O.y,$,D.y),i.moveTo(k.x,k.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(D.x+T.width,D.y),i.arc($,D.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(T.textSize||n.fontSize),i.setFillStyle(T.textColor||"#666666"),i.fillText(T.text,M,D.y+3),i.closePath(),i.stroke(),i.closePath()}}function ft(t,e,n,i){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var o=e.area[0],s=e.height-e.area[2];if("dash"==r.gridType&&i.setLineDash([r.dashLength,r.dashLength]),i.setStrokeStyle(r.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.beginPath(),i.moveTo(t,o),i.lineTo(t,s),i.stroke(),i.setLineDash([]),r.xAxisLabel){var l=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var c=y(l,n.fontSize),u=t-.5*c,h=s;i.beginPath(),i.setFillStyle(a(r.labelBgColor||n.toolTipBackground,r.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(r.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u-n.toolTipPadding,h,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(r.labelFontColor||n.fontColor),i.fillText(String(l),u,h+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function dt(t,e,n,r,o){for(var s=i({},{type:"solid",dashLength:4,data:[]},n.extra.markLine),l=n.area[3],c=n.width-n.padding[1],u=ot(t,e,s.data,n),h=0;h<u.length;h++){var p=i({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},u[h]);if("dash"==s.type&&o.setLineDash([s.dashLength,s.dashLength]),o.setStrokeStyle(p.lineColor),o.setLineWidth(1*n.pixelRatio),o.beginPath(),o.moveTo(l,p.y),o.lineTo(c,p.y),o.stroke(),o.setLineDash([]),p.showLabel){var f=n.yAxis.format?n.yAxis.format(Number(p.value)):p.value;o.setFontSize(r.fontSize);var d=y(f,r.fontSize),v=n.padding[3]+r.yAxisTitleWidth-r.toolTipPadding,g=Math.max(n.area[3],d+2*r.toolTipPadding),x=g-v,_=v+(x-d)/2,m=p.y;o.setFillStyle(a(p.labelBgColor,p.labelBgOpacity)),o.setStrokeStyle(p.labelBgColor),o.setLineWidth(1*n.pixelRatio),o.beginPath(),o.rect(v,m-.5*r.fontSize-r.toolTipPadding,x,r.fontSize+2*r.toolTipPadding),o.closePath(),o.stroke(),o.fill(),o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(p.labelFontColor),o.fillText(String(f),_,m+.5*r.fontSize),o.stroke()}}}function vt(t,e,n,r,o){var s=i({},{gridType:"solid",dashLength:4},t.extra.tooltip),l=t.area[3],c=t.width-t.padding[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(l,t.tooltip.offset.y),n.lineTo(c,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel){var u=rt(t.tooltip.offset.y,t.series,t,e,r);n.setFontSize(e.fontSize);var h=y(u,e.fontSize),p=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,f=Math.max(t.area[3],h+2*e.toolTipPadding),d=f-p,v=p+(d-h)/2,g=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(a(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(p,g-.5*e.fontSize-e.toolTipPadding,d,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(u,v,g+.5*e.fontSize),n.closePath(),n.stroke()}}function gt(t,e,n,r,o){var s=i({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),l=e.area[0],c=e.height-e.area[2];r.beginPath(),r.setFillStyle(a(s.activeBgColor,s.activeBgOpacity)),r.rect(t-o/2,l,o,c-l),r.closePath(),r.fill()}function yt(t,e,n,r,o,s,l){var c=i({},{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),u=4*n.pixelRatio,h=5*n.pixelRatio,p=8*n.pixelRatio,f=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||ft(n.tooltip.offset.x,n,r,o),e=i({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return y(t.text,r.fontSize)}),v=u+h+4*r.toolTipPadding+Math.max.apply(null,d),g=2*r.toolTipPadding+t.length*r.toolTipLineHeight;e.x-Math.abs(n._scrollDistance_)+p+v>n.width&&(f=!0),g+e.y>n.height&&(e.y=n.height-g),o.beginPath(),o.setFillStyle(a(c.bgColor||r.toolTipBackground,c.bgOpacity||r.toolTipOpacity)),f?(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x-p,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x-p,e.y),o.lineTo(e.x-p-Math.round(v),e.y),o.lineTo(e.x-p-Math.round(v),e.y+g),o.lineTo(e.x-p,e.y+g),o.lineTo(e.x-p,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)):(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x+p,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x+p,e.y),o.lineTo(e.x+p+Math.round(v),e.y),o.lineTo(e.x+p+Math.round(v),e.y+g),o.lineTo(e.x+p,e.y+g),o.lineTo(e.x+p,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)),o.closePath(),o.fill(),t.forEach(function(t,n){if(null!==t.color){o.beginPath(),o.setFillStyle(t.color);var i=e.x+p+2*r.toolTipPadding,a=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding+1;f&&(i=e.x-v-p+2*r.toolTipPadding),o.fillRect(i,a,u,r.fontSize),o.closePath()}}),t.forEach(function(t,n){var i=e.x+p+2*r.toolTipPadding+u+h;f&&(i=e.x-v-p+2*r.toolTipPadding+ +u+h);var a=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding;o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(c.fontColor),o.fillText(t.text,i,a+r.fontSize),o.closePath(),o.stroke()})}function xt(t,e,n,i){var r=n.xAxisHeight+(e.height-n.xAxisHeight-y(t))/2;i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.titleFontColor||"#333333"),i.translate(0,e.height),i.rotate(-90*Math.PI/180),i.fillText(t,r,e.padding[3]+.5*n.fontSize),i.closePath(),i.stroke(),i.restore()}function _t(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=i({},{type:"group",width:c/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),h=a.pop(),p=a.shift(),f=[];return r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&r.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===o&&gt(e.tooltip.offset.x,e,n,r,c),t.forEach(function(i,a){var s=i.data;switch(u.type){case"group":var d=tt(s,h,p,l,c,e,n,o),v=et(s,h,p,l,c,e,n,a,t,o);f.push(v),d=J(d,c,t.length,a,n,e),d.forEach(function(t,n){if(null!==t){r.beginPath(),r.setStrokeStyle(t.color||i.color),r.setLineWidth(1),r.setFillStyle(t.color||i.color);var o=t.x-t.width/2;e.height,t.y,e.area[2];r.moveTo(o-1,t.y),r.lineTo(o+t.width-2,t.y),r.lineTo(o+t.width-2,e.height-e.area[2]),r.lineTo(o,e.height-e.area[2]),r.lineTo(o,t.y),r.closePath(),r.stroke(),r.fill()}});break;case"stack":d=et(s,h,p,l,c,e,n,a,t,o);f.push(d),d=Y(d,c,t.length,a,n,e,t),d.forEach(function(t,n){if(null!==t){r.beginPath(),r.setFillStyle(t.color||i.color);var o=t.x-t.width/2+1,s=e.height-t.y-e.area[2],l=e.height-t.y0-e.area[2];a>0&&(s-=l),r.moveTo(o,t.y),r.fillRect(o,t.y,t.width-2,s),r.closePath(),r.fill()}});break;case"meter":d=tt(s,h,p,l,c,e,n,o);f.push(d),d=K(d,c,t.length,a,n,e,u.meter.border),0==a?d.forEach(function(t,n){if(null!==t){r.beginPath(),r.setFillStyle(u.meter.fillColor);var o=t.x-t.width/2,a=e.height-t.y-e.area[2];r.moveTo(o,t.y),r.fillRect(o,t.y,t.width,a),r.closePath(),r.fill(),u.meter.border>0&&(r.beginPath(),r.setStrokeStyle(i.color),r.setLineWidth(u.meter.border*e.pixelRatio),r.moveTo(o+.5*u.meter.border,t.y+a),r.lineTo(o+.5*u.meter.border,t.y+.5*u.meter.border),r.lineTo(o+t.width-.5*u.meter.border,t.y+.5*u.meter.border),r.lineTo(o+t.width-.5*u.meter.border,t.y+a),r.stroke())}}):d.forEach(function(t,n){if(null!==t){r.beginPath(),r.setFillStyle(t.color||i.color);var o=t.x-t.width/2,a=e.height-t.y-e.area[2];r.moveTo(o,t.y),r.fillRect(o,t.y,t.width,a),r.closePath(),r.fill()}});break}}),!1!==e.dataLabel&&1===o&&t.forEach(function(i,a){var s=i.data;switch(u.type){case"group":var f=tt(s,h,p,l,c,e,n,o);f=J(f,c,t.length,a,n,e),ct(f,i,n,r);break;case"stack":f=et(s,h,p,l,c,e,n,a,t,o);ct(f,i,n,r);break;case"meter":f=tt(s,h,p,l,c,e,n,o);ct(f,i,n,r);break}}),r.restore(),{xAxisPoints:l,calPoints:f,eachSpacing:c,minRange:h,maxRange:p}}function mt(t,e,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=i({},{color:{},average:{}},n.extra.candle);s.color=i({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=i({},{show:!1,name:[],day:[],color:r.colors},s.average),n.extra.candle=s;var l=[].concat(n.chartData.yAxisData.ranges),c=n.chartData.xAxisData,u=c.xAxisPoints,h=c.eachSpacing,f=l.pop(),d=l.shift(),v=[];return o.save(),n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&o.translate(n._scrollDistance_,0),s.average.show&&e.forEach(function(t,e){var i=t.data,s=tt(i,f,d,u,h,n,r,a),l=I(s);l.forEach(function(e,n){o.beginPath(),o.setStrokeStyle(t.color),o.setLineWidth(1),1===e.length?(o.moveTo(e[0].x,e[0].y),o.arc(e[0].x,e[0].y,1,0,2*Math.PI)):(o.moveTo(e[0].x,e[0].y),e.forEach(function(t,n){if(n>0){var i=p(e,n-1);o.bezierCurveTo(i.ctrA.x,i.ctrA.y,i.ctrB.x,i.ctrB.y,t.x,t.y)}}),o.moveTo(e[0].x,e[0].y)),o.closePath(),o.stroke()})}),t.forEach(function(t,e){var i=t.data,l=Q(i,f,d,u,h,n,r,a);v.push(l);var c=I(l);c=c[0],c.forEach(function(t,e){o.beginPath(),i[e][1]-i[e][0]>0?(o.setStrokeStyle(s.color.upLine),o.setFillStyle(s.color.upFill),o.setLineWidth(1*n.pixelRatio),o.moveTo(t[3].x,t[3].y),o.lineTo(t[1].x,t[1].y),o.lineTo(t[1].x-h/4,t[1].y),o.lineTo(t[0].x-h/4,t[0].y),o.lineTo(t[0].x,t[0].y),o.lineTo(t[2].x,t[2].y),o.lineTo(t[0].x,t[0].y),o.lineTo(t[0].x+h/4,t[0].y),o.lineTo(t[1].x+h/4,t[1].y),o.lineTo(t[1].x,t[1].y),o.moveTo(t[3].x,t[3].y)):(o.setStrokeStyle(s.color.downLine),o.setFillStyle(s.color.downFill),o.setLineWidth(1*n.pixelRatio),o.moveTo(t[3].x,t[3].y),o.lineTo(t[0].x,t[0].y),o.lineTo(t[0].x-h/4,t[0].y),o.lineTo(t[1].x-h/4,t[1].y),o.lineTo(t[1].x,t[1].y),o.lineTo(t[2].x,t[2].y),o.lineTo(t[1].x,t[1].y),o.lineTo(t[1].x+h/4,t[1].y),o.lineTo(t[0].x+h/4,t[0].y),o.lineTo(t[0].x,t[0].y),o.moveTo(t[3].x,t[3].y)),o.closePath(),o.fill(),o.stroke()})}),o.restore(),{xAxisPoints:u,calPoints:v,eachSpacing:h,minRange:f,maxRange:d}}function bt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{type:"straight",opacity:.2,addLine:!1,width:2},e.extra.area),l=[].concat(e.chartData.yAxisData.ranges),c=e.chartData.xAxisData,u=c.xAxisPoints,h=c.eachSpacing,f=l.pop(),d=l.shift(),v=e.height-e.area[2],g=[];return r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&r.translate(e._scrollDistance_,0),t.forEach(function(t,i){var l=t.data,c=tt(l,f,d,u,h,e,n,o);g.push(c);for(var y=I(c),x=function(n){var i=y[n];if(r.beginPath(),r.setStrokeStyle(a(t.color,s.opacity)),r.setFillStyle(a(t.color,s.opacity)),r.setLineWidth(s.width*e.pixelRatio),i.length>1){var o=i[0],l=i[i.length-1];r.moveTo(o.x,o.y),"curve"===s.type?i.forEach(function(t,e){if(e>0){var n=p(i,e-1);r.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&r.lineTo(t.x,t.y)}),r.lineTo(l.x,v),r.lineTo(o.x,v),r.lineTo(o.x,o.y)}else{var c=i[0];r.moveTo(c.x-h/2,c.y),r.lineTo(c.x+h/2,c.y),r.lineTo(c.x+h/2,v),r.lineTo(c.x-h/2,v),r.moveTo(c.x-h/2,c.y)}r.closePath(),r.fill(),s.addLine&&(r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(s.width*e.pixelRatio),1===i.length?(r.moveTo(i[0].x,i[0].y),r.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(r.moveTo(i[0].x,i[0].y),"curve"===s.type?i.forEach(function(t,e){if(e>0){var n=p(i,e-1);r.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&r.lineTo(t.x,t.y)}),r.moveTo(i[0].x,i[0].y)),r.closePath(),r.stroke())},_=0;_<y.length;_++)x(_);if(!1!==e.dataPointShape){var m=n.dataPointShape[i%n.dataPointShape.length];st(c,t.color,m,r,e)}}),!1!==e.dataLabel&&1===o&&t.forEach(function(t,i){var a=t.data,s=tt(a,f,d,u,h,e,n,o);ct(s,t,n,r)}),r.restore(),{xAxisPoints:u,calPoints:g,eachSpacing:h,minRange:f,maxRange:d}}function St(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.line||{type:"straight",width:2};o.type=o.type?o.type:"straight",o.width=o.width?o.width:2;var a=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=a.pop(),h=a.shift(),f=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),t.forEach(function(t,a){var s=t.data,d=tt(s,u,h,l,c,e,n,r);f.push(d);var v=I(d);if(v.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"===o.type?n.forEach(function(t,e){if(e>0){var r=p(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()}),!1!==e.dataPointShape){var g=n.dataPointShape[a%n.dataPointShape.length];st(d,t.color,g,i,e)}}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,o){var a=t.data,s=tt(a,u,h,l,c,e,n,r);ct(s,t,n,i)}),i.restore(),{xAxisPoints:l,calPoints:f,eachSpacing:c,minRange:u,maxRange:h}}function wt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=o.pop(),h=o.shift(),f=e.height-e.area[2],d=[],v=0,g=0;if(t.forEach(function(t,e){"column"==t.type&&(g+=1)}),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),t.forEach(function(t,o){var s=t.data,y=tt(s,u,h,l,c,e,n,r);if(d.push(y),"column"==t.type&&(y=J(y,c,g,v,n,e),y.forEach(function(n,r){if(null!==n){i.beginPath(),i.setStrokeStyle(n.color||t.color),i.setLineWidth(1),i.setFillStyle(n.color||t.color);var o=n.x-n.width/2;e.height,n.y,e.area[2];i.moveTo(o,n.y),i.moveTo(o-1,n.y),i.lineTo(o+n.width-2,n.y),i.lineTo(o+n.width-2,e.height-e.area[2]),i.lineTo(o,e.height-e.area[2]),i.lineTo(o,n.y),i.closePath(),i.stroke(),i.fill(),i.closePath(),i.fill()}}),v+=1),"area"==t.type)for(var x=I(y),_=function(n){var r=x[n];if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(a(t.color,.2)),i.setLineWidth(2*e.pixelRatio),r.length>1){b=r[0];var o=r[r.length-1];i.moveTo(b.x,b.y),"curve"===t.style?r.forEach(function(t,e){if(e>0){var n=p(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(o.x,f),i.lineTo(b.x,f),i.lineTo(b.x,b.y)}else{var s=r[0];i.moveTo(s.x-c/2,s.y),i.lineTo(s.x+c/2,s.y),i.lineTo(s.x+c/2,f),i.lineTo(s.x-c/2,f),i.moveTo(s.x-c/2,s.y)}i.closePath(),i.fill()},m=0;m<x.length;m++){var b;_(m)}if("line"==t.type){var S=I(y);S.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"==t.style?n.forEach(function(t,e){if(e>0){var r=p(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()})}if("point"==t.type&&y.forEach(function(n,r){n&&(i.beginPath(),i.setFillStyle(t.color),i.setStrokeStyle("#FFFFFF"),i.setLineWidth(1*e.pixelRatio),i.moveTo(n.x+3.5*e.pixelRatio,n.y),i.arc(n.x,n.y,4*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke())}),1==t.addPoint&&"column"!==t.type){var w=n.dataPointShape[o%n.dataPointShape.length];st(y,t.color,w,i,e)}}),!1!==e.dataLabel&&1===r){v=0;t.forEach(function(t,o){var a=t.data,s=tt(a,u,h,l,c,e,n,r);"column"!==t.type?ct(s,t,n,i):(s=J(s,c,g,v,n,e),ct(s,t,n,i),v+=1)})}return i.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:c,minRange:u,maxRange:h}}function At(t,e,n,i,r,o){var a=t.extra.tooltip||{};a.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&vt(t,e,n,r,o),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&yt(t.tooltip.textList,t.tooltip.offset,t,e,n,r,o),n.restore()}function Pt(t,e,n,i){var r=e.chartData.xAxisData,o=r.xAxisPoints,a=r.startX,s=r.endX,l=r.eachSpacing,c="center";"line"!=e.type&&"area"!=e.type||(c=e.xAxis.boundaryGap);var u=e.height-e.area[2],p=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var f=e.height-e.area[2]+n.xAxisHeight,d=s-a,v=l*(o.length-1),g=d*d/v,x=0;e._scrollDistance_&&(x=-e._scrollDistance_*d/v),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(a,f),i.lineTo(s,f),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(a+x,f),i.lineTo(a+x+g,f),i.stroke(),i.closePath(),i.setLineCap("butt")}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),!0!==e.xAxis.disableGrid&&(i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),"calibration"===e.xAxis.type?o.forEach(function(t,n){n>0&&(i.beginPath(),i.moveTo(t-l/2,u),i.lineTo(t-l/2,u+4*e.pixelRatio),i.closePath(),i.stroke())}):(e.xAxis.gridEval=e.xAxis.gridEval||1,o.forEach(function(t,n){n%e.xAxis.gridEval==0&&(i.beginPath(),i.moveTo(t,u),i.lineTo(t,p),i.stroke())})),i.setLineDash([])),!0!==e.xAxis.disabled){e.width,e.padding[1],e.padding[3],n.yAxisWidth,n.yAxisTitleWidth;var _=t.length;e.xAxis.labelCount&&(_=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,_-=1);for(var m=Math.ceil(t.length/_),b=[],S=t.length,w=0;w<S;w++)w%m!==0?b.push(""):b.push(t[w]);b[S-1]=t[S-1];var A=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?b.forEach(function(t,r){var a=-y(t,A)/2;"center"==c&&(a+=l/2),i.beginPath(),i.setFontSize(A),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(t,o[r]+a,u+A+(n.xAxisHeight-A)/2),i.closePath(),i.stroke()}):b.forEach(function(t,r){i.save(),i.beginPath(),i.setFontSize(A),i.setFillStyle(e.xAxis.fontColor||"#666666");var a=y(t),s=-a;"center"==c&&(s+=l/2);var p=h(o[r]+l/2,u+A/2+5,e.height),f=p.transX,d=p.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(f,d),i.fillText(t,o[r]+s,u+A+5),i.closePath(),i.stroke(),i.restore()})}i.restore()}function Tt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var r=e.height-e.area[0]-e.area[2],o=r/n.yAxisSplit,a=e.area[3],s=e.chartData.xAxisData.xAxisPoints,l=e.chartData.xAxisData.eachSpacing,c=l*(s.length-1),u=a+c,h=[],p=0;p<n.yAxisSplit+1;p++)h.push(e.height-e.area[2]-o*p);i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.setStrokeStyle(e.yAxis.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),h.forEach(function(t,e){i.beginPath(),i.moveTo(a,t),i.lineTo(u,t),i.stroke()}),i.setLineDash([]),i.restore()}}function kt(t,e,n,i){if(!0!==e.yAxis.disabled){var r=e.chartData.yAxisData.rangesFormat,o=e.height-e.area[0]-e.area[2],a=Math.floor(o/n.yAxisSplit),s=e.area[3],l=e.width-e.area[1],c=e.height-e.area[2],u=c+n.xAxisHeight;e.xAxis.scrollShow&&(u-=3*e.pixelRatio),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,s,u),1==e.enableScroll&&i.fillRect(l,0,e.width,u),i.closePath(),i.stroke();for(var h=[],p=0;p<=n.yAxisSplit;p++)h.push(e.area[0]+a*p);var f=e.yAxis.fontSize||n.fontSize;r.forEach(function(t,r){var o=h[r]?h[r]:c;i.beginPath(),i.setFontSize(f),i.setFillStyle(e.yAxis.fontColor||"#666666"),i.fillText(String(t),e.area[3]-n.yAxisWidth,o+f/2),i.closePath(),i.stroke()}),e.yAxis.title&&xt(e.yAxis.title,e,n,i)}}function Ot(t,e,n,i,r){if(!1!==e.legend.show){var o=r.legendData,a=o.points,s=o.area,l=e.legend.padding,c=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,p=e.legend.itemGap,f=Math.max(e.legend.lineHeight*e.pixelRatio,c);i.beginPath(),i.setLineWidth(e.legend.borderWidth),i.setStrokeStyle(e.legend.borderColor),i.setFillStyle(e.legend.backgroundColor),i.moveTo(s.start.x,s.start.y),i.rect(s.start.x,s.start.y,s.width,s.height),i.closePath(),i.fill(),i.stroke(),a.forEach(function(t,r){var a=0,d=0;a=o.widthArr[r],d=o.heightArr[r];var v=0,g=0;"top"==e.legend.position||"bottom"==e.legend.position?(v=s.start.x+(s.width-a)/2,g=s.start.y+l+r*f):(a=0==r?0:o.widthArr[r-1],v=s.start.x+l+a,g=s.start.y+l+(s.height-d)/2),i.setFontSize(n.fontSize);for(var x=0;x<t.length;x++){var _=t[x];switch(_.area=[0,0,0,0],_.area[0]=v,_.area[1]=g,_.area[3]=g+f,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(_.show?_.color:e.legend.hiddenColor),i.setFillStyle(_.show?_.color:e.legend.hiddenColor),_.legendShape){case"line":i.moveTo(v,g+.5*f-2*e.pixelRatio),i.fillRect(v,g+.5*f-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":i.moveTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*f+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*f+5*e.pixelRatio),i.lineTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio);break;case"diamond":i.moveTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*f),i.lineTo(v+7.5*e.pixelRatio,g+.5*f+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*f),i.lineTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio);break;case"circle":i.moveTo(v+7.5*e.pixelRatio,g+.5*f),i.arc(v+7.5*e.pixelRatio,g+.5*f,5*e.pixelRatio,0,2*Math.PI);break;case"rect":i.moveTo(v,g+.5*f-5*e.pixelRatio),i.fillRect(v,g+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:i.moveTo(v,g+.5*f-5*e.pixelRatio),i.fillRect(v,g+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}i.closePath(),i.fill(),i.stroke(),v+=u+h;var m=.5*f+.5*c-2;i.beginPath(),i.setFontSize(c),i.setFillStyle(_.show?e.legend.fontColor:e.legend.hiddenColor),i.fillText(_.name,v,g+m),i.closePath(),i.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(v+=y(_.name,c)+p,_.area[2]=v):(_.area[2]=v+y(_.name,c)+p,v-=u+h,g+=f)}})}}function Dt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=W(t,c,o);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(a(t.color,e.extra.pie.activeOpacity||.5)),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_+u,t._start_,t._start_+2*t._proportion_*Math.PI),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(s.borderColor),r.setFillStyle(t.color),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),r.closePath(),r.fill(),1==s.border&&r.stroke()}),"ring"===e.type){var h=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(h=Math.max(0,c-e.extra.pie.ringWidth)),r.beginPath(),r.setFillStyle(e.background||"#ffffff"),r.moveTo(l.x,l.y),r.arc(l.x,l.y,h,0,2*Math.PI),r.closePath(),r.fill()}if(!1!==e.dataLabel&&1===o){for(var p=!1,f=0,d=t.length;f<d;f++)if(t[f].data>0){p=!0;break}p&&pt(t,e,n,r,c,l)}return 1===o&&"ring"===e.type&&lt(e,n,r,l),{center:l,radius:c,series:t}}function $t(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding),u=s.minRadius||.5*c;t=U(t,s.type,u,c,o);var h=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(a(t.color,s.activeOpacity||.5)),r.moveTo(l.x,l.y),r.arc(l.x,l.y,h+t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(s.borderColor),r.setFillStyle(t.color),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),r.closePath(),r.fill(),1==s.border&&r.stroke()}),!1!==e.dataLabel&&1===o){for(var p=!1,f=0,d=t.length;f<d;f++)if(t[f].data>0){p=!0;break}p&&pt(t,e,n,r,c,l)}return{center:l,radius:c,series:t}}function Mt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=i({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio},e.extra.arcbar);t=V(t,a,o);var s={x:e.width/2,y:e.height/2},l=Math.min(s.x,s.y);l-=5*e.pixelRatio,l-=a.width/2,r.setLineWidth(a.width),r.setStrokeStyle(a.backgroundColor||"#E9E9E9"),r.setLineCap("round"),r.beginPath(),"default"==a.type?r.arc(s.x,s.y,l,a.startAngle*Math.PI,a.endAngle*Math.PI,!1):r.arc(s.x,s.y,l,0,2*Math.PI,!1),r.stroke();for(var c=0;c<t.length;c++){var u=t[c];r.setLineWidth(a.width),r.setStrokeStyle(u.color),r.setLineCap("round"),r.beginPath(),r.arc(s.x,s.y,l,a.startAngle*Math.PI,u._proportion_*Math.PI,!1),r.stroke()}return lt(e,n,r,s),{center:s,radius:l,series:t}}function Ct(t,e,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=i({},{startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);void 0==s.oldAngle&&(s.oldAngle=s.startAngle),void 0==s.oldData&&(s.oldData=0),t=q(t,s.startAngle,s.endAngle);var l={x:n.width/2,y:n.height/2},c=Math.min(l.x,l.y);c-=5*n.pixelRatio,c-=s.width/2;var u=c-s.width;o.setLineWidth(s.width),o.setLineCap("butt");for(var h=0;h<t.length;h++){var p=t[h];o.beginPath(),o.setStrokeStyle(p.color),o.arc(l.x,l.y,c,p._startAngle_*Math.PI,p._endAngle_*Math.PI,!1),o.stroke()}o.save();var f=s.startAngle-s.endAngle+1,d=f/s.splitLine.splitNumber,v=f/s.splitLine.splitNumber/s.splitLine.childNumber,g=-c-.5*s.width-s.splitLine.fixRadius,y=-c-.5*s.width-s.splitLine.fixRadius+s.splitLine.width,x=-c-.5*s.width-s.splitLine.fixRadius+s.splitLine.childWidth;o.translate(l.x,l.y),o.rotate((s.startAngle-1)*Math.PI);for(var _=0;_<s.splitLine.splitNumber+1;_++)o.beginPath(),o.setStrokeStyle(s.splitLine.color),o.setLineWidth(2*n.pixelRatio),o.moveTo(g,0),o.lineTo(y,0),o.stroke(),o.rotate(d*Math.PI);o.restore(),o.save(),o.translate(l.x,l.y),o.rotate((s.startAngle-1)*Math.PI);for(var m=0;m<s.splitLine.splitNumber*s.splitLine.childNumber+1;m++)o.beginPath(),o.setStrokeStyle(s.splitLine.color),o.setLineWidth(1*n.pixelRatio),o.moveTo(g,0),o.lineTo(x,0),o.stroke(),o.rotate(v*Math.PI);o.restore(),e=G(e,t,s,a);for(var b=0;b<e.length;b++){var S=e[b];o.save(),o.translate(l.x,l.y),o.rotate((S._proportion_-1)*Math.PI),o.beginPath(),o.setFillStyle(S.color),o.moveTo(s.pointer.width,0),o.lineTo(0,-s.pointer.width/2),o.lineTo(-u,0),o.lineTo(0,s.pointer.width/2),o.lineTo(s.pointer.width,0),o.closePath(),o.fill(),o.beginPath(),o.setFillStyle("#FFFFFF"),o.arc(0,0,s.pointer.width/6,0,2*Math.PI,!1),o.fill(),o.restore()}return!1!==n.dataLabel&&ut(s,c,l,n,r,o),lt(n,r,o,l),1===a&&"gauge"===n.type&&(n.extra.gauge.oldAngle=e[0]._proportion_,n.extra.gauge.oldData=e[0].data),{center:l,radius:c,innerRadius:u,categories:t,totalAngle:f}}function Rt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2},e.extra.radar),l=w(e.categories.length),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min(c.x-(S(e.categories)+n.radarLabelTextMargin),c.y-n.radarLabelTextMargin);u-=e.padding[1],r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(s.gridColor),l.forEach(function(t){var e=f(u*Math.cos(t),u*Math.sin(t),c);r.moveTo(c.x,c.y),r.lineTo(e.x,e.y)}),r.stroke(),r.closePath();for(var h=function(t){var i={};r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(s.gridColor),l.forEach(function(e,o){var a=f(u/n.radarGridCount*t*Math.cos(e),u/n.radarGridCount*t*Math.sin(e),c);0===o?(i=a,r.moveTo(a.x,a.y)):r.lineTo(a.x,a.y)}),r.lineTo(i.x,i.y),r.stroke(),r.closePath()},p=1;p<=n.radarGridCount;p++)h(p);var d=B(l,c,u,t,e,o);return d.forEach(function(t,i){if(r.beginPath(),r.setFillStyle(a(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?r.moveTo(t.position.x,t.position.y):r.lineTo(t.position.x,t.position.y)}),r.closePath(),r.fill(),!1!==e.dataPointShape){var o=n.dataPointShape[i%n.dataPointShape.length],l=t.data.map(function(t){return t.position});st(l,t.color,o,r,e)}}),ht(l,u,c,e,n,r),{center:c,radius:u,angleList:l}}function Et(t,e,n){n=0==n?1:n;for(var i=[],r=0;r<n;r++)i[r]=Math.random();return Math.floor(i.reduce(function(t,e){return t+e})/n*(e-t))+t}function Ft(t,e,n,i){for(var r=!1,o=0;o<e.length;o++)if(e[o].area){if(!(t[3]<e[o].area[1]||t[0]>e[o].area[2]||t[1]>e[o].area[3]||t[2]<e[o].area[0])){r=!0;break}if(t[0]<0||t[1]<0||t[2]>n||t[3]>i){r=!0;break}r=!1}return r}function Lt(t){var e,n={};n.xMin=180,n.xMax=0,n.yMin=90,n.yMax=0;for(var i=0;i<t.length;i++)for(var r=t[i].geometry.coordinates,o=0;o<r.length;o++){e=r[o],1==e.length&&(e=e[0]);for(var a=0;a<e.length;a++){var s=e[a][0],l=e[a][1],c={x:s,y:l};n.xMin=n.xMin<c.x?n.xMin:c.x,n.xMax=n.xMax>c.x?n.xMax:c.x,n.yMin=n.yMin<c.y?n.yMin:c.y,n.yMax=n.yMax>c.y?n.yMax:c.y}}return n}function jt(t,e,n,i,r,o){return{x:(e-n.xMin)*i+r,y:(n.yMax-t)*i+o}}function It(t,e,n,i,r,o){return{x:(e-r)/i+n.xMin,y:n.yMax-(t-o)/i}}function zt(t,e,n){if(e[1]==n[1])return!1;if(e[1]>t[1]&&n[1]>t[1])return!1;if(e[1]<t[1]&&n[1]<t[1])return!1;if(e[1]==t[1]&&n[1]>t[1])return!1;if(n[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&n[1]<t[1])return!1;var i=n[0]-(n[0]-e[0])*(n[1]-t[1])/(n[1]-e[1]);return!(i<t[0])}function Nt(t,e){for(var n=0,i=0;i<e.length;i++){var r=e[i][0];1==e.length&&(r=e[i][0]);for(var o=0;o<r.length-1;o++){var a=r[o],s=r[o+1];zt(t,a,s)&&(n+=1)}}return n%2==1}function Bt(t,e,n,r){var o,s,l=i({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),c=t,u=Lt(c),h=e.width/Math.abs(u.xMax-u.xMin),p=e.height/Math.abs(u.yMax-u.yMin),f=h<p?h:p,d=e.width/2-Math.abs(u.xMax-u.xMin)/2*f,v=e.height/2-Math.abs(u.yMax-u.yMin)/2*f;r.beginPath(),r.clearRect(0,0,e.width,e.height),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill();for(var g=0;g<c.length;g++){r.beginPath(),r.setLineWidth(l.borderWidth*e.pixelRatio),r.setStrokeStyle(l.borderColor),r.setFillStyle(a(t[g].color,l.fillOpacity)),e.tooltip&&e.tooltip.index==g&&(r.setStrokeStyle(l.activeBorderColor),r.setFillStyle(a(l.activeFillColor,l.activeFillOpacity)));for(var x=c[g].geometry.coordinates,_=0;_<x.length;_++){o=x[_],1==o.length&&(o=o[0]);for(var m=0;m<o.length;m++)s=jt(o[m][1],o[m][0],u,f,d,v),0===m?(r.beginPath(),r.moveTo(s.x,s.y)):r.lineTo(s.x,s.y);r.fill(),1==l.border&&r.stroke()}if(1==e.dataLabel){var b=c[g].properties.centroid;if(b){s=jt(b[1],b[0],u,f,d,v);var S=c[g].textSize||n.fontSize,w=c[g].properties.name;r.beginPath(),r.setFontSize(S),r.setFillStyle(c[g].textColor||"#666666"),r.fillText(w,s.x-y(w,S)/2,s.y+S/2),r.closePath(),r.stroke()}}}e.chartData.mapData={bounds:u,scale:f,xoffset:d,yoffset:v},At(e,n,r,1),r.draw()}function Wt(t,e){var n=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var i=0;i<n.length;i++){var r=n[i].name,o=n[i].textSize,a=y(r,o),s=void 0,l=void 0,c=void 0,u=0;while(1){u++,s=Et(-t.width/2,t.width/2,5)-a/2,l=Et(-t.height/2,t.height/2,5)+o/2,c=[s-5+t.width/2,l-5-o+t.height/2,s+a+5+t.width/2,l+5+t.height/2];var h=Ft(c,n,t.width,t.height);if(!h)break;if(1e3==u){c=[-100,-100,-100,-100];break}}n[i].area=c}break;case"vertical":for(var p=function(){return Math.random()>.7},f=0;f<n.length;f++){var d=n[f].name,v=n[f].textSize,g=y(d,v),x=p(),_=void 0,m=void 0,b=void 0,S=void 0,w=0;while(1){w++;var A=void 0;if(x?(_=Et(-t.width/2,t.width/2,5)-g/2,m=Et(-t.height/2,t.height/2,5)+v/2,b=[m-5-g+t.width/2,-_-5+t.height/2,m+5+t.width/2,-_+v+5+t.height/2],S=[t.width-(t.width/2-t.height/2)-(-_+v+5+t.height/2)-5,t.height/2-t.width/2+(m-5-g+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-_+v+5+t.height/2)+v,t.height/2-t.width/2+(m-5-g+t.width/2)+g+5],A=Ft(S,n,t.height,t.width)):(_=Et(-t.width/2,t.width/2,5)-g/2,m=Et(-t.height/2,t.height/2,5)+v/2,b=[_-5+t.width/2,m-5-v+t.height/2,_+g+5+t.width/2,m+5+t.height/2],A=Ft(b,n,t.width,t.height)),!A)break;if(1e3==w){b=[-1e3,-1e3,-1e3,-1e3];break}}x?(n[f].area=S,n[f].areav=b):n[f].area=b,n[f].rotate=x}break}return n}function Ht(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;i({},{type:"normal",autoColors:!0},e.extra.word);r.beginPath(),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill(),r.save();var a=e.chartData.wordCloudData;r.translate(e.width/2,e.height/2);for(var s=0;s<a.length;s++){r.save(),a[s].rotate&&r.rotate(90*Math.PI/180);var l=a[s].name,c=a[s].textSize,u=y(l,c);r.beginPath(),r.setStrokeStyle(a[s].color),r.setFillStyle(a[s].color),r.setFontSize(c),a[s].rotate?a[s].areav[0]>0&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(a[s].areav[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].areav[1]+5+c-e.height/2)*o):r.fillText(l,(a[s].areav[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].areav[1]+5+c-e.height/2)*o)):a[s].area[0]>0&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(a[s].area[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].area[1]+5+c-e.height/2)*o):r.fillText(l,(a[s].area[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].area[1]+5+c-e.height/2)*o)),r.stroke(),r.restore()}r.restore()}function Ut(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,h=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=H(t,h,o),r.save(),r.translate(c.x,c.y);for(var p=0;p<t.length;p++)0==p?(e.tooltip&&e.tooltip.index==p&&(r.beginPath(),r.setFillStyle(a(t[p].color,s.activeOpacity)),r.moveTo(-u,0),r.lineTo(-t[p].radius-u,-l),r.lineTo(t[p].radius+u,-l),r.lineTo(u,0),r.lineTo(-u,0),r.closePath(),r.fill()),t[p].funnelArea=[c.x-t[p].radius,c.y-l,c.x+t[p].radius,c.y],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(a(t[p].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[p].radius,-l),r.lineTo(t[p].radius,-l),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()):(e.tooltip&&e.tooltip.index==p&&(r.beginPath(),r.setFillStyle(a(t[p].color,s.activeOpacity)),r.moveTo(0,0),r.lineTo(-t[p-1].radius-u,0),r.lineTo(-t[p].radius-u,-l),r.lineTo(t[p].radius+u,-l),r.lineTo(t[p-1].radius+u,0),r.lineTo(0,0),r.closePath(),r.fill(),r.closePath(),r.fill()),t[p].funnelArea=[c.x-t[p].radius,c.y-l*(p+1),c.x+t[p].radius,c.y-l*p],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(a(t[p].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[p-1].radius,0),r.lineTo(-t[p].radius,-l),r.lineTo(t[p].radius,-l),r.lineTo(t[p-1].radius,0),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()),r.translate(0,-l);return r.restore(),!1!==e.dataLabel&&1===o&&Vt(t,e,r,l,s.labelAlign,u,c),{center:c,radius:h,series:t}}function Vt(t,e,n,i,r,a,s){for(var l=0;l<t.length;l++){var c=t[l],u=void 0,h=void 0,p=void 0,f=void 0,d=c.format?c.format(+c._proportion_.toFixed(2)):o.toFixed(100*c._proportion_)+"%";"right"==r?(u=0==l?(c.funnelArea[2]+s.x)/2:(c.funnelArea[2]+t[l-1].funnelArea[2])/2,h=u+2*a,p=c.funnelArea[1]+i/2,f=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,p),n.lineTo(h,p),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,p),n.arc(h,p,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h+5,p+f/2-2),n.closePath(),n.stroke(),n.closePath()):(u=0==l?(c.funnelArea[0]+s.x)/2:(c.funnelArea[0]+t[l-1].funnelArea[0])/2,h=u-2*a,p=c.funnelArea[1]+i/2,f=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,p),n.lineTo(h,p),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,p),n.arc(h,p,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h-5-y(d),p+f/2-2),n.closePath(),n.stroke(),n.closePath())}}function qt(t,e){e.draw()}var Gt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Xt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function n(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var i=n(),r=null,o=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=n),n-r<t.duration){var a=(n-r)/t.duration,s=Gt[t.timing];a=s(a),t.onProcess&&t.onProcess(a),i(o,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};o=o.bind(this),i(o,e)}function Jt(t,e,n,r){var o=this,a=e.series,s=e.categories;a=v(a,e,n);var c=e.animation?e.duration:0;this.animationInstance&&this.animationInstance.stop();var u=null;if("candle"==t){var h=i({},e.extra.candle.average);h.show?(u=l(h.day,h.name,h.color,a[0].data),u=v(u,e,n),e.seriesMA=u):u=e.seriesMA?e.seriesMA=v(e.seriesMA,e,n):a}else u=a;e._series_=a=k(a),e.area=new Array(4);for(var p=0;p<4;p++)e.area[p]=e.padding[p];var f=z(u,e,n,e.chartData),d=f.area.wholeHeight,g=f.area.wholeWidth;switch(n.legendHeight=d,e.legend.position){case"top":e.area[0]+=d;break;case"bottom":e.area[2]+=d;break;case"left":e.area[3]+=g;break;case"right":e.area[1]+=g;break}var y={},x=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type?(y=it(a,e,n),x=y.yAxisWidth,n.yAxisWidth=x,e.area[3]+=x):n.yAxisWidth=x,e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=Z(e.categories,e,n);var _=N(e.categories,e,n,e.chartData.xAxisData.eachSpacing),m=_.xAxisHeight,b=_.angle;n.xAxisHeight=m,n._xAxisTextAngle_=b,e.area[2]+=m,e.chartData.categoriesData=_}if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var S=0,w=e.chartData.xAxisData.xAxisPoints,A=e.chartData.xAxisData.startX,P=e.chartData.xAxisData.endX,T=e.chartData.xAxisData.eachSpacing,O=T*(w.length-1),D=P-A;S=D-O,o.scrollOption={currentOffset:S,startTouchX:S,distance:0,lastMoveTime:0},e._scrollDistance_=S}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:X(u)),t){case"word":var $=i({},{type:"normal",autoColors:!0},e.extra.word);1!=e.updateData&&void 0!=e.updateData||(e.chartData.wordCloudData=Wt(e,$.type)),this.animationInstance=new Xt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Ht(a,e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"map":r.clearRect(0,0,e.width,e.height),Bt(a,e,n,r);break;case"funnel":this.animationInstance=new Xt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.funnelData=Ut(a,e,n,r,t),Ot(e.series,e,n,r,e.chartData),At(e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Xt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),Pt(s,e,n,r);var i=St(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(u,h,e,n,r),Ot(e.series,e,n,r,e.chartData),At(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Xt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),Pt(s,e,n,r);var i=wt(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(u,h,e,n,r),Ot(e.series,e,n,r,e.chartData),At(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Xt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),Pt(s,e,n,r);var i=_t(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(u,h,e,n,r),Ot(e.series,e,n,r,e.chartData),At(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Xt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),Pt(s,e,n,r);var i=bt(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(u,h,e,n,r),Ot(e.series,e,n,r,e.chartData),At(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Xt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.pieData=Dt(a,e,n,r,t),Ot(e.series,e,n,r,e.chartData),At(e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Xt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.pieData=$t(a,e,n,r,t),Ot(e.series,e,n,r,e.chartData),At(e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Xt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.radarData=Rt(a,e,n,r,t),Ot(e.series,e,n,r,e.chartData),At(e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Xt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.arcbarData=Mt(a,e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Xt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.gaugeData=Ct(s,a,e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Xt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),Pt(s,e,n,r);var i=mt(a,u,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,h=i.minRange,p=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(h,p,e,n,r),Ot(u||e.series,e,n,r,e.chartData),At(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break}}function Kt(){this.events={}}Xt.prototype.stop=function(){this.isStop=!0},Kt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Kt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n[0],o=n.slice(1);this.events[r]&&this.events[r].forEach(function(t){try{t.apply(null,o)}catch(n){console.error(e(n," at components\\u-charts\\u-charts.js:4518"))}})};var Yt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=i({},t.title),t.subtitle=i({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=i({},{gridType:"solid",dashLength:4*t.pixelRatio},t.yAxis),t.xAxis=i({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4*t.pixelRatio,scrollAlign:"left",boundaryGap:"center"},t.xAxis),t.legend=i({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=i({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation;var e=JSON.parse(JSON.stringify(r));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:r.yAxisSplit,e.rotate=t.rotate,t.rotate){var o=t.width,a=t.height;t.width=a,t.height=o}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=r.yAxisWidth*t.pixelRatio,e.xAxisHeight=r.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=r.xAxisLineHeight*t.pixelRatio,e.legendHeight=r.legendHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=r.titleFontSize*t.pixelRatio,e.subtitleFontSize=r.subtitleFontSize*t.pixelRatio,e.toolTipPadding=r.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=r.toolTipLineHeight*t.pixelRatio,e.columePadding=r.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Kt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Jt.call(this,t.type,t,e,this.context)};Yt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=i({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=it(this.opts.series,this.opts,this.config),r=n.yAxisWidth;this.config.yAxisWidth=r;var o=0,a=Z(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,h=u*(s.length-1),p=c-l;o=p-h,this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o;break}Jt.call(this,this.opts.type,this.opts,this.config,this.context)},Yt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var i=it(this.opts.series,this.opts,this.config),r=i.yAxisWidth;this.config.yAxisWidth=r;var o=0,a=Z(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,h=u*n,p=c-l,f=p-u*(s.length-1);o=p/2-h,o>0&&(o=0),o<f&&(o=f),this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o,Jt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at components\\u-charts\\u-charts.js:4679"))},Yt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Yt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Yt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=m(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?L({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?C({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?R({x:n.x,y:n.y},this.opts.chartData.funnelData):"map"===this.opts.type?F({x:n.x,y:n.y},this.opts):"word"===this.opts.type?E({x:n.x,y:n.y},this.opts.chartData.wordCloudData):O({x:n.x,y:n.y},this.opts.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Yt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=m(e,this.opts,t);return D({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},Yt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n){m(n,this.opts,t);var i=this.getLegendDataIndex(t);i>=0&&(this.opts.series[i].show=!this.opts.series[i].show,this.opts.animation=!!e.animation,Jt.call(this,this.opts.type,this.opts,this.config,this.context))}},Yt.prototype.showToolTip=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null;r=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],r||console.log(e("touchError"," at components\\u-charts\\u-charts.js:4815"));var o=m(r,this.opts,t),a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var l=this.getCurrentDataIndex(t);if(l>-1){var c=b(this.opts.series,l);if(0!==c.length){var u=A(c,this.opts.chartData.calPoints,l,this.opts.categories,n),h=u.textList,p=u.offset;p.y=o.y,s.tooltip={textList:h,offset:p,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){var f=P(c,this.opts.chartData.calPoints,l,this.opts.categories,n);h=f.textList,p=f.offset;p.y=o.y,s.tooltip={textList:h,offset:p,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){u=T(this.opts.series[0].data,c,this.opts.chartData.calPoints,l,this.opts.categories,this.opts.extra.candle,n),h=u.textList,p=u.offset;p.y=o.y,s.tooltip={textList:h,offset:p,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.name+": "+c.data,color:c.color}],p={x:o.x,y:o.y};s.tooltip={textList:h,offset:p,option:n,index:l}}Jt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.properties.name,color:c.color}],p={x:o.x,y:o.y};s.tooltip={textList:h,offset:p,option:n,index:l}}s.updateData=!1,Jt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){h=c.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),p={x:o.x,y:o.y};s.tooltip={textList:h,offset:p,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}},Yt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=i({},this.opts,{_scrollDistance_:t,animation:!1});Jt.call(this,this.opts.type,e,this.config,this.context)},Yt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var n=m(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},Yt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),r=n-this.scrollOption.lastMoveTime;if(!(r<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var o=null;if(o=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],o&&!0===this.opts.enableScroll){var a,s=m(o,this.opts,t);a=s.x-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(l+a,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=a=u-l;var h=i({},this.opts,{_scrollDistance_:l+a,animation:!1});return Jt.call(this,h.type,h,this.config,this.context),l+a}}},Yt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Yt)}).call(this,n("0de9")["default"],n("6e42")["default"])},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function h(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function m(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,w=b(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),A=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),P=/\B([A-Z])/g,T=b(function(t){return t.replace(P,"-$1").toLowerCase()});function k(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var D=Function.prototype.bind?O:k;function $(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function M(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function R(t,e,n){}var E=function(t,e,n){return!1},F=function(t){return t};function L(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),o=Array.isArray(e);if(r&&o)return t.length===e.length&&t.every(function(t,n){return L(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return L(t[n],e[n])})}catch(c){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function I(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var z=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:R,parsePlatformTagName:F,mustUseProp:E,async:!0,_lifecycleHooks:N},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var V=new RegExp("[^"+W.source+".$_\\d]");function q(t){if(!V.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,X="__proto__"in{},J="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=K&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(J)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(er){}var rt=function(){return void 0===G&&(G=!J&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},ot=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=R,ut=0,ht=function(){this.id=ut++,this.subs=[]};function pt(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function ft(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){x(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var dt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function xt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,mt=Object.create(_t),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=_t[t];U(mt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var St=Object.getOwnPropertyNames(mt),wt=!0;function At(t){wt=t}var Pt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,U(t,"__ob__",this),Array.isArray(t)?(X?t.push!==t.__proto__.push?kt(t,mt,St):Tt(t,mt):kt(t,mt,St),this.observeArray(t)):this.walk(t)};function Tt(t,e){t.__proto__=e}function kt(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];U(t,o,e[o])}}function Ot(t,e){var n;if(l(t)&&!(t instanceof dt))return m(t,"__ob__")&&t.__ob__ instanceof Pt?n=t.__ob__:wt&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Pt(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,i,r){var o=new ht,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!r&&Ot(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,c=!r&&Ot(e),o.notify())}})}}function $t(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Dt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||m(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}Pt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},Pt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ot(t[e])};var Rt=B.optionMergeStrategies;function Et(t,e){if(!e)return t;for(var n,i,r,o=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(i=t[n],r=e[n],m(t,n)?i!==r&&u(i)&&u(r)&&Et(i,r):$t(t,n,r));return t}function Ft(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Et(i,r):r}:e?t?function(){return Et("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Lt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?jt(n):n}function jt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function It(t,e,n,i){var r=Object.create(t||null);return e?M(r,e):r}Rt.data=function(t,e,n){return n?Ft(t,e,n):e&&"function"!==typeof e?t:Ft(t,e)},N.forEach(function(t){Rt[t]=Lt}),z.forEach(function(t){Rt[t+"s"]=It}),Rt.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in M(r,t),e){var a=r[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),r[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},Rt.props=Rt.methods=Rt.inject=Rt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return M(r,t),e&&M(r,e),r},Rt.provide=Ft;var zt=function(t,e){return void 0===e?t:e};function Nt(t,e){var n=t.props;if(n){var i,r,o,a={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=w(r),a[o]={type:null})}else if(u(n))for(var s in n)r=n[s],o=w(s),a[o]=u(r)?r:{type:r};else 0;t.props=a}}function Bt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var o in n){var a=n[o];i[o]=u(a)?M({from:o},a):{from:a}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),Nt(e,n),Bt(e,n),Wt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Ht(t,e.mixins[i],n);var o,a={};for(o in t)s(o);for(o in e)m(t,o)||s(o);function s(i){var r=Rt[i]||zt;a[i]=r(t[i],e[i],n,i)}return a}function Ut(t,e,n,i){if("string"===typeof n){var r=t[e];if(m(r,n))return r[n];var o=w(n);if(m(r,o))return r[o];var a=A(o);if(m(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Vt(t,e,n,i){var r=e[t],o=!m(n,t),a=n[t],s=Jt(Boolean,r.type);if(s>-1)if(o&&!m(r,"default"))a=!1;else if(""===a||a===T(t)){var l=Jt(String,r.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=qt(i,r,t);var c=wt;At(!0),Ot(a),At(c)}return a}function qt(t,e,n){if(m(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Gt(e.type)?i.call(t):i}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Gt(t)===Gt(e)}function Jt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Xt(e[n],t))return n;return-1}function Kt(t,e,n){pt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{var a=!1===r[o].call(i,t,e,n);if(a)return}catch(er){Zt(er,i,"errorCaptured hook")}}}Zt(t,e,n)}finally{ft()}}function Yt(t,e,n,i,r){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&f(o)&&!o._handled&&(o.catch(function(t){return Kt(t,i,r+" (Promise/async)")}),o._handled=!0)}catch(er){Kt(er,i,r)}return o}function Zt(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(er){er!==t&&Qt(er,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!J&&!K||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout(R)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var oe=1,ae=new MutationObserver(ie),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(er){Kt(er,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function ue(t){he(t,ce),ce.clear()}function he(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var pe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function fe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Yt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),o=0;o<r.length;o++)Yt(r[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,r,a,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=pe(l),i(c)||(i(u)?(i(c.fns)&&(c=t[l]=fe(c,s)),o(h.once)&&(c=t[l]=a(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)i(t[l])&&(h=pe(l),r(h.name,e[l],h.capture))}function ve(t,e,n){var o=e.options.props;if(!i(o)){var a={},s=t.attrs,l=t.props;if(r(s)||r(l))for(var c in o){var u=T(c);ge(a,l,c,u,!0)||ge(a,s,c,u,!1)}return a}}function ge(t,e,n,i,o){if(r(e)){if(m(e,n))return t[n]=e[n],o||delete e[n],!0;if(m(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function xe(t){return s(t)?[yt(t)]:Array.isArray(t)?me(t):void 0}function _e(t){return r(t)&&r(t.text)&&a(t.isComment)}function me(t,e){var n,a,l,c,u=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=u.length-1,c=u[l],Array.isArray(a)?a.length>0&&(a=me(a,(e||"")+"_"+n),_e(a[0])&&_e(c)&&(u[l]=yt(c.text+a[0].text),a.shift()),u.push.apply(u,a)):s(a)?_e(c)?u[l]=yt(c.text+a):""!==a&&u.push(yt(a)):_e(a)&&_e(c)?u[l]=yt(c.text+a.text):(o(t._isVList)&&r(a.tag)&&i(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+n+"__"),u.push(a)));return u}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=we(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),At(!0))}function we(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&m(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var l=t[o].default;n[o]="function"===typeof l?l.call(e):l}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var o=t[i],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var c in n)n[c].every(Pe)&&delete n[c];return n}function Pe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t,e,i){var r,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!o&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=ke(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=Oe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),U(r,"$stable",a),U(r,"$key",s),U(r,"$hasNormal",o),r}function ke(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:xe(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Oe(t,e){return function(){return t[e]}}function De(t,e){var n,i,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length)),u=c.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)s=a[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function $e(t,e,n,i){var r,o=this.$scopedSlots[t];o?(n=n||{},i&&(n=M(M({},i),n)),r=o(n)||e):r=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},r):r}function Me(t){return Ut(this.$options,"filters",t,!0)||F}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Re(t,e,n,i,r){var o=B.keyCodes[e]||n;return r&&i&&!B.keyCodes[e]?Ce(r,i):o?Ce(o,t):i?T(i)!==e:void 0}function Ee(t,e,n,i,r){if(n)if(l(n)){var o;Array.isArray(n)&&(n=C(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||B.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=w(a),c=T(a);if(!(l in o)&&!(c in o)&&(o[a]=n[a],r)){var u=t.on||(t.on={});u["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Fe(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),je(i,"__static__"+t,!1),i)}function Le(t,e,n){return je(t,"__once__"+e+(n?"_"+n:""),!0),t}function je(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ie(t[i],e+"_"+i,n);else Ie(t,e,n)}function Ie(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ze(t,e){if(e)if(u(e)){var n=t.on=t.on?M({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(r,o):o}}else;return t}function Ne(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?Ne(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function Be(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function We(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Le,t._n=v,t._s=d,t._l=De,t._t=$e,t._q=L,t._i=j,t._m=Fe,t._f=Me,t._k=Re,t._b=Ee,t._v=yt,t._e=gt,t._u=Ne,t._g=ze,t._d=Be,t._p=We}function Ue(t,e,i,r,a){var s,l=this,c=a.options;m(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=o(c._compiled),h=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=we(c.inject,r),this.slots=function(){return l.$slots||Te(t.scopedSlots,l.$slots=Ae(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Te(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,i){var o=rn(s,t,e,n,i,h);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return rn(s,t,e,n,i,h)}}function Ve(t,e,i,o,a){var s=t.options,l={},c=s.props;if(r(c))for(var u in c)l[u]=Vt(u,c,e||n);else r(i.attrs)&&Ge(l,i.attrs),r(i.props)&&Ge(l,i.props);var h=new Ue(i,l,a,o,t),p=s.render.call(null,h._c,h);if(p instanceof dt)return qe(p,i,h.parent,s,h);if(Array.isArray(p)){for(var f=xe(p)||[],d=new Array(f.length),v=0;v<f.length;v++)d[v]=qe(f[v],i,h.parent,s,h);return d}}function qe(t,e,n,i,r){var o=xt(t);return o.fnContext=n,o.fnOptions=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Ge(t,e){for(var n in e)t[w(n)]=e[n]}He(Ue.prototype);var Xe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Xe.prepatch(n,n)}else{var i=t.componentInstance=Ye(t,wn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;kn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Mn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$n(e,!0):e.$destroy())}},Je=Object.keys(Xe);function Ke(t,e,n,a,s){if(!i(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=dn(u,c),void 0===t))return fn(u,e,n,a,s);e=e||{},pi(t),r(e.model)&&tn(t.options,e);var h=ve(e,t,s);if(o(t.options.functional))return Ve(t,h,e,n,a);var p=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:p,tag:s,children:a},u);return v}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var i=Je[n],r=e[i],o=Xe[i];r===o||r&&r._merged||(e[i]=r?Qe(o,r):o)}}function Qe(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[i],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}var en=1,nn=2;function rn(t,e,n,i,r,a){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),o(a)&&(r=nn),on(t,e,n,i,r)}function on(t,e,n,i,o){if(r(n)&&r(n.__ob__))return gt();if(r(n)&&r(n.is)&&(e=n.is),!e)return gt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===nn?i=xe(i):o===en&&(i=ye(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),a=B.isReservedTag(e)?new dt(B.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Ut(t.$options,"components",e))?new dt(e,n,i,void 0,void 0,t):Ke(l,n,t,i,e)):a=Ke(e,n,t,i);return Array.isArray(a)?a:r(a)?(r(s)&&an(a,s),r(n)&&sn(n),a):gt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];r(l.tag)&&(i(l.ns)||o(n)&&"svg"!==l.tag)&&an(l,e,n)}}function sn(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function ln(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Ae(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return rn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return rn(t,e,n,i,r,!0)};var o=i&&i.data;Dt(t,"$attrs",o&&o.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,un=null;function hn(t){He(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Te(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{un=e,t=i.call(e._renderProxy,e.$createElement)}catch(er){Kt(er,e,"render"),t=e._vnode}finally{un=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=r,t}}function pn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function fn(t,e,n,i,r){var o=gt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function dn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=un;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var a=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return x(a,n)});var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},p=I(function(n){t.resolved=pn(n,e),s?a.length=0:h(!0)}),d=I(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),v=t(p,d);return l(v)&&(f(v)?i(t.resolved)&&v.then(p,d):f(v.component)&&(v.component.then(p,d),r(v.error)&&(t.errorComp=pn(v.error,e)),r(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},v.delay||200)),r(v.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function xn(t,e){cn.$on(t,e)}function _n(t,e){cn.$off(t,e)}function mn(t,e){var n=cn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function bn(t,e,n){cn=t,de(e,n||{},xn,_n,mn,t),cn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?$(n):n;for(var i=$(arguments,1),r='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Yt(n[o],e,i,e,r)}return e}}var wn=null;function An(t){var e=wn;return wn=t,function(){wn=e}}function Pn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,o=An(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Mn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Mn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,i,r,o){var a=r.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(o||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){At(!1);for(var u=t._props,h=t.$options._propKeys||[],p=0;p<h.length;p++){var f=h[p],d=t.$options.props;u[f]=Vt(f,d,e,t)}At(!0),t.$options.propsData=e}i=i||n;var v=t.$options._parentListeners;t.$options._parentListeners=i,bn(t,i,v),c&&(t.$slots=Ae(o,r.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Mn(t,"activated")}}function $n(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Mn(t,"deactivated")}}function Mn(t,e){pt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)Yt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),ft()}var Cn=[],Rn=[],En={},Fn=!1,Ln=!1,jn=0;function In(){jn=Cn.length=Rn.length=0,En={},Fn=Ln=!1}var zn=Date.now;if(J&&!Q){var Nn=window.performance;Nn&&"function"===typeof Nn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Nn.now()})}function Bn(){var t,e;for(zn(),Ln=!0,Cn.sort(function(t,e){return t.id-e.id}),jn=0;jn<Cn.length;jn++)t=Cn[jn],t.before&&t.before(),e=t.id,En[e]=null,t.run();var n=Rn.slice(),i=Cn.slice();In(),Un(n),Wn(i),ot&&B.devtools&&ot.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Mn(i,"updated")}}function Hn(t){t._inactive=!1,Rn.push(t)}function Un(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Vn(t){var e=t.id;if(null==En[e]){if(En[e]=!0,Ln){var n=Cn.length-1;while(n>jn&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Fn||(Fn=!0,le(Bn))}}var qn=0,Gn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++qn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=q(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(er){if(!this.user)throw er;Kt(er,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),ft(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Vn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(er){Kt(er,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Xn={enumerable:!0,configurable:!0,get:R,set:R};function Jn(t,e,n){Xn.get=function(){return this[e][n]},Xn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Xn)}function Kn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&oi(t,e.methods),e.data?Zn(t):Ot(t._data={},!0),e.computed&&ei(t,e.computed),e.watch&&e.watch!==nt&&ai(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;o||At(!1);var a=function(o){r.push(o);var a=Vt(o,e,n,t);Dt(i,o,a),o in t||Jn(t,"_props",o)};for(var s in e)a(s);At(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];0,i&&m(i,o)||H(o)||Jn(t,"_data",o)}Ot(e,!0)}function Qn(t,e){pt();try{return t.call(e,e)}catch(er){return Kt(er,e,"data()"),{}}finally{ft()}}var ti={lazy:!0};function ei(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var o=e[r],a="function"===typeof o?o:o.get;0,i||(n[r]=new Gn(t,a||R,R,ti)),r in t||ni(t,r,o)}}function ni(t,e,n){var i=!rt();"function"===typeof n?(Xn.get=i?ii(e):ri(n),Xn.set=R):(Xn.get=n.get?i&&!1!==n.cache?ii(e):ri(n.get):R,Xn.set=n.set||R),Object.defineProperty(t,e,Xn)}function ii(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ri(t){return function(){return t.call(this,this)}}function oi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:D(e[n],t)}function ai(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)si(t,n,i[r]);else si(t,n,i)}}function si(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function li(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=$t,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return si(i,t,e,n);n=n||{},n.user=!0;var r=new Gn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(o){Kt(o,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ci=0;function ui(t){t.prototype._init=function(t){var e=this;e._uid=ci++,e._isVue=!0,t&&t._isComponent?hi(e,t):e.$options=Ht(pi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Pn(e),yn(e),ln(e),Mn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Kn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Mn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pi(t){var e=t.options;if(t.super){var n=pi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=fi(t);r&&M(t.extendOptions,r),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function fi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function di(t){this._init(t)}function vi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=$(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gi(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function yi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ht(n.options,t),a["super"]=n,a.options.props&&xi(a),a.options.computed&&_i(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,z.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=M({},a.options),r[i]=a,a}}function xi(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function _i(t){var e=t.options.computed;for(var n in e)ni(t.prototype,n,e[n])}function mi(t){z.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function bi(t){return t&&(t.Ctor.options.name||t.tag)}function Si(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function wi(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var o in n){var a=n[o];if(a){var s=bi(a.componentOptions);s&&!e(s)&&Ai(n,o,i,r)}}}function Ai(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,x(n,e)}ui(di),li(di),Sn(di),Tn(di),hn(di);var Pi=[String,RegExp,Array],Ti={name:"keep-alive",abstract:!0,props:{include:Pi,exclude:Pi,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ai(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){wi(t,function(t){return Si(e,t)})}),this.$watch("exclude",function(e){wi(t,function(t){return!Si(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var i=bi(n),r=this,o=r.include,a=r.exclude;if(o&&(!i||!Si(o,i))||a&&i&&Si(a,i))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,x(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&Ai(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},ki={KeepAlive:Ti};function Oi(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:M,mergeOptions:Ht,defineReactive:Dt},t.set=$t,t.delete=Mt,t.nextTick=le,t.observable=function(t){return Ot(t),t},t.options=Object.create(null),z.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,ki),vi(t),gi(t),yi(t),mi(t)}Oi(di),Object.defineProperty(di.prototype,"$isServer",{get:rt}),Object.defineProperty(di.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(di,"FunctionalRenderContext",{value:Ue}),di.version="2.6.10";var Di="[object Array]",$i="[object Object]";function Mi(t,e){var n={};return Ci(t,e),Ri(t,e,"",n),n}function Ci(t,e){if(t!==e){var n=Fi(t),i=Fi(e);if(n==$i&&i==$i){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var o=t[r];void 0===o?t[r]=null:Ci(o,e[r])}}else n==Di&&i==Di&&t.length>=e.length&&e.forEach(function(e,n){Ci(t[n],e)})}}function Ri(t,e,n,i){if(t!==e){var r=Fi(t),o=Fi(e);if(r==$i)if(o!=$i||Object.keys(t).length<Object.keys(e).length)Ei(i,n,t);else{var a=function(r){var o=t[r],a=e[r],s=Fi(o),l=Fi(a);if(s!=Di&&s!=$i)o!=e[r]&&Ei(i,(""==n?"":n+".")+r,o);else if(s==Di)l!=Di?Ei(i,(""==n?"":n+".")+r,o):o.length<a.length?Ei(i,(""==n?"":n+".")+r,o):o.forEach(function(t,e){Ri(t,a[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==$i)if(l!=$i||Object.keys(o).length<Object.keys(a).length)Ei(i,(""==n?"":n+".")+r,o);else for(var c in o)Ri(o[c],a[c],(""==n?"":n+".")+r+"."+c,i)};for(var s in t)a(s)}else r==Di?o!=Di?Ei(i,n,t):t.length<e.length?Ei(i,n,t):t.forEach(function(t,r){Ri(t,e[r],n+"["+r+"]",i)}):Ei(i,n,t)}}function Ei(t,e,n){t[e]=n}function Fi(t){return Object.prototype.toString.call(t)}function Li(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function ji(t){return Cn.find(function(e){return t._watcher===e})}function Ii(t,e){if(!t.__next_tick_pending&&!ji(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(er){Kt(er,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function zi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ni=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=zi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var o=Object.create(null);Object.keys(r).forEach(function(t){o[t]=i.data[t]});var a=Mi(r,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,Li(n)})):Li(this)}};function Bi(){}function Wi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Bi),t.$options.render||(t.$options.render=Bi),"mp-toutiao"!==t.mpHost&&Mn(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Gn(t,i,R,{before:function(){t._isMounted&&!t._isDestroyed&&Mn(t,"beforeUpdate")}},!0),n=!1,t}function Hi(t,e){return r(t)||r(e)?Ui(t,Vi(e)):""}function Ui(t,e){return t?e?t+" "+e:t:e||""}function Vi(t){return Array.isArray(t)?qi(t):l(t)?Gi(t):"string"===typeof t?t:""}function qi(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Vi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Xi=b(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Ji(t){return Array.isArray(t)?C(t):"string"===typeof t?Xi(t):t}var Ki=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yi(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Yi(t[i],n.slice(1).join("."))}function Zi(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:$(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ii(this,t)},Ki.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;pt();var i,r=n.$options[t],o=t+" hook";if(r)for(var a=0,s=r.length;a<s;a++)i=Yt(r[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),ft(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yi(e||this,t)},t.prototype.__get_class=function(t,e){return Hi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Ji(t),i=e?M(e,n):n;return Object.keys(i).map(function(t){return T(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,o,a;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(o=Object.keys(t),n=Object.create(null),i=0,r=o.length;i<r;i++)a=o[i],n[a]=e(t[a],a,i);return n}return[]}}var Qi=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function tr(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qi.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;Qi.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=Qi}di.prototype.__patch__=Ni,di.prototype.$mount=function(t,e){return Wi(this,t,e)},tr(di),Zi(di),e["default"]=di}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=we,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return f(t)||p(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function x(t){return"[object Object]"===d.call(t)}function _(t,e){return v.call(t,e)}function m(){}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,w=b(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],P={},T={};function k(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?O(n):n}function O(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function D(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function $(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&(t[n]=k(t[n],e[n]))})}function M(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&D(t[n],e[n])})}function C(t,e){"string"===typeof t&&x(e)?$(T[t]||(T[t]={}),e):x(t)&&$(P,t)}function R(t,e){"string"===typeof t?x(e)?M(T[t],e):delete T[t]:x(t)&&M(P,t)}function E(t){return function(e){return t(e)||e}}function F(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function L(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(E(r));else{var o=r(e);if(F(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){L(t[n],e).then(function(t){return g(i)&&i(t)||t})}}}),e}function I(t,e){var n=[];Array.isArray(P.returnValue)&&n.push.apply(n,u(P.returnValue));var i=T[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,u(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function z(t){var e=Object.create(null);Object.keys(P).forEach(function(t){"returnValue"!==t&&(e[t]=P[t].slice())});var n=T[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function N(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a=z(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=L(a.invoke,n);return s.then(function(t){return e.apply(void 0,[j(a,t)].concat(r))})}return e.apply(void 0,[j(a,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var B={returnValue:function(t){return F(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},W=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,U=/^on/;function V(t){return H.test(t)}function q(t){return W.test(t)}function G(t){return U.test(t)}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(V(t)||q(t)||G(t))}function K(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return g(n.success)||g(n.fail)||g(n.complete)?I(t,N.apply(void 0,[t,e,n].concat(r))):I(t,X(new Promise(function(i,o){N.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,Q="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Q?.5:1:t<0?-n:n}var rt={promiseInterceptor:B},ot=Object.freeze({upx2px:it,interceptors:rt,addInterceptor:C,removeInterceptor:R}),at={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ut(t,e,n){return function(i){return e(pt(t,i,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x(e)){var o=!0===r?e:{};for(var a in g(n)&&(n=n(e,o)||{}),e)if(_(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:x(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=ut(t,e[a],i):r||(o[a]=e[a]);return o}return g(e)&&(e=ut(t,e,i)),e}function pt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),ht(t,e,n,{},i)}function ft(t,e){if(_(at,t)){var n=at[t];return n?function(e,i){var r=n;g(n)&&(r=n(e)),e=ht(t,e,r.args,r.returnValue);var o=[e];"undefined"!==typeof i&&o.push(i);var a=wx[r.name||t].apply(wx,o);return q(t)?pt(t,a,r.returnValue,V(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(r),g(i)&&i(r)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function xt(t,e,n){return t[e].apply(t,n)}function _t(){return xt(yt(),"$on",Array.prototype.slice.call(arguments))}function mt(){return xt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return xt(yt(),"$once",Array.prototype.slice.call(arguments))}function St(){return xt(yt(),"$emit",Array.prototype.slice.call(arguments))}var wt=Object.freeze({$on:_t,$off:mt,$once:bt,$emit:St});function At(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i=plus.webview.getWebviewById(t.__uniapp_mask_id);i=i.parent()||i;var r=t.show,o=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a.apply(t,i)}}}function Pt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&At(e),e}function Tt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var kt=Object.freeze({requireNativePlugin:Tt,getSubNVueById:Pt}),Ot=Page,Dt=Component,$t=/:/g,Mt=b(function(t){return w(t.replace($t,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return e.apply(t,[Mt(n)].concat(r))}}}function Rt(t,e){var n=e[t];e[t]=n?function(){Ct(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("onLoad",t),Ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("created",t),Dt(t)};var Et=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ft(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Lt(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Lt(t,e)}):void 0}function jt(t,e,n){e.forEach(function(e){Lt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function It(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function zt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Nt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Bt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return x(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=i[t])}),n}var Wt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ut(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),x(i)&&i.props&&a.push(e({properties:qt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){x(t)&&t.props&&a.push(e({properties:qt(t.props,!0)}))}),a}function Vt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function qt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ht(t)}}):x(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(x(i)){var r=i["default"];g(r)&&(r=r()),i.type=Vt(e,i.type),n[e]={type:-1!==Wt.indexOf(i.type)?i.type:null,value:r,observer:Ht(e)}}else{var o=Vt(e,i);n[e]={type:-1!==Wt.indexOf(o)?o:null,observer:Ht(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=m,t.preventDefault=m,t.target=t.target||{},_(t,"detail")||(t.detail={}),x(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var o=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===r}):x(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],a&&(n=t.__get_value(a,n))}}),n}function Jt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Xt(t,e)}),i}function Kt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(r&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Jt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||r?r&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Kt(t)):"string"===typeof t&&_(s,t)?l.push(s[t]):l.push(t)}),l}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,o=[];return i.forEach(function(n){var i=n[0],a=n[1],s=i.charAt(0)===Qt;i=s?i.slice(1):i;var l=i.charAt(0)===Zt;i=l?i.slice(1):i,a&&te(r,i)&&a.forEach(function(n){var i=n[0];if(i){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var a=r[i];if(!g(a))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(a.once)return;a.once=!0}o.push(a.apply(r,Yt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Ft(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},jt(o,ne),o}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=oe(n[r],e),i)return i}function ae(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function he(t){return ie(t,{mocks:re,initRefs:ce})}var pe=["onUniNViewMessage"];function fe(t){var e=he(t);return jt(e,pe),e}function de(t){return App(fe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,a=It(i.default,t),s=o(a,2),l=s[0],c=s[1],u={options:{multipleSlots:!0,addGlobalClass:!0},data:Bt(c,i.default.prototype),behaviors:Ut(c,ae),properties:qt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Nt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),zt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){u.methods[t]=function(e){return this.$vm[t](e)}}),n?u:[u,l]}function ge(t){return ve(t,{isPage:se,initRelation:le})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var xe=["onShow","onHide","onUnload"];function _e(t,e){e.isPage,e.initRelation;var n=ye(t);return jt(n.methods,xe,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function me(t){return _e(t,{isPage:se,initRelation:le})}xe.push.apply(xe,Et);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Se(t){var e=me(t);return jt(e.methods,be),e}function we(t){return Component(Se(t))}function Ae(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),lt.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Pe={};Object.keys(ot).forEach(function(t){Pe[t]=ot[t]}),Object.keys(wt).forEach(function(t){Pe[t]=wt[t]}),Object.keys(kt).forEach(function(t){Pe[t]=K(t,kt[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(at,t))&&(Pe[t]=K(t,ft(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Pe,t.UniEmitter=wt),wx.createApp=de,wx.createPage=we,wx.createComponent=Ae;var Te=Pe,ke=Te;e.default=ke}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var h=e.version,p="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",x="__DC_UUID_VALUE";function _(){var e="";if("n"===w()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=x}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,x)}}return e}var m=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var o in n)i[n[o]]=t[n[o]],r+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},S=function(){return parseInt((new Date).getTime()/1e3)},w=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==w()&&"qq"!==w()||(e=t.getAccountInfoSync().miniProgram.appId||""),e},P=function(){return"n"===w()?plus.runtime.version:""},T=function(){var t=w(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=w(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},O="First__Visit__Time",D="Last__Visit__Time",$=function(){var e=t.getStorageSync(O),n=0;return e?n=e:(n=S(),t.setStorageSync(O,n),t.removeStorageSync(D)),n},M=function(){var e=t.getStorageSync(D),n=0;return n=e||"",t.setStorageSync(D,S()),n},C="__page__residence__time",R=0,E=0,F=function(){return R=S(),"n"===w()&&t.setStorageSync(C,S()),R},L=function(){return E=S(),"n"===w()&&(R=t.getStorageSync(C)),E-R},j="Total__Visit__Count",I=function(){var e=t.getStorageSync(j),n=1;return e&&(n=e,n++),t.setStorageSync(j,n),n},z=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},N=0,B=0,W=function(){var t=(new Date).getTime();return N=t,B=0,t},H=function(){var t=(new Date).getTime();return B=t,t},U=function(t){var e=0;if(0!==N&&(e=B-N),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>d;return{residenceTime:e,overtime:i}}return{residenceTime:e}},V=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===w()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},q=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,o=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===w()?i.$mp&&i.$mp.page.is+o:i.$scope&&i.$scope.route+o||i.$mp&&i.$mp.page.route+o},G=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},X=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("f940").default,K=n("de82").default||n("de82"),Y=t.getSystemInfoSync(),Z=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:w(),mpn:A(),ak:K.appid,usv:h,v:P(),ch:T(),cn:"",pn:"",ct:"",t:S(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var t=U("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,H();var n=U();W();var i=q(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=q(this),e=V();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return W(),this.__licationShow=!1,void(this._lastPageRoute=t);H(),this._lastPageRoute=t;var n=U("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}W()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var t=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=S(),this.statData.sc=k(t.scene),this.statData.fvts=$(),this.statData.lvts=M(),this.statData.tvc=I(),"n"===w()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:S(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;K.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=S(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===w()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===w()&&t.setStorageSync("__UNI__STAT__DATA",a),!(L()<g)||n){var s=this._reportingRequestData;"n"===w()&&(s=t.getStorageSync("__UNI__STAT__DATA")),F();var l=[],c=[],u=[],p=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?l.push(n):3===t?u.push(n):c.push(n)})};for(var f in s)p(f);l.push.apply(l,c.concat(u));var d={usv:h,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===w()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==w()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){i._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=m(z(t)).options;e.src=f+"?"+n}},{key:"sendEvent",value:function(t,e){X(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return l(this,n),e=i(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,F(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,G(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,G(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},c744:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("66fd")),r=o(n("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}i.default.use(r.default);var a=new r.default.Store({state:{forcedLogin:!0,hasLogin:!1,userName:""},mutations:{login:function(t,e){t.userName=e||"新用户",t.hasLogin=!0},logout:function(t){t.userName="",t.hasLogin=!1}}}),s=a;e.default=s},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},de82:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__E19FB65"};e.default=i},eb1b:function(t,e,n){},f940:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/food/food_menu/index":{navigationBarTitleText:"食堂"},"pages/login/login":{navigationBarTitleText:"登录"},"pages/main/main":{navigationBarTitleText:"首页",titleNView:{buttons:[{text:"消息",redDot:!0,fontSize:"16",badgeText:"1"}]}},"pages/reg/reg":{navigationBarTitleText:"注册"},"pages/pwd/pwd":{navigationBarTitleText:"找回密码"},"pages/user/user":{navigationBarTitleText:"个人中心"}},globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#0faeff",backgroundColor:"#fbf9fe"}};e.default=i}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/m-icon/m-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-icon/m-icon.js';

define('components/m-icon/m-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-icon/m-icon"], {
  "7ba4": function ba4(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("dc51"),
        r = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = r.a;
  },
  "820a": function a(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  b3db: function b3db(t, n, e) {
    "use strict";

    var u = e("e662"),
        r = e.n(u);
    r.a;
  },
  dc51: function dc51(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        type: String,
        color: String,
        size: {
          type: [Number, String],
          default: 24
        }
      },
      computed: {
        fontSize: function fontSize() {
          var t = Number(this.size);
          return t = isNaN(t) ? 24 : t, "".concat(t, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  e496: function e496(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("820a"),
        r = e("7ba4");

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(i);
    }

    e("b3db");
    var c = e("2877"),
        o = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  e662: function e662(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-icon/m-icon-create-component', {
  'components/m-icon/m-icon-create-component': function componentsMIconMIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e496"));
  }
}, [['components/m-icon/m-icon-create-component']]]);
});
require('components/m-icon/m-icon.js');
__wxRoute = 'components/m-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-input.js';

define('components/m-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-input"], {
  "1b13": function b13(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/m-icon/m-icon").then(e.bind(null, "e496"));
    },
        i = {
      components: {
        mIcon: u
      },
      props: {
        type: String,
        value: String,
        placeholder: String,
        clearable: {
          type: [Boolean, String],
          default: !1
        },
        displayable: {
          type: [Boolean, String],
          default: !1
        },
        focus: {
          type: [Boolean, String],
          default: !1
        }
      },
      model: {
        prop: "value",
        event: "input"
      },
      data: function data() {
        return {
          showPassword: !1,
          isFocus: !1
        };
      },
      computed: {
        inputType: function inputType() {
          var t = this.type;
          return "password" === t ? "text" : t;
        },
        clearable_: function clearable_() {
          return "false" !== String(this.clearable);
        },
        displayable_: function displayable_() {
          return "false" !== String(this.displayable);
        },
        focus_: function focus_() {
          return "false" !== String(this.focus);
        }
      },
      methods: {
        clear: function clear() {
          this.$emit("input", "");
        },
        display: function display() {
          this.showPassword = !this.showPassword;
        },
        onFocus: function onFocus() {
          this.isFocus = !0;
        },
        onBlur: function onBlur() {
          var t = this;
          this.$nextTick(function () {
            t.isFocus = !1;
          });
        },
        onInput: function onInput(t) {
          this.$emit("input", t.target.value);
        }
      }
    };

    n.default = i;
  },
  "87b2": function b2(t, n, e) {
    "use strict";

    var u = e("be4d"),
        i = e.n(u);
    i.a;
  },
  "8fd7": function fd7(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("1b13"),
        i = e.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    n["default"] = i.a;
  },
  b84d: function b84d(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("f212"),
        i = e("8fd7");

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    e("87b2");
    var r = e("2877"),
        a = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  be4d: function be4d(t, n, e) {},
  f212: function f212(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-input-create-component', {
  'components/m-input-create-component': function componentsMInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b84d"));
  }
}, [['components/m-input-create-component']]]);
});
require('components/m-input.js');

__wxRoute = 'pages/food/food_menu/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/food/food_menu/index.js';

define('pages/food/food_menu/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/food/food_menu/index"],{"111a":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},2625:function(t,n,e){"use strict";e.r(n);var o=e("111a"),u=e("7099");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("fd5d");var f=e("2877"),r=Object(f["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"361b":function(t,n,e){"use strict";(function(t){e("eb1b"),e("921b");o(e("66fd"));var n=o(e("2625"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},7099:function(t,n,e){"use strict";e.r(n);var o=e("7f01"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},"765f":function(t,n,e){},"7f01":function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{productList:[],renderImage:!1}},methods:{loadData:function(){var n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add";t.request({url:"http://ygjs.mfmeat.top/index.php/api/food/menu",dataType:"json",success:function(t){console.log(e(t.data," at pages\\food\\food_menu\\index.vue:80")),t.data.forEach(function(t){n.productList.push(t)})}}),"refresh"===o&&(this.productList=[])}},onLoad:function(){var t=this;this.loadData(),setTimeout(function(){t.renderImage=!0},300)},onPullDownRefresh:function(){this.loadData("refresh"),setTimeout(function(){t.stopPullDownRefresh()},2e3)},onReachBottom:function(){this.loadData()}};n.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])},fd5d:function(t,n,e){"use strict";var o=e("765f"),u=e.n(o);u.a}},[["361b","common/runtime","common/vendor"]]]);
});
require('pages/food/food_menu/index.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"020b":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},"167a":function(n,t,e){},"3a71":function(n,t,e){"use strict";var o=e("167a"),i=e.n(o);i.a},"5d57":function(n,t,e){"use strict";e.r(t);var o=e("65af"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=i.a},"5db8":function(n,t,e){"use strict";e.r(t);var o=e("020b"),i=e("5d57");for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);e("3a71");var a=e("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},"65af":function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(e("24f6"));var i=e("2f62");function r(n){return n&&n.__esModule?n:{default:n}}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){u(n,t,e[t])})}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var s=function(){return e.e("components/m-input").then(e.bind(null,"b84d"))},c={components:{mInput:s},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,i.mapState)(["forcedLogin"]),methods:a({},(0,i.mapMutations)(["login"]),{initProvider:function(){var t=this,e=["weixin","qq"];n.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var o=0;o<n.provider.length;o++)~e.indexOf(n.provider[o])&&t.providerList.push({value:n.provider[o],image:"../../static/img/"+n.provider[o]+".png"});t.hasProvider=!0}},fail:function(n){console.error(o("获取服务供应商失败："+JSON.stringify(n)," at pages\\login\\login.vue:72"))}})},initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},bindLogin:function(){var t=this;if(11==this.account.length)if(this.password.length<6||this.password.length>16)n.showToast({icon:"none",title:"密码长度应该在6-16之间"});else{var e={account:this.account,password:this.password};n.request({url:"http://ygjs.mfmeat.top/index.php/api/login/login",data:{account:e.account,password:e.password},method:"POST",dataType:"json",success:function(e){1==e.data.code?(n.setStorageSync("tuser_id",e.data.id),t.toMain(e.data.username)):n.showToast({icon:"none",title:"用户账号或密码不正确"})},fail:function(){n.showToast({icon:"none",title:"登录失败"})}})}else n.showToast({icon:"none",title:"账号最短为 11 个字符"})},oauth:function(t){var e=this;n.login({provider:t,success:function(i){n.getUserInfo({provider:t,success:function(n){console.log(o(n," at pages\\login\\login.vue:171")),e.toMain(n.userInfo.nickName)}})},fail:function(n){console.error(o("授权登录失败："+JSON.stringify(n)," at pages\\login\\login.vue:178"))}})},toMain:function(t){this.login(t),this.forcedLogin?n.reLaunch({url:"../main/main"}):n.navigateBack()}}),onReady:function(){this.initPosition(),this.initProvider()}};t.default=c}).call(this,e("6e42")["default"],e("0de9")["default"])},b540:function(n,t,e){"use strict";(function(n){e("eb1b"),e("921b");o(e("66fd"));var t=o(e("5db8"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["b540","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0610":function(t,e,i){"use strict";(function(t){i("eb1b"),i("921b");n(i("66fd"));var e=n(i("b7a7"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"5dd9":function(t,e,i){},"9b5a":function(t,e,i){"use strict";i.r(e);var n=i("b99a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"9e07":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},a2fb:function(t,e,i){"use strict";var n=i("5dd9"),a=i.n(n);a.a},b7a7:function(t,e,i){"use strict";i.r(e);var n=i("9e07"),a=i("9b5a");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("a2fb");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},b99a:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a=r(i("607c")),o=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={},c={data:function(){return{cWidth:"",cHeight:"",tips:"",pixelRatio:1,serverData:"",itemCount:30,sliderMax:50}},computed:(0,o.mapState)(["forcedLogin","hasLogin","userName"]),onLoad:function(){var e=this;n=this,this.hasLogin||t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(i){i.confirm&&(e.forcedLogin?t.reLaunch({url:"../login/login"}):t.navigateTo({url:"../login/login"}))}}),this.tuser_id=t.getStorageSync("tuser_id"),this.body_id=1,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500)},onReady:function(){this.getServerData()},onNavigationBarButtonTap:function(e){t.showToast({title:0===e.index?"你点了消息按钮":"你点了关注按钮",icon:"none"}),this.setStyle(e.index,!1,"")},methods:{getServerData:function(){t.showLoading({title:"正在加载数据..."}),t.request({url:"http://ygjs.mfmeat.top/index.php/api/main/data",data:{tuser_id:n.tuser_id,body_id:n.body_id},method:"post",dataType:"json",success:function(t){n.fillData(t.data)},fail:function(){n.tips="网络错误，小程序端请检查合法域名"},complete:function(){t.hideLoading()}})},fillData:function(t){this.serverData=t,this.tips=t.tips;var e={categories:[],series:[]};e.categories=t.LineA.categories,e.series=t.LineA.series,this.showLineA("canvasLineA",e)},showLineA:function(t,e){var i;u[t]=new a.default((i={$this:n,canvasId:t,type:"line",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:5},dataLabel:!1,dataPointShape:!1,background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:e.categories,series:e.series,animation:!1,enableScroll:!0,xAxis:{disableGrid:!0,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left",scrollColor:"#DEE7F7"},yAxis:{gridType:"dash",splitNumber:5,min:80,max:150,format:function(t){return t+"斤"}},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio},s(i,"dataLabel",!0),s(i,"dataPointShape",!0),s(i,"extra",{lineStyle:"straight"}),i))},touchLineA:function(t){u["canvasLineA"].scrollStart(t)},moveLineA:function(t){u["canvasLineA"].scroll(t)},touchEndLineA:function(t){u["canvasLineA"].scrollEnd(t),u["canvasLineA"].showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})},setStyle:function(t,e,i){var n=getCurrentPages(),a=n[n.length-1],o=a.$getAppWebview();e?(o.showTitleNViewButtonRedDot({index:t,text:i}),o.setTitleNViewButtonBadge({index:t,text:i})):(o.hideTitleNViewButtonRedDot({index:t}),o.removeTitleNViewButtonBadge({index:t}))}}};e.default=c}).call(this,i("6e42")["default"])}},[["0610","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/reg/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/reg.js';

define('pages/reg/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"83fd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("24f6"));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/m-input").then(n.bind(null,"b84d"))},i={components:{mInput:u},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{var e={account:this.account,password:this.password,email:this.email};o.default.addUser(e),t.showToast({title:"注册成功"}),t.navigateBack({delta:1})}}}};e.default=i}).call(this,n("6e42")["default"])},"9b85":function(t,e,n){"use strict";n.r(e);var o=n("b024"),a=n("fd25");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},b024:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},d6f1:function(t,e,n){"use strict";(function(t){n("eb1b"),n("921b");o(n("66fd"));var e=o(n("9b85"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fd25:function(t,e,n){"use strict";n.r(e);var o=n("83fd"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a}},[["d6f1","common/runtime","common/vendor"]]]);
});
require('pages/reg/reg.js');
__wxRoute = 'pages/pwd/pwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pwd/pwd.js';

define('pages/pwd/pwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pwd/pwd"],{"3d17":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;u(e("24f6"));function u(n){return n&&n.__esModule?n:{default:n}}var o=function(){return e.e("components/m-input").then(e.bind(null,"b84d"))},i={components:{mInput:o},data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?n.showToast({icon:"none",title:"邮箱地址不合法"}):n.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}};t.default=i}).call(this,e("6e42")["default"])},5367:function(n,t,e){"use strict";(function(n){e("eb1b"),e("921b");u(e("66fd"));var t=u(e("f5c2"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},7194:function(n,t,e){"use strict";e.r(t);var u=e("3d17"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);t["default"]=o.a},b21f:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},f5c2:function(n,t,e){"use strict";e.r(t);var u=e("b21f"),o=e("7194");for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);var a=e("2877"),r=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports}},[["5367","common/runtime","common/vendor"]]]);
});
require('pages/pwd/pwd.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"29aa":function(e,t,n){"use strict";n.r(t);var o=n("bbe7"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},"5f84":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"851d":function(e,t,n){"use strict";(function(e){n("eb1b"),n("921b");o(n("66fd"));var t=o(n("ae58"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},ae58:function(e,t,n){"use strict";n.r(t);var o=n("5f84"),r=n("29aa");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);var a=n("2877"),i=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},bbe7:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={computed:r({},(0,o.mapState)(["hasLogin","forcedLogin"])),methods:r({},(0,o.mapMutations)(["logout"]),{bindLogin:function(){e.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&e.reLaunch({url:"../login/login"})}})};t.default=a}).call(this,n("6e42")["default"])}},[["851d","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

