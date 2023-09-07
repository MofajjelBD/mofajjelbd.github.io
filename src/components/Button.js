import classN from '../styles/button.module.css';

export default function Button({ className, children, ...rest }) {
    return (
        <button className={`${classN.button} ${className}`} {...rest}>
            {children}
        </button>
    );
}