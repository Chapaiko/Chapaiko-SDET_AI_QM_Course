// path: src/test-data/userData.ts
/**
 * Represents sample user data that can be reused across test suites.
 */
export interface TestUser {
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * Provides a shared sample user for test setup and data-driven scenarios.
 */
export const sampleUser: TestUser = {
  firstName: 'QA',
  lastName: 'Engineer',
  email: 'qa.engineer@example.com'
};
