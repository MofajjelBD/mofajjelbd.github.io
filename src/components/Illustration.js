import classN from "../styles/illustration.module.css";

export default function Illustration({ singupimage }) {
    return (
        <>
            <div className={classN.illustration}>
                <img src={`${singupimage}`} alt="Signup" />
            </div>
        </>
    );
}