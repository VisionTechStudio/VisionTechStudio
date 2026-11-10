export function normalizeBootstrap(source) {
 let value=source.replace(/^\/\/# sourceMappingURL=.*$/gm,'').trim();
 value=value.replace('let e=document.getElementById(`main`);`framerHydrateV2`in e.dataset?mi(!0,e):mi(!1,e)','/* React JSX entry owns mounting. */');
 const start=value.indexOf('EditorBar:');const end=value.indexOf(',adaptLayoutToTextDirection',start);
 if(start>=0&&end>=0)value=value.slice(0,start)+'EditorBar:void 0'+value.slice(end);
 value=value.replace('(function(){bi&&i(','(function(){false&&i(');
 value=value.replace('function getReactPageRoot(options){Te(hi,void 0);return fi(options)}','').replace('getReactPageRoot as getPageRoot','fi as getPageRoot');
 return value;
}
