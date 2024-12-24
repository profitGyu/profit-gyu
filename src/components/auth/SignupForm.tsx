import { useState } from 'react';
import { Link } from 'react-router';
import * as S from './AuthForm.styled';
import { ROUTES } from 'routes';
import useEmailValidation from '@hooks/validation/useEmailValidation';
import usePasswordValidation from '@hooks/validation/usePasswordValidation';

interface SignupFormProps {
  onSubmit: (email: string, password: string, name: string) => void;
}

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const { email, emailHelpText, onChangeEmailHandler } = useEmailValidation();
  const { password, handleChangePassword, passwordValidationResult } = usePasswordValidation({});
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, name);
  };

  const isFormValid = () => {
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      !emailHelpText?.isError &&
      password.trim() !== '' &&
      !passwordValidationResult?.isError
    );
  };

  return (
    <S.FormContainer>
      <S.FormTitle>회원가입</S.FormTitle>
      <form onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.Label>이름</S.Label>
          <S.Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>이메일</S.Label>
          <S.Input
            type="email"
            value={email}
            onChange={onChangeEmailHandler}
            placeholder="이메일을 입력하세요"
          />
          {emailHelpText && (
            <S.HelpText isError={emailHelpText.isError}>
              {emailHelpText.helpLabel}
            </S.HelpText>
          )}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="비밀번호를 입력하세요"
          />
          {passwordValidationResult && (
            <S.HelpText isError={passwordValidationResult.isError}>
              {passwordValidationResult.helpLabel}
            </S.HelpText>
          )}
        </S.FormGroup>

        <S.SubmitButton type="submit" disabled={!isFormValid()}>
          회원가입
        </S.SubmitButton>
        <S.FormSwitch>
          이미 계정이 있으신가요?
          <Link to={ROUTES.AUTH.login}>로그인</Link>
        </S.FormSwitch>

        <S.TermInfoText>
          회원가입과 동시에 파즈의 <Link to={ROUTES.TERM.use}>서비스 이용약관</Link>, <Link to={ROUTES.TERM.private}>개인정보 처리방침</Link> 개인정보 처리방침에 동의하게 됩니다.
        </S.TermInfoText>
      </form>
    </S.FormContainer>
  );
};

export default SignupForm; 