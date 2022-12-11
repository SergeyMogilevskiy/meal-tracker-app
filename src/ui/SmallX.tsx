import * as React from 'react';

export const SmallX = ({ onClick }: SmallXProps) => (
  <div className="small-x">
    <span className="the-x" onClick={onClick}>
      x
    </span>
  </div>
);

interface SmallXProps {
  onClick: React.MouseEventHandler<HTMLSpanElement>;
}
