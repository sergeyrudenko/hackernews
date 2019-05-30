import React from 'react';
import './index.css'


const Loading = () =>
  <div className="loader">Загрузка ...</div>

const withLoading = (Component) => ({ isLoading, ...rest }) =>
  isLoading
    ? <Loading />
    : <Component {...rest} />

const Button = ({ onClick, className = '', children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

const ButtonWithLoading = withLoading(Button);

export default Button;
export { ButtonWithLoading };
