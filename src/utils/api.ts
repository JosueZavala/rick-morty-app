export function getApiUrl() {
  const url = process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL;
  return `${url}/api`;
}
