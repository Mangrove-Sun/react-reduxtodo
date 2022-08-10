import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './modules';
import TodoPage from './pages/Todo';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage/>}/>
          <Route path="/*" element={<p>Not Found</p>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
