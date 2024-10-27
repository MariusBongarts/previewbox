// @ts-check

const components = ['link', 'article'];

import {exec} from 'child_process';
import chokidar from 'chokidar';

const watchMode = process.argv.includes('--watch');

function buildComponent(component) {
  const buildCommandTsc = `tsc --declaration --emitDeclarationOnly --outFile dist/${component}${
    component !== 'index' ? `/index` : ``
  }.d.ts${watchMode ? ' --watch' : ''}`;
  const buildCommandEsbuild = `esbuild src/${component}.ts --bundle --outfile=dist/${component}${
    component !== 'index' ? `/index` : ``
  }.js --sourcemap${watchMode ? ' --watch' : ''}`;

  exec(buildCommandEsbuild, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
  });
  exec(buildCommandTsc, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  });
}

function buildAllComponents() {
  buildComponent('index');
  components.forEach(buildComponent);
}

if (watchMode) {
  const watcher = chokidar.watch('src/**/*.ts');
  watcher.on('change', (path) => {
    console.log(`${path} has changed. Rebuilding...`);
    buildAllComponents();
  });
} else {
  buildAllComponents();
}
