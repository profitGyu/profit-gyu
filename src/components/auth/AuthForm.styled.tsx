import styled from 'styled-components';

export const FormContainer = styled.div`
  width: clamp(300px, 100%, 560px);
  padding: 40px 20px;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;

  &:focus {
    border-color: #000;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 20px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  background-color: #1a1a1a;
  border: none;
  border-radius: 6px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #333;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const FormSwitch = styled.p`
  margin-top: 16px;
  font-size: 14px;
  text-align: center;

   && a {
    margin-left: 8px;
    color: #1a1a1a;
    text-decoration: underline;
  }
`;

export const TermInfoText = styled.div`
  margin-block: 20px;
  font-size: 14px;
  line-height:1.5 ;
  color: #a0a4a8;


  && a{
    text-decoration: underline !important;
  }
`

export const HelpText = styled.p<{ isError: boolean }>`
  margin-top: 8px;
  font-size: 14px;
  color: ${props => props.isError ? '#dc2626' : '#16a34a'};
`;
