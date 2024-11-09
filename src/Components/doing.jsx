import Card from "../Card"
function Doing() {
  return (
    <div 
      className="p-1" 
      style={{ backgroundColor: '#e7ebf5', margin: 0, height: '100vh' }}
    >
      <div 
        className="row d-flex" 
        style={{ padding: '0.8rem 0.2rem' }}
      >
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-start">
          <p className="text1 m-0">Doing</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-end">
          <p className="text1 m-0"style={{border:'none',backgroundColor:'#dddddd',borderRadius:'0.2rem',padding:'0 0.2rem'}}>0</p>
        </div>
      </div>

      <div
        className="scrollable-content scrollbar" 
        id="style-1"
        style={{
          maxHeight: 'calc(100vh - 60px)',  
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <div className="row">
          {[...Array(9)].map((_, index) => (
            <div className="col-lg-12 col-md-12 col-sm-12 mb-3" key={index}>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Doing