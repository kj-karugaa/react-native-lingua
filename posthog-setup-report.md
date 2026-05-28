<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Lingua Expo app. The integration covers the full user journey — from onboarding through sign-up, language selection, and daily learning activity. Users are identified via Clerk on sign-in, sign-up, and on app resume, so analytics are automatically tied to known users.

**Changes made:**

- **`app.config.js`** (new) — Converts static `app.json` to a dynamic config that reads `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` from `.env` and passes them to the app via `expo-constants` extras.
- **`src/lib/posthog.ts`** (new) — PostHog client singleton, configured from `Constants.expoConfig.extra`. Disabled automatically when the project token is not set.
- **`src/app/_layout.tsx`** — Wrapped the app with `PostHogProvider` (inside `ClerkProvider`). Added a `ScreenTracker` component for manual screen tracking via Expo Router.
- **`src/app/index.tsx`** — Calls `posthog.identify()` with the Clerk user ID and email on every authenticated app open, ensuring returning sessions are tied to the correct user.
- **`src/app/onboarding.tsx`** — Tracks `onboarding_get_started_tapped`.
- **`src/app/(auth)/sign-up.tsx`** — Tracks `user_signed_up` on form submission, `sso_sign_in_completed` on SSO, and calls `posthog.identify()` when OTP verification succeeds.
- **`src/app/(auth)/sign-in.tsx`** — Tracks `user_signed_in` (email OTP), `sso_sign_in_completed` (SSO), and calls `posthog.identify()` on successful sign-in.
- **`src/components/VerificationModal.tsx`** — Tracks `verification_code_resent`.
- **`src/app/language-selection.tsx`** — Tracks `language_selected` with `language_id` and `language_name`.
- **`src/app/(tabs)/index.tsx`** — Tracks `continue_learning_tapped`, `today_plan_item_tapped` (with `item_id` and `completed`), and `ai_video_call_tapped`.
- **`src/store/learning.ts`** — Tracks `lesson_completed` (with `lesson_id`, `xp_earned`, `total_xp`, `daily_xp`) and `daily_goal_reached` inside the Zustand `completeLesson` action.

| Event | Description | File |
|---|---|---|
| `onboarding_get_started_tapped` | User taps "Get Started" — top of sign-up funnel | `src/app/onboarding.tsx` |
| `user_signed_up` | Email+password sign-up submitted, verification email sent | `src/app/(auth)/sign-up.tsx` |
| `user_signed_in` | User signs in via email OTP | `src/app/(auth)/sign-in.tsx` |
| `sso_sign_in_completed` | Google or Apple SSO completed. Props: `provider`, `is_sign_up` | `src/app/(auth)/sign-in.tsx`, `sign-up.tsx` |
| `verification_code_resent` | User requests a new OTP code | `src/components/VerificationModal.tsx` |
| `language_selected` | User confirms language choice. Props: `language_id`, `language_name` | `src/app/language-selection.tsx` |
| `lesson_completed` | Lesson finished and XP awarded. Props: `lesson_id`, `xp_earned`, `total_xp`, `daily_xp` | `src/store/learning.ts` |
| `daily_goal_reached` | User's daily XP hits the 20 XP goal for the first time | `src/store/learning.ts` |
| `continue_learning_tapped` | User taps "Continue" on home screen. Props: `language_id`, `language_name` | `src/app/(tabs)/index.tsx` |
| `today_plan_item_tapped` | User taps a Today's Plan item. Props: `item_id`, `completed` | `src/app/(tabs)/index.tsx` |
| `ai_video_call_tapped` | User taps the video call button in the Next Up card | `src/app/(tabs)/index.tsx` |

## Next steps

We've built a dashboard and insights based on the events we instrumented:

- [Analytics basics dashboard](/dashboard/1639530)
- [Signup conversion funnel](/insights/JxtyGY2U) — Tracks drop-off from onboarding → sign-up → language selection
- [Daily lesson completions](/insights/woQB4hsf) — Total lessons completed and unique learners per day
- [Language popularity](/insights/WrGYWUb4) — Which languages users are choosing, broken down by name
- [Daily goal completions](/insights/Ljj3ZEH0) — Users who reached their daily XP goal vs those who completed any lesson
- [Auth method breakdown](/insights/YPJb7IqT) — Email OTP vs SSO sign-in volume

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-expo/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
