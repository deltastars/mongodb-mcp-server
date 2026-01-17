import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorCount: number;
  lastError: string;
}

/**
 * ErrorBoundary with Self-Healing System.
 * Detects critical errors and resets application state to ensure continuity.
 */
// Fix: Use React.Component explicitly to ensure inherited properties like state, setState, and props are recognized.
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

  // Fix: Correct state initialization in the constructor.
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorCount: 0,
      lastError: ''
    };
  }

  // Fix: getDerivedStateFromError is a static method that updates the state based on the error.
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorCount: 1, lastError: error.message };
  }

  /**
   * Catch critical rendering errors and perform self-healing by clearing
   * potentially corrupted local storage.
   */
  // Fix: componentDidCatch is used for side-effects like logging and storage cleanup.
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Critical System Error Detected:", error, errorInfo);
    
    // Fix: Access errorCount from the inherited state to determine if recovery is needed.
    if (this.state.errorCount > 0) {
        console.warn("Self-healing: Clearing corrupted localStorage and redirecting to stable state.");
        // Updated storage keys to v10 to stay synchronized with App.tsx.
        localStorage.removeItem('delta-page-v10');
        localStorage.removeItem('delta-products-v10');
    }
  }

  /**
   * Reset the error state manually.
   */
  // Fix: handleReset uses the inherited setState method to clear the error state.
  handleReset = () => {
    this.setState({ hasError: false, errorCount: 0 });
    window.location.href = '/';
  };

  render() {
    // Fix: Access hasError and lastError from the component state.
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center p-8 text-center" dir="rtl">
          <div className="max-w-xl">
            <div className="text-[10rem] mb-8 animate-pulse">🛡️</div>
            <h1 className="text-5xl font-black text-primary mb-6">نظام الحماية والاسترداد نشط</h1>
            <p className="text-2xl font-bold text-gray-500 mb-12 leading-relaxed">
                اكتشف محرك الاستقرار خللاً تقنياً بسيطاً في بيانات المتصفح. 
                لقد تم عزل المشكلة وتأمين بياناتك بنجاح.
            </p>
            <div className="flex flex-col gap-4">
                <button
                onClick={this.handleReset}
                className="bg-primary text-white px-12 py-5 rounded-[2rem] font-black text-2xl shadow-2xl hover:scale-105 transition-transform"
                >
                إعادة تشغيل المتجر (وضع آمن)
                </button>
                <p className="text-xs text-gray-300 font-mono">Error Log: {this.state.lastError}</p>
            </div>
          </div>
        </div>
      );
    }

    // Fix: Access children from the inherited props property.
    return this.props.children || null;
  }
}
