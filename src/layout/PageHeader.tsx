import logo from '../assets/Logo.png';
import { Bell, Menu, Upload, User } from 'lucide-react';
import { Button } from '../components/Button.tsx';

export const PageHeader = () => {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
      <div className='flex gap-4 items-center flex-shrink-0'>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
        <a href='/'>
          <img src={logo} alt='logo' className='h-6' />
        </a>
      </div>
      <div></div>
      <div className='flex flex-shrink-0 md:gap-2'>
        <Button variant='ghost' size='icon'>
          <Upload />
        </Button>
        <Button variant='ghost' size='icon'>
          <Bell />
        </Button>
        <Button variant='ghost' size='icon'>
          <User />
        </Button>
      </div>
    </div>
  );
};
