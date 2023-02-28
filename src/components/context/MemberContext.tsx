// import { createContext, useEffect, useState } from "react";
// import Router from "next/router";
// import { kakaoInit } from "../login/kakaoInit";

// export const MemberContext = createContext({
//   user: { profileImg: "", nickname: "" },
//   //   kakaoLogin: () => {},
// });

// type props = {
//   children: React.ReactNode;
// };
// export function MemberContextProvider({ children }: props) {
//   type testttt = {
//     profileImg: string;
//     nickname: string;
//   };

//   const [user, setUser] = useState<testttt>();
//   const [isLogin, setIsLogin] = useState(false);

//   const kakaoLogin = async () => {
//     const kakao = kakaoInit();

//     await kakao.Auth.login({
//       success(res: any) {
//         console.log("token", res);
//         kakao.Auth.setAccessToken(res.access_token);
//         console.log("카카오 로그인 성공");

//         kakao.API.request({
//           url: "/v2/user/me",
//           success(res: any) {
//             console.log("카카오 인가 요청 성공");
//             const kakaoAccount = res.kakao_account;
//             console.log(kakaoAccount);
//             setUser({
//               profileImg: kakaoAccount.profile.profile_image_url,
//               nickname: kakaoAccount.profile.nickname,
//             });
//             localStorage.setItem(
//               "profileImg",
//               kakaoAccount.profile.profile_image_url
//             );
//             localStorage.setItem("nickname", kakaoAccount.profile.nickname);
//             setIsLogin(true);
//             Router.push("/");
//           },
//           fail(error: any) {
//             console.log(error);
//           },
//         });
//       },
//       fail(error: any) {
//         console.log(error);
//       },
//     });
//   };

//   //   const context = {
//   //     user: { profileImg: "", nickname: "" },
//   //     kakaoLogin: () => {},
//   //   };

//   return (
//     <MemberContext.Provider value={{ setUser }}>
//       {children}
//     </MemberContext.Provider>
//   );
// }
