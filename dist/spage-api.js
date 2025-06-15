"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSiteReleases = getSiteReleases;
exports.createSiteRelease = createSiteRelease;
var client_1 = require("./client");
function getSiteReleases(releaseId) {
    return client_1.default.get("/site/release/".concat(releaseId));
}
function createSiteRelease(data) {
    return client_1.default.post('/site/release', data);
}
