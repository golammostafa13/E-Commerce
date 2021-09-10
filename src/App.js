import Sidebar from './components/Sidebar/Sidebar';
import Mainpage from './components/Mainpage/Mainpage';

function App({handleAddToCart}) {
  const appStyle = {
    display: 'flex',
    maxWidth: '100vw',
    height: '100vh',
    };
  return (
    <div style={appStyle}>
      <Sidebar></Sidebar>
      <Mainpage handleAddToCart={handleAddToCart}></Mainpage>
    </div>
  );
}

export default App;
