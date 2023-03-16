import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface IContainer {
  onClick: () => void;
}

export function Backdrop({ onClick }: IContainer) {
  return <BackdropWrap onClick={onClick} />;
}

export const OverlayContainer = ({
  children,
  onClick,
}: PropsWithChildren<IContainer>) => {
  return <Container>{children}</Container>;
};

const BottomContainer = ({ onClick }: IContainer) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backdropRoot =
    typeof document !== "undefined" && document.getElementById("backdrop-root");
  const overlayRoot =
    typeof document !== "undefined" && document.getElementById("overlay-root");
  return (
    <>
      {backdropRoot &&
        createPortal(<Backdrop onClick={onClick} />, backdropRoot)}
      {overlayRoot &&
        createPortal(<OverlayContainer onClick={onClick} />, overlayRoot)}
    </>
  );
};

export default BottomContainer;

const Container = styled.div`
  position: fixed;
  bottom: -20px;
  width: 375px;
  left: 50%;
  transform: translate(-50%);
  //height 지우면 돼요
  height: 300px;
  background-color: #eee;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  z-index: 100;

  //test용
  /* & div {
    width: 100%;
    height: 100px;
    background-color: yellow;
    margin: 0;
  } */
`;

const BackdropWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
