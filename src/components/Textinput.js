import classN from '../styles/textinput.module.css';

export default function Textinput({ icon, ...rest }) {
    return (
        <div className={classN.textInput}>
            <input {...rest} />
            <span class="material-icons-outlined"> {icon} </span>
        </div>
    );
}