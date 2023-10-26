import { cva } from 'class-variance-authority';

// secondary-hover is defined in tailwind.config.js, surprised tailwind can just add 'bg-' in front.
const buttonStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['bg-secondary', 'hover:bg-secondary-hover'],
      ghost: ['hover:bg-gray-100'],
    },
    size: {
      default: ['rounded', 'p-2'],
      // icon button styling:
      icon: [
        'rounded-full',
        'w-10',
        'h-10',
        'flex',
        'items-center',
        'justify-center',
        'p-2.5',
      ],
    },
  },
});

export const Button = ({ variant, size }) => {
  return <button className={buttonStyles({ variant, size })} />;
};
