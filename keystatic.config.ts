import { config } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'YOUR_GITHUB_USERNAME',
      name: 'YOUR_REPO_NAME',
    },
  },

  auth: {
    kind: 'github',
  },
});
