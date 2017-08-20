Testing out tree shaking a three.js app with rollup.  
Not sure if I'm using rollup propery.  

Rollup:  
Bundle size: 545.26 KB, Gzipped size: 112.07 KB  
  
Rollup + uglify:  
Bundle size: 305.55 KB, Gzipped size: 75.17 KB  
  
Rollup + Closure Compiler (SIMPLE):  
Bundle size: 308.5 KB, Gzipped size: 75.77 KB  
  
Rollup + Closure Compiler (ADVANCED):  
Bundle size: 241.33 KB, Gzipped size: 63.7 KB  
(shit load of compiler errors and doesn't work)
   
install: npm install  
build: npm run build  
