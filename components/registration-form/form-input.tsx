import React from "react";
import { useFormContext } from "react-hook-form";

import styles from './registrationForm.module.css'
import { InputProps } from "../../types/form";
import classNames from "classnames";

export const FormInput: React.FC<InputProps> = ({ name, title, type, options, placeholder }) => {

    const { register, formState: { errors } } = useFormContext();

    const [active, setActive] = React.useState(false)

    return (
        <section className={styles.inputSection}>
            <label
                className={classNames(styles.label, { [styles.active]: active })}
                htmlFor={name}>
                {title}
            </label>
            <input
                className={styles.formInput}
                name={name}
                type={type}
                {...register(name, options)}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                placeholder={errors[name] ? errors[name]?.message : placeholder}
            />
        </section>
    )
}
