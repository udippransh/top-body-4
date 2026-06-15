import './framer/styles.css';
import Component from './framer/top-body';

const Resolved: any = (Component as any).Responsive ?? Component;

export default function App() {
  return <Resolved />;
}
