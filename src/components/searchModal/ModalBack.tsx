import styled from "styled-components";

interface ModalBackProps {
  onClose: () => void;
}

export default function ModalBack({ onClose }: ModalBackProps) {
  return <ModalBackground onClick={onClose} />;
}

const ModalBackground = styled.div`
  position: fixed;
  top: 150px;
  left: 0;
  bottom: 0;
  width: calc(100% - var(--scroll-width, 0px));
  background-color: rgba(34, 34, 34, 0.6);
  z-index: 5;
`;
