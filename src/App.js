import logo from './logo.svg';
import './App.css';
import { history } from 'history';
import MainRoutes from './components/MainRoutes';

function App() {
  return (
    <div history={History}>
      <MainRoutes />
    </div>
  );
}

export default App;
