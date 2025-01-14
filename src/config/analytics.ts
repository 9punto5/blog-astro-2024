interface PostHogSettings {
  apiKey: string;
  hostUrl: string;
}

interface AnalyticsConfig {
  posthog: PostHogSettings;
}

const config: AnalyticsConfig = {
  posthog: {
    apiKey: 'phc_aeXY6kBjlMThb7BicNBUONqsrwn4ATcrHVpNH4gTXtO', 
    hostUrl: 'https://us.i.posthog.com' 
  }
} as const;

export default config; 