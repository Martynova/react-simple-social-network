import React from 'react';
import styles from './FormControl.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl +' '+ (hasError ? styles.error : '')}>
            {props.children}
            <div>
            <span className={styles.itemError}>{hasError ? meta.error : ''}</span>
            </div>
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>

    )}

    export const Input = (props) => {
        const {input, meta, child, ...restProps} = props;
        return (
            <FormControl {...props}>
                <input {...input} {...restProps} />
            </FormControl>
    
        )}