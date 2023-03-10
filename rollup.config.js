import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
    },
    plugins: [
        copy({
            targets: [
                { src: 'src/images/cat-cheetah-sheet.png', dest: 'dist/images' },
            ],
        }),
    ],
};
