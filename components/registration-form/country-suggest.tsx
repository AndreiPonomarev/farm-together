import React from "react";
import { useFormContext } from "react-hook-form";

import styles from './registrationForm.module.css'
import { FormFields } from "../../types/form";
import useSWR from "swr";
import { fetcher } from "../../utils";
import classNames from "classnames";

export const CountrySuggest: React.FC = () => {

    const { register, formState: { errors } } = useFormContext();

    const [active, setActive] = React.useState(false)

    const { data: countries = [], error: countriesError } = useSWR('/api/countries', fetcher)

    return (
        <section className={styles.inputSection}>
            <label
                className={classNames(styles.label, { [styles.active]: active })}
                htmlFor='country'>Country</label>
            <input
                type='text'
                className={styles.formInput}
                name={FormFields.country}
                list='countries'
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                {...register('country', { required: "this is required" })}
                placeholder={errors.country && errors.country?.message}

            />
            <datalist id='countries'>
                {countries.map((country) =>
                    <option key={country.code} value={country.name} />
                )}
            </datalist>
        </section>
    )
}
