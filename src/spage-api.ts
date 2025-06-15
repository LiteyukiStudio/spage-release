import { AxiosResponse } from "axios";
import { CreateSiteReleaseResponse, SiteRelease } from "./types";
import client from "./client";
import * as fs from "fs";
import * as path from "path";
import archiver from "archiver";
import FormData from "form-data";

export async function zipDirectory(sourceDir: string, outPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(outPath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', resolve);
        archive.on('error', reject);

        archive.pipe(output);
        archive.directory(sourceDir, false);
        archive.finalize();
    });
}

export async function uploadFile(filePath: string): Promise<AxiosResponse<{ fileId: number }, unknown>> {
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath), path.basename(filePath));
    return client.post<{ fileId: number }>('/file', form, {
        headers: form.getHeaders(),
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    });
}

export function getSiteReleases(releaseId: number): Promise<AxiosResponse<{ id: number; siteId: number; fileId: number; tag: string }, unknown>> {
    return client.get<{ id: number; siteId: number; fileId: number; tag: string }>(`/site/release/${releaseId}`);
}

export function createSiteRelease(data: SiteRelease): Promise<AxiosResponse<CreateSiteReleaseResponse, unknown>> {
    return client.post<CreateSiteReleaseResponse>('/site/release', data);
}