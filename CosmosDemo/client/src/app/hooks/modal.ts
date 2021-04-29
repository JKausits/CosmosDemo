import React, { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>();

  const open = useCallback(
    (content: React.ReactNode) => {
      setIsOpen(true);
      setContent(content);
    },
    [setIsOpen]
  );
  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return { isOpen, close, open, content };
};
