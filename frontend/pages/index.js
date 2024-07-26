import Head from 'next/head';
import Layout from '../components/Layout';
import CarList from '../components/CarList';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Car Record Management</title>
      </Head>
      <CarList />
    </Layout>
  );
}
