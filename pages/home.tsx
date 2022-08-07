import type { NextPage } from "next"
import { GetStaticProps } from 'next'
import Head from "next/head"
import prisma from 'lib/prisma'
import { ConfessionsContainer } from 'components/ConfessionsContainer'

export const getStaticProps: GetStaticProps = async () => {
  const confessions = await prisma.confession.findMany()
  return {
    props: { confessions }
  }
}

const Home: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>Confession Wall</title>
        <meta name="description" content="Confession Wall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ConfessionsContainer confessionsArray={props.confessions} />
      </div>
    </div>
  )
}

export default Home
