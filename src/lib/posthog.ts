import PostHog from 'posthog-react-native';
import Constants from 'expo-constants';

const apiKey = Constants.expoConfig?.extra?.posthogProjectToken as string | undefined;
const host = Constants.expoConfig?.extra?.posthogHost as string | undefined;
const isConfigured =
  !!apiKey &&
  !!host &&
  apiKey !== 'phc_your_project_token_here' &&
  host !== 'https://app.posthog.com' &&
  host !== 'ph_your_instance_host_here';

if (!isConfigured && __DEV__) {
  console.warn('PostHog project token not configured. Set POSTHOG_PROJECT_TOKEN in .env to enable analytics.');
}

export const posthog = new PostHog(apiKey || 'placeholder_key', {
  host,
  disabled: !isConfigured,
  captureAppLifecycleEvents: true,
  flushAt: 20,
  flushInterval: 10000,
  maxBatchSize: 100,
  maxQueueSize: 1000,
  preloadFeatureFlags: true,
  sendFeatureFlagEvent: true,
  featureFlagsRequestTimeoutMs: 10000,
  requestTimeout: 10000,
  fetchRetryCount: 3,
  fetchRetryDelay: 3000,
});
