export interface BaseResponse {
    message: string | null;
    [property: string]: unknown;
}


export interface SiteReleaseProps {
    url: string;
    dist: string;
    siteId: string;
    tag?: string;
    isTemp?: boolean;
    [key: string]: any;
}

export interface SiteRelease {
    creatorId: number;
    fileId: number;
    id: number;
    siteId: number;
    tag: string;
    [property: string]: unknown;
}

export interface CreateSiteReleaseResponse extends BaseResponse {
  id: number;
}