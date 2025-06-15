import { SiteReleaseProps } from "./types";
import { createSiteRelease, getSiteReleases } from "./spage-api";

export async function handleCreateSiteRelease(
    data: SiteReleaseProps
): Promise<{ id: number, url: string }> {
    // 上传压缩文件
    // 创建站点发布
    // 获取站点发布信息
    return {"id": 0, "url": ""};
}