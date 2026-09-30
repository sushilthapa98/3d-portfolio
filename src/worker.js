// Serves the built site from dist/ and sends www and workers.dev visitors to
// the main domain, so search engines index a single address.
const CANONICAL_HOST = 'sushil-thapa.com.np';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (
      url.hostname === `www.${CANONICAL_HOST}` ||
      url.hostname === '3d-portfolio.thapasushil6.workers.dev'
    ) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
