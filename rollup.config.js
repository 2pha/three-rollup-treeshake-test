// Taken from:
// https://github.com/mrdoob/three.js/blob/dev/rollup.config.js
function glsl() {

  return {

    transform(code, id) {

      if (/\.glsl$/.test(id) === false) return;

      var transformedCode = 'export default ' + JSON.stringify(
        code
          .replace(/[ \t]*\/\/.*\n/g, '') // remove //
          .replace(/[ \t]*\/\*[\s\S]*?\*\//g, '') // remove /* */
          .replace(/\n{2,}/g, '\n') // # \n+ to \n
      ) + ';';
      return {
        code: transformedCode,
        map: { mappings: '' }
      };

    }

  };

}


import nodeResolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';
import closure from 'rollup-plugin-closure-compiler-js';

export default {
  entry: 'src/js/app.js',
  dest: 'build/script.js',
  format: 'iife',
  //sourceMap: 'inline',
  plugins: [
    nodeResolve({}),
    glsl(),
    uglify(),
    // closure({
    // 	compilationLevel: 'ADVANCED',
    // 	externs: './src/js/externs.js',
    // 	warningLevel: 'VERBOSE'
    // }),
    filesize()
  ]
};