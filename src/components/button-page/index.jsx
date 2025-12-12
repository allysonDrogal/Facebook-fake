import { Button } from "./styles";

export default function ButtonPage({
  children,
  onClick,
  type = "button",
  disabled,
  variant = "primary",
  style,
  ...props
}) {
  return (
    <Button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      style={style}
      {...props}
    >
    {children}
    </Button>
  )
}