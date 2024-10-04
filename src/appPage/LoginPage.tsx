import dynamic from 'next/dynamic';

const Login = dynamic(() => import('@/components/login/index'));

export default function LoginPage() {
  return <Login />;
}
