import Incomplete from './Components/incomplete';
import Todo from './Components/todo';
import Doing from './Components/doing';
import Under from './Components/under';
import Overdue from './Components/overdue';
import Completed from './Components/completed';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div
      className="container-fluid px-0 py-3"
      style={{
        height: '100vh',
        overflowX: 'auto',
        display: 'flex',
        paddingBottom: '10px',
      }}
      id="horizontal-scroll-container"
    >
      <div 
        className="d-flex flex-nowrap justify-content-start m-2" 
        style={{ width: 'max-content' }}  
      >
        <div className="col-lg-2 col-md-4 col-sm-12 mb-3 color" style={{ minWidth: '200px' }}>
          <Incomplete />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 mb-3 color" style={{ minWidth: '200px' }}>
          <Todo />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 mb-3 color" style={{ minWidth: '200px' }}>
          <Doing />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 mb-3 color" style={{ minWidth: '200px' }}>
          <Under />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 mb-3 color" style={{ minWidth: '200px' }}>
          <Completed />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12 mb-3 color" style={{ minWidth: '200px' }}>
          <Overdue />
        </div>
      </div>
    </div>
  );
}

export default App;
