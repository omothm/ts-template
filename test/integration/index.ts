import { spawn } from 'node:child_process';
import { globSync } from 'glob';

function mapToSource(file: string) {
  return file
    .replace(/^test\/integration/, 'src')
    .replace(/\.test\.ts$/, '.ts')
    .replace(/\.all\.ts$/, '/**/*.ts');
}

const testFiles = globSync('test/integration/**/*.test.ts');
const includeFiles = testFiles.map((f) => `--include=${mapToSource(f)}`);

spawn('npx', ['c8', '--100', ...includeFiles, 'ava', ...testFiles], {
  stdio: 'inherit',
}).on('exit', (code) => process.exit(code ?? undefined));
