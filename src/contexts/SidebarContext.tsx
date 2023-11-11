import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

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

export function useSidebarContext() {
  const value = useContext(SidebarContext);

  if (value === null) throw Error('Cannot use outside of SidebarProvider');

  return value;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  // Whenever we go to a larger screen from small screen, we will close set the isSmallOpen to be false.
  // This is when screen is small, open sideBar, increase size to desktop and then back to mobile again, the side bar should become close rather to remain open.
  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

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
