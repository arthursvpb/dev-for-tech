"use strict";
// https://www.typescriptlang.org/docs/handbook/basic-types.html
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
const failedResponse = ['{}', 400];
// Enum
var AppPermissions;
(function (AppPermissions) {
    AppPermissions["admin"] = "ADMIN";
    AppPermissions["editor"] = "EDITOR";
})(AppPermissions || (AppPermissions = {}));
const user = {
    level: AppPermissions.admin,
};
function logMessage(message, level) {
    return `[${level}]: ${message}`;
}
const result = logMessage('Success', 'INFO');
const profile = {
    name: 'My name',
    bio: 'My bio',
};
