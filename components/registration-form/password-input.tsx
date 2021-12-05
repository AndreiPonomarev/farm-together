import React from "react";
import { useFormContext } from "react-hook-form";

import styles from './registrationForm.module.css'
import { FormFields } from "../../types/form";
import classNames from "classnames";

export const PasswordInput: React.FC = () => {

    const { register, formState: { errors } } = useFormContext();

    const [active, setActive] = React.useState(false)
    const [hidden, setHidden] = React.useState(true)

    const handleShow = () => {
        setHidden(!hidden)
    }

    return (
        <section className={styles.inputSection}>
            <label
                className={classNames(styles.label, { [styles.active]: active })}
                htmlFor={FormFields.password}>
                Password
            </label>
            <div className={styles.passwordWrapper}>
                <input
                    className={classNames(styles.formInput, styles.password)}
                    name={FormFields.password}
                    type={hidden ? 'password' : 'text'}
                    {...register(FormFields.password, { required: "this is required", minLength: 6 })}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    placeholder='at least 6 characters'
                />
                <a className={classNames(styles.passwordControl, { [styles.view]: !hidden })} href="#" onClick={handleShow} />
            </div>
        </section>
    )
}
