import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './router';

// 路由组件
const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;