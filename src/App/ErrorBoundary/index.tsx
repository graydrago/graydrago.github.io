import { Component, ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
  fallback: ReactNode;
  children: ReactNode;
};

interface ErrorBoundaryState {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: unknown) {
    return { hasError: true };
  }

  override componentDidCatch(error: unknown, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
