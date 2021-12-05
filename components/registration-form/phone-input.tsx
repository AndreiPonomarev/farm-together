import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormFields } from "../../types/form";
import MaskedInput from "react-input-mask"
import classNames from "classnames";

import styles from './registrationForm.module.css'
import { FormInput } from "./form-input";

export const PhoneInput: React.FC = () => {

    const { control, register, formState: { errors } } = useFormContext();

    const [active, setActive] = React.useState(false)

    const mask = ['+1 (', 999, ')', 999, '-', 999]
    return (
        <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <MaskedInput
                    mask="+1(999)999-9999"
                    maskChar=""
                    value={field.value}
                    onChange={field.onChange}
                >
                    {() => 
                    <FormInput
                        name={FormFields.phone}
                        title='Phone'
                        type='tel'
                        options={{ required: "this is required", maxLength: 20 }}
                        placeholder='+1(XXX)XXX-XXXX'
                    />}
                </MaskedInput>
            )}
        />
    )
}
