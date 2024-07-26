import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import CarDetails from '../../components/CarDetails';

export default function CarPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <CarDetails id={id} />
    </Layout>
  );
}
