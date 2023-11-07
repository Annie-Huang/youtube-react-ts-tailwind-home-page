import { createContext, ReactNode } from 'react';

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
  return (
    <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>
  );
}
