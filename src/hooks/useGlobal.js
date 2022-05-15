import { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

export function useGlobal () {
    const context = useContext(GlobalContext);
    return context;
}