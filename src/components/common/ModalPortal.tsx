import { ReactNode, useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  selector: string;
};

const ModalPortal = ({ children, selector }: ModalProps) => {
  const [modalOn, setModalOn] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      elementRef.current = document.querySelector(selector);
      setModalOn(true);
    }
  }, [selector]);

  if (!modalOn) return null;

  return elementRef.current ? createPortal(children, elementRef.current) : null;
};

export default ModalPortal;
