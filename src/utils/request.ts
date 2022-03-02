import messages from './messages';

const { REACT_APP_BACKEND_URL } = process.env;

export const request = <D>(
  endpoint: string,
  params: RequestInit = {
    method: 'GET',
  }
) => {
  return async function (): Promise<D> {
    try {
      const res = await fetch(`${REACT_APP_BACKEND_URL}/${endpoint}`, params);

      if (res.status >= 400) {
        throw new Error(messages.backendError);
      }

      return await res.json();
    } catch (err) {
      throw new Error(messages.backendError);
    }
  };
};
