import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
