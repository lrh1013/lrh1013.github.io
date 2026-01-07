import { Outlet } from 'react-router-dom';
import PageTransition from '@/components/common/PageTransition';

export default function PageLayout() {
  return (
    <PageTransition>
      <Outlet />
    </PageTransition>
  );
}
