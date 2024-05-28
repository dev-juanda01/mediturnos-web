import { StyledButton } from "@/components/Login/StyledComponents/StyledButton";
import { StyledCard } from "@/components/Login/StyledComponents/StyledCard";
import { StyledContainer } from "@/components/Login/StyledComponents/StyledContainer";
import { StyledInput } from "@/components/Login/StyledComponents/StyledInput";
import {
    CardBody,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Label,
    Row,
} from "reactstrap";

const LoginView = () => {
    return (
        <StyledContainer>
            <Row>
                <Col md="12">
                    <StyledCard className="shadow-sm">
                        <CardBody>
                            <CardTitle tag="h4" className="text-center mb-4">
                                Iniciar Sesion
                            </CardTitle>
                            <Form>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <StyledInput
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <StyledInput
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </FormGroup>
                                <StyledButton
                                    color="primary"
                                    className="btn-block"
                                >
                                    Login
                                </StyledButton>
                            </Form>
                        </CardBody>
                    </StyledCard>
                </Col>
            </Row>
        </StyledContainer>
    );
};

export default LoginView;
