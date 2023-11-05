import { Home } from 'lucide-react';
import { ElementType } from 'react';

export const SideBar = () => {
  return (
    <aside className='sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden'>
      <SmallSidebarItem Icon={Home} title='Home' url='/' />
    </aside>
  );
};

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};
function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a href={url} className=''>
      <Icon className='w-6 h-6' />
      <span className='text-sm'>{title}</span>
    </a>
  );
}
