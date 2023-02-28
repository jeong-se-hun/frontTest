import styled from 'styled-components';
import Router from 'next/router';
import Image from 'next/image';
import kakaoLoginIcon from '/public/images/common/kakao_login_medium_narrow.png';

const kakaoInit = () => {
  const kakao = (window as any).Kakao;
  if (!kakao.isInitialized()) kakao.init('7c7d891609400a77093ab0fe9024e15b');

  return kakao;
};

export default function KakaoLogin() {
  const kakaoLogin = async () => {
    // 카카오 초기화
    const kakao = kakaoInit();

    // 카카오 로그인 구현
    kakao.Auth.login({
      success: () => {
        kakao.API.request({
          url: '/v2/user/me', // 사용자 정보 가져오기
          success: (res: any) => {
            // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push
            console.log(res);
            Router.push('/');
          },
          fail: (error: any) => {
            console.log(error);
          },
        });
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };

  return (
    <Button.KakaoButton onClick={kakaoLogin}>
      <Image src={kakaoLoginIcon} alt={''}></Image>
    </Button.KakaoButton>
  );
}
const Button = {
  KakaoButton: styled.button`
    display: inline-block;
    width: 184px;
    height: 45px;
    cursor: pointer;

    & img {
      width: 100%;
      height: 100%;
    }
  `,
};
