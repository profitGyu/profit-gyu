import { Component, ReactNode } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { IError } from 'types/error';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  text-align: center;
`;

const ErrorTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 24px;
  color: ${({ theme }) => theme.Colors.darkTheme.colors.error};
`;

const ErrorMessage = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.Colors.darkTheme.colors.text};
`;

const NavigateButton = styled.button`
  padding: 8px 16px;
  color: ${({ theme }) => theme.Colors.darkTheme.colors.background};
  background-color: ${({ theme }) => theme.Colors.darkTheme.colors.success[500]};
  border: 1px solid ${({ theme }) => theme.Colors.darkTheme.colors.success[500]};
  border-radius: 4px;
`;

interface Props {
  children: ReactNode;
  navigate: (path: string) => void;
}

interface State {
  hasError: boolean;
  error: IError | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: IError): State {
    return { hasError: true, error };
  }

  handleRetry = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.state.error?.code === 'USER-GET-INFO-B002') {
        this.props.navigate('/main');
      } else {
        toast.error(this.state.error?.detail || '알 수 없는 오류가 발생했습니다');
      }
      return (
        <ErrorContainer>
          <ErrorTitle>오류가 발생했습니다</ErrorTitle>
          <ErrorMessage>
            {this.state.error?.detail || '알 수 없는 오류가 발생했습니다'}
          </ErrorMessage>
          <NavigateButton onClick={() => this.props.navigate('/main')}>메인으로 가기 {'>'}</NavigateButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

// HOC to provide navigation
const withNavigation = (Component: typeof ErrorBoundary) => {
  return function WithNavigationWrapper(props: Omit<Props, 'navigate'>) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

export default withNavigation(ErrorBoundary);