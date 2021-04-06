import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  margin: 0;
  outline: 0;
  appearance: none;
  tap-highlight-color: rgba(255,255,255,0);
  padding: 10px;
  font-size: 16px;
  font-size: 1em;
  background: #fff;
  border: 1px solid rgba(34,36,38,.15);
  color: rgba(0,0,0,.87);
  border-radius: 5px;
  box-shadow: 0 0 0 0 transparent inset;
  transition: color .1s ease,border-color .1s ease;
`;

export default Input;