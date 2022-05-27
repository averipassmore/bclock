
import './App.css';
import MainRoutes from './components/MainRoutes';

function App() {
  let resizeTimer;
  window.addEventListener('resize', () => {
    console.log('resizing');
    document.body.classList.add('Resize-transition-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('Resize-transition-stopper');
    }, 400)
  })
  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App;
