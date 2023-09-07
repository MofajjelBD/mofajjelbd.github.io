import Illustration from "../Illustration";
import singupimage from '../../assets/images/login.svg';
import LoginForm from "../LoginForm";


export default function Singup() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration singupimage={`${singupimage}`} />
                <LoginForm />
            </div>
        </>
    );
}