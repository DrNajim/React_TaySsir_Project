import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress(e) {
  const now = e.clientX;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default Progress;