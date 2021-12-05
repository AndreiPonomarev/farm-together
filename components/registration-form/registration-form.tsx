import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import styles from './registrationForm.module.css'
import utilStyles from '../../styles/utils.module.css'
import { FormInput } from "./form-input";
import { FormFields } from "../../types/form";
import { sleep } from '../../utils'
import { CountrySuggest } from "./country-suggest";
import { Agreement } from "./agreement";
import { PhoneInput } from "./phone-input";
import { PasswordInput } from "./password-input";

export const RegistrationForm: React.FC = () => {

  const formMethods = useForm<FormData>();
  const { handleSubmit, trigger } = formMethods

  const [firstStep, setFirstStep] = React.useState(true)

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));
    fetch('/api/signup', { method: 'POST', body: JSON.stringify(data) })
  };

  const handleContinue = async () => {
    const result = await trigger()
    if (result) setFirstStep(false)
  }

  const handleBack = () => {
      setFirstStep(true)
  }

  return (
    <div className={styles.container}>
      {!firstStep && <button type="button" className={styles.backButton} onClick={handleBack}/>}

      <h3 className={utilStyles.headingL}>Become a farmland investor</h3>
      <FormProvider {...formMethods} >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {firstStep && (
            <>
              <FormInput
                name={FormFields.firstName}
                title='First name'
                type='text'
                options={{ required: "this is required", maxLength: 80 }}
              />
              <FormInput
                name={FormFields.lastName}
                title='Last name'
                type='text'
                options={{ required: "this is required", maxLength: 100 }}
              />
              <FormInput
                name={FormFields.email}
                title='Email'
                type='email'
                options={{ required: "this is required" }}
              />
              <CountrySuggest />
              <Agreement />
              <button type="button" className={styles.formButton} onClick={handleContinue}>Continue</button>
            </>)}

          {!firstStep && (
            <>
              <PasswordInput />
              <PhoneInput />
              <button type="submit" className={styles.formButton} >Sign Up</button>
            </>
          )}
        </form>
      </FormProvider>

    </div>
  );
}
