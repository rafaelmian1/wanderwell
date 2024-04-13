import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        environment: 'jsdom',
        pool: 'forks',
        coverage: {
            provider: 'istanbul',
            exclude: [
                '__mocks__/**',
                'lib/db/**',
                'lib/types/**',
                '.next/**',
                'env.ts',
                '*.config.[jt]s',
            ],
        },
        globals: true,
        setupFiles: './tests/setupTest.ts',
    },
})
