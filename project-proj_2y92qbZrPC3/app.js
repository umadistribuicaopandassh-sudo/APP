class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Algo deu errado</h1>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white text-black rounded-lg text-xl font-bold"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const bgUrl = "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

    return (
      <div 
        className="h-screen w-screen flex flex-col items-center justify-center bg-black bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${bgUrl})` }}
        data-name="app" 
        data-file="app.js"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 
            className="text-white font-extrabold tracking-tight drop-shadow-2xl"
            style={{ fontSize: '10vw', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            Bom dia!
          </h1>
          <p 
            className="text-white/90 font-medium mt-4 drop-shadow-lg"
            style={{ fontSize: '3vw', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Que você tenha um excelente dia.
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);