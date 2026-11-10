// Compatibility exports for the original Framer component modules.
// All hooks and rendering use the SAME installed React 18 instance as the JSX app.
import React, * as ReactNamespace from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
const initialize = () => {};
const navigatorObject = typeof document !== 'undefined' ? globalThis.navigator : undefined;
const windowObject = typeof document !== 'undefined' ? globalThis.window : undefined;
const {Children,Component,Suspense,cloneElement,createContext,createElement,createRef,forwardRef,isValidElement,lazy,memo,startTransition,useCallback,useContext,useDeferredValue,useEffect,useId,useInsertionEffect,useLayoutEffect,useMemo,useReducer,useRef,useState,useSyncExternalStore} = React;
const createPortal = ReactDOM.createPortal;
export {
 useCallback as A,navigatorObject as B,React as C,Children as D,initialize as E,startTransition as F,Fragment as I,useReducer as L,useContext as M,useMemo as N,useLayoutEffect as O,useInsertionEffect as P,cloneElement as R,useRef as S,useId as T,windowObject as V,createRef as _,createPortal as a,useDeferredValue as b,initialize as c,createContext as d,createElement as f,Suspense as g,isValidElement as h,ReactDOM as i,ReactNamespace as j,useSyncExternalStore as k,Fragment as l,forwardRef as m,initialize as n,initialize as o,Component as p,createRoot as r,jsx as s,hydrateRoot as t,jsxs as u,lazy as v,memo as w,useEffect as x,useState as y,initialize as z
};
