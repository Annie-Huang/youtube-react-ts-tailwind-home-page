import { Button } from './Button';

export const CategoryPills = () => {
  return (
    <div className='overflow-x-hidden relative'>
      {/* Don't need to add whitespace-nowrap because flex by default is nowrap already. */}
      <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-content]'>
        <Button>All</Button>
      </div>
    </div>
  );
};
