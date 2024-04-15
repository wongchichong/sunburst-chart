import { defineConfig } from 'vite'
import path from 'path'
// import dts from 'vite-plugin-dts'

const config = defineConfig({
    build: {
        minify: false,
        lib: {
            entry: ["./src/index.ts"],
            name: "sunburst-chart",
            formats: [/* 'cjs',  */'es' /*, 'umd'*/],
            fileName: (format: string, entryName: string) => `${entryName}.${format}.js`
        },
        sourcemap: true,
        rollupOptions: {
            external: ['voby', 'oby', "voby/jsx-runtime", "d3",
                "d3-hierarchy", "d3-interpolate", "d3-path", "d3-scale", "d3-selection", "d3-shape", "d3-transition", "accessor-fn",
                "float-tooltip", 'kapsule'
            ],
            output: {
                globals: {
                    'voby': 'voby',
                    'oby': 'oby',
                    'd3': 'd3',
                    "d3-selection": 'd3Selection',
                    "d3-scale": 'd3Scale',
                    "d3-hierarchy": 'd3Hierarchy',
                    "d3-shape": 'd3Shape',
                    "d3-path": 'd3Path',
                    "d3-interpolate": 'd3Interpolate',
                    "d3-transition": 'd3Transition',
                    "accessor-fn": 'accessorFn',
                    "float-tooltip": 'Tooltip',
                }
            }
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
    plugins: [
        // dts({ entryRoot: './src', outDir: './dist/types', exclude: './nodes_modules' })
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'voby/jsx-dev-runtime': process.argv.includes('dev') ? path.resolve('../woby/src/jsx/runtime') : 'voby/jsx-runtime',
            'voby/jsx-runtime': process.argv.includes('dev') ? path.resolve('../woby/src/jsx/runtime') : 'voby/jsx-runtime',
            'voby': process.argv.includes('dev') ? path.resolve('../woby/src') : 'voby'
        },
    },
})



export default config
