import Router from 'next/router';
import styled from 'styled-components';
import Button from '../common/Button';

type KakaoLoginType = {
  data?: any;
  children: string;
};

//초기화 작업-JS 키를 이용한 kakao 기능 수행
export const kakaoInit = () => {
  const kakao = (window as any).Kakao;
  if (kakao && !kakao.isInitialized()) {
    kakao.init('e82a6dc46da8b0ff618d98ffd025ca93');
  }
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
            Router.push('/kakao');
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
    <Button
      width="198px"
      background="#fee500"
      color="#191919"
      onClick={kakaoLogin}
    >
      카카오 로그인
    </Button>
  );
}
