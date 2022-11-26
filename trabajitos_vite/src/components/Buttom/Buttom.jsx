import classes from './Buttom.module.scss';

const Button = ({ children, className, ...rest }) => {
  return (
    <button className={`${classes["Button"]} ${className ?? ""}`} {...rest}>
      {/* Texto o contenido del botón */}
      {children}
    </button>
  )
}

export default Button;

