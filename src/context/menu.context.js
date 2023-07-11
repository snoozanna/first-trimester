import React, { createContext, useState } from 'react';

// we provide empty fn as defaults so it doesn't break the app if forget to pass a fn
export const MenuContext = createContext({
  menu: {
    isOpen: false,
    open: () => {},
    close: () => {},
    toggle: () => {},
  },
});

export function MenuProvider({ children }) {
  const [isOpen, setState] = useState(false);
  const open = () => setState(true);
  const close = () => setState(false);
  const toggle = () => {
    setState(!isOpen);
  };
  return (
    <MenuContext.Provider
      value={{
        isOpen,
        open,
        close,
        toggle,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
export default MenuContext;
