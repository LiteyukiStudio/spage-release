import * as core from '@actions/core';
import { SiteReleaseProps } from './types';
import { handleCreateSiteRelease } from './handler';

async function main() {
    try {
        const siteReleaseProps: SiteReleaseProps = {
            url: core.getInput('url', { required: true }),
            dist: core.getInput('dist', { required: true }),
            siteId: core.getInput('site-id', { required: true }),
            tag: core.getInput('tag') || 'latest',
            isTemp: core.getInput('is-temp') === 'true',
        }
        handleCreateSiteRelease(siteReleaseProps).then((result) => {
            core.setOutput('id', result.id);
            core.setOutput('url', result.url);
        }).catch((error) => {
            core.setFailed(`Error creating site release: ${(error as Error).message}`);
        });
    } catch (error) {
        core.setFailed((error as Error).message);
    }
}

main();