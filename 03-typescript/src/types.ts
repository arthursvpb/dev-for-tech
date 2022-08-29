// https://www.typescriptlang.org/docs/handbook/basic-types.html
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// Tuple
type response = [string, number];
const failedResponse: response = ['{}', 400];

// Enum
enum AppPermissions {
  admin = 'ADMIN',
  editor = 'EDITOR',
}
const user = {
  level: AppPermissions.admin,
};

// Union Type
type LogLevel = 'INFO' | 'ERROR' | 'DEBUG';
function logMessage(message: string, level: LogLevel) {
  return `[${level}]: ${message}`;
}
const result = logMessage('Success', 'INFO');

// Intersection Types
type User = {
  name: string;
};
type About = {
  bio: string;
};
type Profile = User & About;
const profile: Profile = {
  name: 'My name',
  bio: 'My bio',
};
