import ProgressBar from 'react-bootstrap/ProgressBar';

function Stripedbar() {
  return (
    <div>
        <div className="small text-gray-500">Oblong T-Shirt</div>         
      <ProgressBar className="mb-3" striped variant="success" animated now={40} />
      <div className="small text-gray-500">Gundam 90s Editions</div>
      <ProgressBar className="mb-3" striped variant="info"  animated now={20} />
      <div className="small text-gray-500">Rounded Hat</div>
      <ProgressBar className="mb-3" striped variant="warning" animated now={60} />
      <div className="small text-gray-500">Indomie Goreng</div>
      <ProgressBar className="mb-5" striped variant="danger" animated now={80} />
      
    </div>
  );
}

export default Stripedbar;