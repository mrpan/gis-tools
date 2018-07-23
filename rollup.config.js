import {uglify} from 'rollup-plugin-uglify';
const config = (file, plugins) => ({
    input: 'src/main.js',
    output: {
        name: 'test',
        format: 'umd',
        indent: false,
        file
    },
    plugins
});

export default [
    config('test-dev.js', []),
    config('test-pro.js', [uglify()])
];