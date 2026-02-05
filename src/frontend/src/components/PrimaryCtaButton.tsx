import { Button } from '@/components/ui/button';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PrimaryCtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'pink' | 'purple' | 'amber';
}

const PrimaryCtaButton = forwardRef<HTMLButtonElement, PrimaryCtaButtonProps>(
  ({ children, className, size = 'lg', variant = 'pink', ...props }, ref) => {
    const variantStyles = {
      pink: 'bg-birthday-pink hover:bg-birthday-pink/90 text-white border-white/30',
      purple: 'bg-birthday-purple hover:bg-birthday-purple/90 text-white border-white/30',
      amber: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-white/30',
    };

    return (
      <Button
        ref={ref}
        size={size}
        className={cn(
          'rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2',
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

PrimaryCtaButton.displayName = 'PrimaryCtaButton';

export default PrimaryCtaButton;
