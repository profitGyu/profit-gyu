import { useState } from 'react';
import { Link } from 'react-router';
import * as S from './AuthForm.styled';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData.email, formData.password);
  };

  const isFormValid = () => {
    return formData.email.trim() !== '' && formData.password.trim() !== '';
  };

  return (
    <S.FormContainer>
      <S.FormTitle>로그인</S.FormTitle>
      <form onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.Label>이메일</S.Label>
          <S.Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="이메일을 입력하세요"
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="비밀번호를 입력하세요"
          />
        </S.FormGroup>

        <S.SubmitButton type="submit" disabled={!isFormValid()}>
          로그인
        </S.SubmitButton>

        <S.FormSwitch>
          계정이 없으신가요?
          <Link to="/auth/signup">회원가입</Link>
        </S.FormSwitch>
      </form>
    </S.FormContainer>
  );
};

export default LoginForm; 