# Configuration

## Testing it yourself

Want to try out the integration on your local machine? Check out our explanatory video below:
<iframe width="100%" height="669" src="https://www.youtube.com/watch?v=FQMcbncdX_g&t=179s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

## Middleware
Odoo use graphql and jsonrpc calls 
- graphqlBaseUrl for **graphql**


```js
// packages/theme/middleware.config.js

const odooBaseUrl = process.env.BACKEND_BASE_URL || process.env.BASE_URL || 'https://vsfdemo.labs.odoogap.com/';
const graphqlBaseUrl = `${odooBaseUrl}graphql/vsf`;

module.exports = {
  integrations: {
    odoo: {
      location: '@vue-storefront/odoo-api/server',
      configuration: {
        odooBaseUrl,
        graphqlBaseUrl
      }
    }
  }
};

```

## Environment

This environment variables must be used for deployment or used on a dot env file

```bash

# Base Url should target the Odoo server
export BASE_URL=https://vsf.odoo.com/

# Backend base url will point for a private address if required internal access
# don't need to pass it unless you need a private access to the endpints
# export BACKEND_BASE_URL=https://vsf.odoogap.com/

# Public path should be defined on production for CDN access
# export PUBLIC_PATH=https://xyz.cloudfront.cdn.com

# Redis server for cache
export REDIS_HOST=<redis_host>
export REDIS_PORT=<redis_port>
# export REDIS_PASSWORD=<redis_password>
```