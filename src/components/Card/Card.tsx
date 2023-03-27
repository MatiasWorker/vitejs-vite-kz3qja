import { ReactNode } from 'react';
import './Card.css';

export function Card({ children }: { children: ReactNode }) {
  return <div className="Card">{children}</div>;
}
