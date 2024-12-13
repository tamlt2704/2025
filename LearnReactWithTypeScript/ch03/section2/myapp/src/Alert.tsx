import React, { useState } from 'react';

type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closeable?: boolean;
  onClose?: () => void;
};

function Alert({ type = 'information', heading, children, closeable, onClose }: Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }
  function handleCloseClick(): void {
    setVisible(false);
  }

  return (
    <div>
      <span> {heading} </span>
      {closeable && <button onClick={handleCloseClick}>X</button>}
    </div>
  );
}

export default Alert;
