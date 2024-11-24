import React, { FC, ReactNode } from "react"
import { useUnit } from "effector-react"
import { RouteInstance, RouteParams } from "atomic-router"

import { AnimatePresence } from "framer-motion";


export function useIsOpened(route: RouteInstance<any> | RouteInstance<any>[]) {
  return Array.isArray(route)
    ? useUnit(route.map((route) => route.$isOpened)).some(Boolean)
    : useUnit(route.$isOpened);
}

export interface RouteRecord<Props, Params extends RouteParams> {
  route: RouteInstance<Params> | RouteInstance<Params>[];
  view: React.ComponentType<Props>;
  layout?: FC<{ children: ReactNode }>;
}

export interface RoutesViewConfig {
  routes: RouteRecord<any, any>[];
  otherwise?: React.ComponentType<any>;
}

export function createRoutesView<Config extends RoutesViewConfig>(config: Config) {
  return function CreatedRoutes({ routeKey, ...props }: Omit<Config, keyof Config>) {
    const mergedConfig = { ...config, ...props }
    
    const routes = mergedConfig.routes.map((routeRecord) => {
      const isOpened = useIsOpened(routeRecord.route);
      return { ...routeRecord, isOpened };
    })

    return <AnimatePresence mode='wait'>
        {routes
            .filter(route => route.isOpened)
            .map(route => {
                const View = route.view

                return (
                    <View key={routeKey} />
                )
            })}
    </AnimatePresence>
  };
}