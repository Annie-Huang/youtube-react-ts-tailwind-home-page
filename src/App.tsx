import { PageHeader } from './layout/PageHeader.tsx';

export default function App() {
  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <div className='grid grid-col-[auto, 1fr] flex-grow-1 overflow-auto'>
        <div>Sidebar</div>
        <div></div>
      </div>
    </div>
  );
}
