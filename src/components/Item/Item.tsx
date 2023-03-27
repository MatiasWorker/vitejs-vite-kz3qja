import { ReactNode } from 'react';

export function Item({
  onChange,
  onRemove,
  checked,
  children,
}: {
  onChange: (checked: boolean) => void;
  onRemove: () => void;
  checked: boolean;
  children: ReactNode;
}) {
  return <div className="Item">{children}</div>;
}
