// Windows vs. POSIX
// path.basename(path[, ext])
// path.delimiter
// path.dirname(path)
// path.extname(path)
// path.format(pathObject)
// path.isAbsolute(path)
// path.join([...paths])
// path.normalize(path)
// path.parse(path)
// path.posix
// path.relative(from, to)
// path.resolve([...paths])
// path.sep
// path.toNamespacedPath(path)
// path.win32

// ON MAC
// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// The path.parse() method returns an object whose properties represent 
// significant elements of the path. Trailing directory separators are ignored.

// path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }


// ON WINDOWS
// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// " C:\      path\dir   \ file  .txt "
// └──────┴──────────────┴──────┴─────┘

// path.parse('C:\\path\\dir\\file.txt');
// // Returns:
// // { root: 'C:\\',
// //   dir: 'C:\\path\\dir',
// //   base: 'file.txt',
// //   ext: '.txt',
// //   name: 'file' }


// Format a path object into a string and return the result:

// var path = require('path');
// var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }

// var p = path.format(obj);
// console.log(p);