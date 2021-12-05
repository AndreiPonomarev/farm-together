import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { useRouter } from 'next/router'

export default function Terms() {
    const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit expedita sit unde nostrum fugiat nobis eius consectetur placeat cum corrupti labore, necessitatibus, voluptatem aspernatur excepturi nemo, modi fugit corporis dolore!
       <button onClick={() => router.back()}>go back</button>

    </Layout>
  )
}
