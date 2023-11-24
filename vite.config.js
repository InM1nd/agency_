import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/agency_'
  })

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//         output: {
//             manualChunks: {
//                 'vendor': [
//                     'react',
//                 ]
//             }
//         }
//     }
// }
// })

