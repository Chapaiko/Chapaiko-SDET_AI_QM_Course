// path: src/test-data/accountData.ts
import { sampleUser } from './userData';

/**
 * Represents reusable signup account data.
 */
export interface SignupAccount {
  address: string;
  address2: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  city: string;
  company: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  name: string;
  password: string;
  state: string;
  title: string;
  zipcode: string;
}

/**
 * Builds reusable signup account data with a unique email address.
 */
export function buildSignupAccount(): SignupAccount {
  const uniqueId = Date.now();

  return {
    address: '221 QA Lane',
    address2: 'Suite 5',
    birthDay: '10',
    birthMonth: '5',
    birthYear: '1995',
    city: 'Kyiv',
    company: 'Automation Exercise',
    country: 'Canada',
    email: `qa.engineer.${uniqueId}@example.com`,
    firstName: sampleUser.firstName,
    lastName: sampleUser.lastName,
    mobileNumber: '1234567890',
    name: `${sampleUser.firstName} ${sampleUser.lastName}`,
    password: 'P@ssw0rd123!',
    state: 'Ontario',
    title: 'Mr.',
    zipcode: 'A1B2C3'
  };
}