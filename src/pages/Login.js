import { LoginForm } from 'components/loginForm/loginForm';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <div>
        <h1>LOGIN</h1>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};
