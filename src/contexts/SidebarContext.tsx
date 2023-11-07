import { createContext, ReactNode, useState } from 'react';

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }
  function toggle() {
    isScreenSmall() ? setIsSmallOpen((s) => !s) : setIsLargeOpen((l) => !l);
  }
  function close() {
    isScreenSmall() ? setIsSmallOpen(false) : setIsLargeOpen(false);
  }

  return (
    <SidebarContext.Provider
      value={{ isLargeOpen, isSmallOpen, toggle, close }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
