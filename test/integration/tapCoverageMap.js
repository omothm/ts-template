/* eslint-disable */
/** @param {string} file The test filename to be mapped to production filename. */
module.exports = (file) => {
  // The file structure under `test/integration/` is the same as that under `src/`. Here, we replace
  // the former with the latter and strip `test` from the file extension.
  return file.replace(/^test\/integration/, 'src').replace(/\.test\.ts$/, '.ts');
};
