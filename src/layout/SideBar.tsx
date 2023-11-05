import { Home } from 'lucide-react';
import { ElementType } from 'react';

export const SideBar = () => {
  return (
    <aside className='sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden'>
      <SmallSidebarItem icon={Home} title='Home' url='/' />
    </aside>
  );
};
