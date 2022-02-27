import { useNavigate } from 'react-router-dom';

import { Button } from '@components/Button/Button';
import { Message } from '@components/Message/Message';

interface NotFoundProps {
  backHref?: string;
  backText?: string;
}

export const NotFound = ({ backHref, backText }: NotFoundProps) => {
  const navigate = useNavigate();

  return (
    <Message
      kind="error"
      heading="Not found!"
      text="Whatever you're looking for, it's not here. Try going back a few steps!"
    >
      {backHref && (
        <Button type="button" onClick={() => navigate(backHref)} kind="primary">
          {backText || 'Go back'}
        </Button>
      )}
    </Message>
  );
};
