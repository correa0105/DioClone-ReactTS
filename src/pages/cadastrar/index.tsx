import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { IFormData } from "./types";
import { api } from "../../services/api"
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles"

const Cadastrar = () => {
    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string().email("Email não é válido.").required('Cambo obrigatório.'),
        password: yup.string().min(3, "A senha deve conter no minimo 3 caracteres.").required('Cambo obrigatório.'),
    }).required();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`)
            if (data.length === 1) {
                navigate("/feed")
            } else {
                alert("Email ou senha, invalido!")
            }
        } catch {
            alert("Houve um erro, tente novamente!")
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora gratis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" control={control} placeholder="Nome completo" type="text" leftIcon={<FaUser />} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <p>Ao clicar em "Criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</p>
                        <div>
                            <EsqueciText>Já tenho conta.</EsqueciText>
                            <CriarText>Fazer login</CriarText>
                        </div>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastrar }