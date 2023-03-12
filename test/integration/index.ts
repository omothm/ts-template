import { spawn } from 'node:child_process';

function mapToSource(file: string) {
  return file
    .replace(/^test\/integration/, 'src')
    .replace(/\.test\.ts$/, '.ts');
}

const testFiles = process.argv.slice(2);
const includeFiles = testFiles.map((f) => `--include=${mapToSource(f)}`);

spawn('npx', ['c8', '--100', ...includeFiles, 'ava', ...testFiles], {
  stdio: 'inherit',
}).on('exit', (code) => process.exit(code ?? undefined));
