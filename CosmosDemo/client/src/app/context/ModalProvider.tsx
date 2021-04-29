import React, { useContext } from "react";
import { useModal } from "../hooks/modal";

interface ModalContextType {
  isOpen: boolean;
  close: () => void;
  open: (content: React.ReactNode) => void;
  content: React.ReactNode;
}

const ModalContext = React.createContext<ModalContextType>({
  isOpen: false,
  close: () => {},
  open: (content: React.ReactNode) => {},
  content: undefined,
});

export const ModalProvider = ({ children }) => {
  let { isOpen, close, open, content } = useModal();

  return (
    <ModalContext.Provider value={{ isOpen, close, open, content }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
