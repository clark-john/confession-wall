import type { NextPage } from "next";
import { GetServerSideProps } from 'next';
import Head from "next/head";
import prisma from 'lib/prisma';
import { ConfessionsContainer } from 'components/ConfessionsContainer';
import { ConfessionData as Confession } from 'utils/interfaces';

export const getServerSideProps: GetServerSideProps = async () => {
  const confessions = await prisma.confession.findMany();
  return {
    props: { confessions }
  };
};

type Confessions = { confessions: Array<Confession> };

const Home: NextPage<Confessions> = ({ confessions }) => {
  return (
    <div>
      <Head>
        <title>Confession Wall</title>
        <meta name="description" content="Confession Wall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {
          !confessions.length ? (
            <div style={{ 
              textAlign: "center",
              marginTop: "1.5rem"
            }}>
              No confessions at the moment.
            </div>
          ) : (
            <ConfessionsContainer confessionsArray={confessions} />
          )
        }
      </div>
    </div>
  );
};

export default Home;
