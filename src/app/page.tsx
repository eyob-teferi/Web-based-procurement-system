import LoginForm from '@/app/ui/login-form';

export default function Home() {
  return (
    <LoginForm loginEndpoint="http://localhost:1323/user/login" />
  )
    
}
