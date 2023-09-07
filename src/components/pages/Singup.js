import Illustration from "../Illustration";
import SingupForm from "../SingupForm";
import singupimage from '../../assets/images/signup.svg';


export default function Singup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration singupimage={`${singupimage}`} />
                <SingupForm />
            </div>
        </>
    );
}