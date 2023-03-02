import Headtitle from '@/components/common/Headtitle';
import LoginForm from '@/components/login/LoginForm';

export default function Home() {
  return (
    <>
      <Headtitle title={'로그인'} smallTitle={'로그인'} />
      <LoginForm />
    </>
  );
}
