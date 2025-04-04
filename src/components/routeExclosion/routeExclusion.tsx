'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

// type WithRouterProps = {
//   router: NextRouter;
// };
// HOC para evitar renderizado en rutas específicas
export default function withRouteExclusion(
  WrappedComponent: React.ComponentType,
  excludedRoutes: string[]
) {
  // Crear un componente interno que use `useRouter`
  return function RouteExclusionComponent(props: any) {
    const pathname = usePathname();
    // console.log('pathname', pathname);

    if (excludedRoutes.includes(pathname)) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
