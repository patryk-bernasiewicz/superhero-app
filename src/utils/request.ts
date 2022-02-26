const { REACT_APP_BACKEND_URL } = process.env;

export const request = <D>(
  endpoint: string,
  params: RequestInit = {
    method: 'GET',
  }
) => {
  return async function (): Promise<D> {
    const res = await fetch(`${REACT_APP_BACKEND_URL}/${endpoint}`, params);
    return await res.json();
  };
};
