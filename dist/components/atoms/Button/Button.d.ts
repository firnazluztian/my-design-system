import React from 'react';
declare const buttonVariants: (props?: any) => string;
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning' | 'outline-danger' | 'ghost' | 'link' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    fullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    isIconOnly?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
export { buttonVariants };
