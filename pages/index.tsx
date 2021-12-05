import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { RegistrationForm } from '../components/registration-form/registration-form'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet" />
      </Head>

      <RegistrationForm/>
    </Layout>
  )
}
