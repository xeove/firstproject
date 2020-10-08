import React from "react";
import styles from "./form-control.module.css"

export const FormControl = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error;
    return (
        <div>
            <div>
                <span>{error && meta.error}</span>
            </div>
            <div className={styles.formControl + " " +  (error ? styles.error: "")}>
                {props.children}
            </div>
        </div>

    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}