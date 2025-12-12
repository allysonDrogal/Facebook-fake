import { Button } from "./styles";

export default function ButtonPage({
  children,
  onClick,
  type = "button",
  disabled,
  variant = "primary",
  ...props
}) {
  return (
    <Button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      {...props}
    >
    {children}
    </Button>
  )
}