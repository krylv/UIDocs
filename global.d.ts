/// <reference types="./types/svg" />
/// <reference types="vite/client" />
import type { router } from './src/routes/__root.tsx'

declare module '@tanstack/react-router' {
  interface Register {
    router: router
  }
}
declare module '*.svg' {
  import type * as React from 'react'

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default ReactComponent
}
