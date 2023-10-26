import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
    title: string;
    className?: string;
}

const Title = ({ className, title }: Props) => {
  return (
    <>
    <h1 className={cn('text-2xl font-bold', className)}>{title}</h1>
    </>
  )
}

export default Title;