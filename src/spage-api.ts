import { AxiosResponse } from "axios";
import { CreateSiteReleaseResponse, SiteRelease } from "./types";
import client from "./client";

export function getSiteReleases(releaseId: number): Promise<AxiosResponse<{ id: number; siteId: number; fileId: number; tag: string }, unknown>> {
    return client.get<{ id: number; siteId: number; fileId: number; tag: string }>(`/site/release/${releaseId}`);
}

export function createSiteRelease(data: SiteRelease): Promise<AxiosResponse<CreateSiteReleaseResponse, unknown>> {
    return client.post<CreateSiteReleaseResponse>('/site/release', data);
}