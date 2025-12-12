import { Container, Input } from "./styles"

export default function InputText({
  type,
  placeholder,
  value,
  onChange,
  name,
  disabled,
  style,
  ...rest
}) {
  return (
    <Container>
     <Input 
       type={type}
       placeholder={placeholder}
       value={value}
       onChange={onChange}
       name={name}
       disabled={disabled}
       style={style}
       {...rest}
     />
    </Container>
  )
}