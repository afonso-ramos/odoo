/* eslint-disable camelcase */
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { Config } from './config';
import { onError } from 'apollo-link-error';

import fetch from 'isomorphic-fetch';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createOddoLink = (settings: Config): any => {

  const link = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.warn(
          `%c [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`, 'background: #222; color: #FFA07A'
        )
      );

    if (networkError) console.warn(`[Network error]: ${networkError}`);
  });

  const httpLink = createHttpLink({
    uri: settings.graphqlBaseUrl,
    fetch
  });

  const apolloLink = ApolloLink.from([
    link.concat(httpLink)
  ]);

  return {
    apolloLink
  };
};

export { createOddoLink };
