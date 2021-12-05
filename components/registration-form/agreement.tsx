import React from "react";
import { useFormContext } from "react-hook-form";
import Link from "next/link";

import styles from './registrationForm.module.css'

export const Agreement: React.FC = () => {

  const { register, formState: { errors } } = useFormContext();


  return (
    <section className={styles.agreementSection}>
      <input
        className={styles.formCheckbox}
        type="checkbox"
        {...register('agreement', { required: "this is required", })}
      />
      <span>
        I agree to the&nbsp;
        <Link href="/terms"><a className={styles.agreementLink}>terms of service</a></Link>,&nbsp;
        <Link href="/terms"><a className={styles.agreementLink}>privacy policy</a></Link>,&nbsp;
        <Link href="/terms"><a className={styles.agreementLink}>electronic communications disclosure</a></Link>, and&nbsp;
        <Link href="/terms"><a className={styles.agreementLink}>electronic funds transfer disclosure</a></Link>
      </span>
    </section>
  )
}
