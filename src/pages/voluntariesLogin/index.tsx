import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Content, Form, Input, Container, Aside } from "./style";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import crypto1 from "../../assets/img/crypto1.svg";
import crypto2 from "../../assets/img/crypto2.svg";

type LoginData = {
  name: string;
  email: string;
};

const VoluntariesLogin = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("required field"),
    email: yup
      .string()
      .email("invalid email format")
      .required("required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleLogin: SubmitHandler<LoginData> = (data: LoginData) => {};

  return (
    <Container>
      <Aside>
        <img src={crypto1} alt="" />
      </Aside>

      <Content>
        <h2>Register</h2>
        <p className="description">
          Receive daily reports and information about cryptocurrencies
        </p>

        <Form onSubmit={handleSubmit(handleLogin)}>
          <p>Name</p>
          <span>{errors.name?.message}</span>
          <Input type="name" {...register("name")} />

          <p>Email</p>
          <span>{errors.email?.message}</span>
          <Input type="email" {...register("email")} />
          <Button type="submit">Send</Button>
          <div>
            Return to
            <Link to="/"> Home Page</Link>
          </div>
        </Form>
      </Content>
      <Aside>
        <img src={crypto2} alt="" />
      </Aside>
    </Container>
  );
};
export default VoluntariesLogin;
