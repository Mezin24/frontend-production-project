import React, { ErrorInfo, ReactNode } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErorrBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component
  <ErrorBoundaryProps, ErorrBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:Error):ErorrBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <PageError />;
    }

    return children;
  }
}
