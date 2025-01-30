import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.univibe.app',
  appName: 'UniVibe',
  webDir: 'dist',
  server: {
    url: 'https://REPLACE_WITH_PROJECT_ID.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'automatic'
  },
  android: {
    backgroundColor: '#1A1F2C'
  }
};

export default config;