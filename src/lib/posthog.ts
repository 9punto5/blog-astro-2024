import posthog from "posthog-js";
import analyticsConfig from "@/config/analytics";

interface PostHogConfig {
  apiKey: string;
  hostUrl: string;
}

const config: PostHogConfig = {
  apiKey: analyticsConfig.posthog.apiKey,
  hostUrl: analyticsConfig.posthog.hostUrl,
};

export const initPostHog = (): void => {
  if (typeof window !== "undefined" && config.apiKey) {
    posthog.init(config.apiKey, {
      api_host: config.hostUrl,
      loaded: (posthog: any) => {
        if (import.meta.env.DEV) {
          // Disable capturing in development
          posthog.opt_out_capturing();
        }
      },
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
    });
  }
};

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>,
): void => {
  if (typeof window !== "undefined" && config.apiKey) {
    posthog.capture(eventName, properties);
  }
};

export const identifyUser = (
  distinctId: string,
  properties?: Record<string, any>,
): void => {
  if (typeof window !== "undefined" && config.apiKey) {
    posthog.identify(distinctId, properties);
  }
};
