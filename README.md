# Critter

This application is a dummy social media platform built to experiment with Server Sent Events.
A dummy DB has been created and an API route handler sends an SSE every 3 seconds to simulate the platform receiving posts from other users appearing
in a feed. The front ends renders these posts using the EventSource API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
