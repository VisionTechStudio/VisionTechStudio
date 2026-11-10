import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

export default defineConfig({
 plugins: [react(), {
  name: 'approved-site-content-data',
  transformIndexHtml() {
   return [{tag:'script',attrs:{type:'framer/handover',id:'__framer__handoverData'},children:readFileSync(new URL('./src/preserved/initial-data.json',import.meta.url),'utf8').replace(/<\/script/gi,'<\\/script'),injectTo:'body-prepend'}];
  },
 }],
 server:{host:'127.0.0.1',port:5173,strictPort:true},
 preview:{host:'127.0.0.1',port:4173},
 build:{rollupOptions:{output:{manualChunks(id){
  if(id.includes('node_modules'))return 'vendor';
  if(id.includes('/preserved/runtime/framer.'))return 'framer-core';
  if(id.includes('/preserved/runtime/motion.'))return 'motion';
 }}}},
});
