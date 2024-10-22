const typescript = require  ('@rollup/plugin-typescript')
const packageJson = require('./package.json')
const postcss = require  ('rollup-plugin-postcss')
const url = require  ('@rollup/plugin-url')
const terser = require('@rollup/plugin-terser')
const copy = require('rollup-plugin-copy')
const dts = require('rollup-plugin-dts')

module.exports = [
  {
    input: 'src/index.ts',
    output: [ // ДЕЛАЕМ НЕСТАНДАРТНО -- 2 формата. Обычно один CJS. А мы еще ESM ебанем. Чтобы поддерживались import/ export а не только require. И если 2 варианта, то через МАССИВ.
      {
        file: packageJson.main, // Назовем финальный файл, путь к нашему конечному index.js файлу И ЧЕРЕЗ DIST (соответствие выходной папки dist как для tsconfig outDir)
        format: 'cjs' // И НАСТРОИМ НА 2 формата, как CJS (requires), так и ESM (import/export)
      },
      {
        file: packageJson.module,
        format: 'esm'
      }
    ],
    external: ['react/jsx-runtime', ...Object.keys(packageJson.devDependencies), ...Object.keys(packageJson.dependencies) ],
    plugins: [
      typescript(
        {
          tsconfig: './tsconfig.json',
          exclude: ['**/*.stories.tsx']
        } // указываем путь до нашего файла tsconfig
      ),
      postcss({
        extract: 'index.css',
        modules: true,
        use: ['sass'],
        minimize: true
      }),
      url({
        include: ['**/*.svg']
      }),
      terser(),
      copy({
        targets: [
          { src: 'src/core/assets/svgs/*', dest: 'dist/core/assets/svgs' } // Копируем SVG файлы
        ],
        // Опция verbose для дополнительной информации в консоли
        verbose: true
      })
    ]
  },
  {
    input: packageJson.types, // Объединенный выход для типов
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [
      dts.default()
    ],
    external: [/\.(css|scss|svg)$/] // Исключаем стили и SVG из деклараций типов
  }
];
