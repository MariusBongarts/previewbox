export function urlWithoutSchema(url?: string | null): string {
  return url?.replace(/https:\/\/|http:\/\/|www.|/gi, '') ?? '';
}

export function urlToOrigin(url?: string | null): string {
  try {
    url = urlWithoutSchema(url);
    url = url?.split('/')[0];
    return url ?? '';
  } catch (error) {
    return url ?? '';
  }
}
