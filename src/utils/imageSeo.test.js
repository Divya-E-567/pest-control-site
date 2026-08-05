import { getImageSeoData, getImageObjectSchema } from './imageSeo';

describe('image SEO metadata', () => {
  it('returns metadata for the real Eco Pest India logo asset', () => {
    const data = getImageSeoData('/images/1.jpeg');

    expect(data).toBeDefined();
    expect(data.src).toContain('/images/1.jpeg');
    expect(data.alt).toContain('Eco Pest India');
    expect(data.width).toBeGreaterThan(0);
    expect(data.height).toBeGreaterThan(0);
    expect(data.loading).toBe('eager');
    expect(data.fetchPriority).toBe('high');
  });

  it('builds an ImageObject schema for the logo asset', () => {
    const schema = getImageObjectSchema('/images/1.jpeg');

    expect(schema['@type']).toBe('ImageObject');
    expect(schema.url).toContain('/images/1.jpeg');
    expect(schema.caption).toContain('Eco Pest India');
  });

  it('keeps the homepage termite original source intact for render output', () => {
    const data = getImageSeoData('/images/20.jpeg');

    expect(data.src).toContain('/images/20.jpeg');
    expect(data.alt).toContain('termite treatment image reused from the homepage');
    expect(data.loading).toBe('eager');
  });

  it('keeps the homepage cockroach original source intact for render output', () => {
    const data = getImageSeoData('/images/25.jpeg');

    expect(data.src).toContain('/images/25.jpeg');
    expect(data.alt).toContain('cockroach control image reused from the homepage');
    expect(data.loading).toBe('eager');
  });

  it('correctly maps .webp equivalent for homepage assets', () => {
    const data = getImageSeoData('/images/20.webp');

    expect(data.src).toContain('/images/20.webp');
    expect(data.alt).toContain('termite treatment image reused from the homepage');
    expect(data.loading).toBe('eager');
  });

  it('resolves named webp assets correctly without falling back to logo', () => {
    const data = getImageSeoData('/images/termite-treatment-kochi.webp');

    expect(data.alt).toContain('Termite treatment inspection');
    expect(data.loading).toBe('lazy');
  });
});

