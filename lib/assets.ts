export const ASSETS_BASE_URL = "https://assets.sobhan-yaghoubi.ir"

export const asset = (path: string) => `${ASSETS_BASE_URL}/${path.replace(/^\/+/, "")}`
