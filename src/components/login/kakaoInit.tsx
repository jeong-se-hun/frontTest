// export const kakaoInit = () => {
//   const kakao = (window as any).Kakao;
//   if (!kakao.isInitialized()) {
//     kakao.init("4d7841cb712aab62f833b9bb27febc3c");
//   }

//   return kakao;
// };

export const kakaoInit = () => {
  const jsKey = "4d7841cb712aab62f833b9bb27febc3c";
  const kakao = (window as any).Kakao;
  if (kakao && !kakao.isInitialized()) {
    kakao.init(jsKey);
    // console.log(kakao.isInitialized());
  }
  return kakao;
};
