/**
 * TinaCMS Database Configuration
 * 
 * This file configures the database backend for TinaCMS:
 * - Local development: Uses local filesystem (no setup required)
 * - Production: Uses GitHub as content storage
 * 
 * For production, you need either:
 * 1. Tina Cloud (recommended) - set TINA_CLIENT_ID and TINA_TOKEN
 * 2. Self-hosted - set GITHUB_* environment variables
 */

import { createDatabase, createLocalDatabase } from '@tinacms/datalayer';
import { GitHubProvider } from 'tinacms-gitprovider-github';

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';

// GitHub-backed database for production
const githubDatabase = () => {
  return createDatabase({
    gitProvider: new GitHubProvider({
      branch: process.env.GITHUB_BRANCH || 'main',
      owner: process.env.GITHUB_OWNER!,
      repo: process.env.GITHUB_REPO!,
      token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN!,
    }),
  });
};

// Local filesystem database for development
const localDatabase = () => {
  return createLocalDatabase();
};

export default isLocal ? localDatabase() : githubDatabase();
