export function urlFormat(url, ...keywords) {
  return url.concat(keywords.join('/'), '/')
}


export function queryparams(data: object) {
  const params = Object.keys(data)
    .map((key) => {
        return `${key}=${encodeURIComponent(data[key])}`;
    })
    .join('&')
  ;
  return `?${params}`;
}
