export const ENVIRONMENT = process.env.NODE_ENV;
export const isDevelopment = ENVIRONMENT === "development";
export const isProduction = ENVIRONMENT === "production";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
