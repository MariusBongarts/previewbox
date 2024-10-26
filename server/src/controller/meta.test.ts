import {Request, Response} from 'express';
import {getMetaData} from './meta';

describe('#getMetaData', () => {
  const url = 'https://web-highlights.com';
  it(`should return meta data for ${url}`, async () => {
    const req: Partial<Request> = {query: {url}};
    const res: Partial<Response> = {json: jest.fn()};
    await getMetaData(req as any, res as any);
    expect(res.json).toHaveBeenCalledWith({
      title: 'Web Highlights - PDF & Web Highlighter',
      description:
        'Best highlighter for the web. Just like you do on books, highlight on any web page or PDF, and take notes. Organize with tags and find your research in the app.',
      author: null,
      url: 'https://web-highlights.com/',
      imageUrl: 'https://web-highlights.com/images/wh-thumbnail.png',
      imageAlt: null,
      favicon: 'https://web-highlights.com/favicon.ico',
      date: null,
      origin: 'https://web-highlights.com',
    });
  });
  const url2 = 'https://previewbox.link/';
  it(`should return meta data for ${url2}`, async () => {
    const req: Partial<Request> = {query: {url: url2}};
    const res: Partial<Response> = {json: jest.fn()};
    await getMetaData(req as any, res as any);
    expect(res.json).toHaveBeenCalledWith({
      title: 'Previewbox - Open-source Website Preview Components',
      description:
        'Effortlessly create URL thumbnail previews with our open-source link preview components. Free, built on web standards, and easy to use on any site.',
      author: null,
      url: 'https://previewbox.link/',
      imageUrl: 'https://previewbox.link/thumbnail.png',
      imageAlt: null,
      favicon: 'https://previewbox.link/favicon.ico',
      date: null,
      origin: 'https://previewbox.link/',
    });
  });
  const invalidUrl = 'invalid-url';
  it(`should return 400 for invalid url ${invalidUrl}`, async () => {
    const req: Partial<Request> = {query: {url: invalidUrl}};
    const res: Partial<Response> = {
      json: jest.fn(),
      status: jest.fn(),
    };
    await getMetaData(req as any, res as any);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
