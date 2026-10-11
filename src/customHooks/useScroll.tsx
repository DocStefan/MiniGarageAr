import { createContext, useContext, type ReactNode } from "react";

type ScrollContextType = (elementId: string) => void;

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("useScroll debe utilizarse dentro de un ScrollProvider");
  }

  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const scrollToElement = (elementId: string): void => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  return (
    <ScrollContext.Provider value={scrollToElement}>
      {children}
    </ScrollContext.Provider>
  );
};