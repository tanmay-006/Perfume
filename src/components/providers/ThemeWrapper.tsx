'use client';

import { ReactNode } from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { isLoading } = useTheme();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
}
