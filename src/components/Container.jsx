import {
  Button,
  ButtonContainer,
  Form,
  Image,
  Input,
  LogoContainer,
  ParentComponent,
} from "./style";
import Logo from "../assets/logo_formulario.png";
const Container = ({ inputValues, setInputValues, handleSubmit,handleClean }) => {
  return (
    <div>
      <ParentComponent>
        <LogoContainer>
          <Image src={Logo} alt="form_logo" />
        </LogoContainer>
      </ParentComponent>
      <Form id="form_registro" onSubmit={handleSubmit}>
        <Input
          onChange={(e) =>
            setInputValues({ ...inputValues, name: e.target.value })
          }
          placeHolder="name"
          fontColor="red"
        />
        <Input
          onChange={(e) =>
            setInputValues({ ...inputValues, lastName: e.target.value })
          }
          placeHolder="lastName"
          fontColor="blue"
        />
        <Input
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
          placeHolder="email"
          type="email"
          fontColor="green"
        />
        <Input
          onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
          placeHolder="password"
          type="password"
          fontColor="purple"
        />
      </Form>
      <ButtonContainer>
        <Button onClick={handleClean}>Cancel</Button>
        <Button form="form_registro" main={true}>
          Submit
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default Container;
