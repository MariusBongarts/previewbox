export function urlWithoutSchema(url) {
    return url?.replace(/https:\/\/|http:\/\/|www.|/gi, '') ?? '';
}
export function urlToOrigin(url) {
    try {
        url = urlWithoutSchema(url);
        url = url?.split('/')[0];
        return url ?? '';
    }
    catch (error) {
        return url ?? '';
    }
}
//# sourceMappingURL=url-helper.js.map