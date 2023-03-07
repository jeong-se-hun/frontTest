import styled from 'styled-components';
import Router from 'next/router';
import Image from 'next/image';
import kakaoLoginIcon from '/public/images/common/kakao_login_medium_narrow.png';
import axios from 'axios';

const kakaoInit = () => {
  const kakao = (window as any).Kakao;
  if (!kakao.isInitialized()) kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);

  return kakao;
};

const genderMap: { [key: string]: string } = {
  male: 'M',
  female: 'F',
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

          success: async (res: any) => {
            if (
              !res.kakao_account.email ||
              res.kakao_account.email === '' ||
              !res.kakao_account.age_range ||
              !res.kakao_account.birthday ||
              !res.kakao_account.gender
            ) {
              alert('이메일, 성별, 연령대, 생일을 필수로 동의해 주셔야 가입이 진행됩니다.');
              kakao.API.request({
                url: '/v1/user/unlink',
              });
            } else {
              await axios
                .post('/api/login', {
                  id: res.id,
                  email: res.kakao_account.email,
                  age: res.kakao_account.age_range.replace(/~/g, '-'),
                  birthday: res.kakao_account.birthday.replace(/(\d{2})(\d{2})/, '$1-$2'),
                  gender: genderMap[res.kakao_account.gender],
                  name: res.kakao_account.profile.nickname,
                })
                .then(({ data }) => {
                  if (data.success) Router.push('/');
                  else return alert(' 로그인에 실패하였습니다.');
                });
            }
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
