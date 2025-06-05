# CaptionMe - Add captions to your videos with no hassle

### 'Captionify' your videos with just a click of a button!

### Demostration Video: https://youtu.be/U7UlpaMF5jU?si=jBRm5LVp2Yg9Illc

### Live Site: https://caption-me-pearl.vercel.app/

## User Features

* Developed a dynamic service using Next.js and TypeScript that seamlessly integrates AWS S3 for video storage,
AWS Transcribe for automatic speech recognition, and Redis for effective API rate limiting based on user IP
addresses.
* Empowered users to effortlessly upload videos, receive automated captions, and edit them through a user-friendly
interface. The service enhances accessibility by embedding the edited captions into the video, providing a
streamlined experience.
* Implemented robust security measures with Redis to enforce API rate limits, ensuring efficient usage and optimal
performance while maintaining a scalable and responsive platform.

## Technologies used

* Nextjs: For creating the frontend
* TypeScript: For type safety
* Redis: For rate limiting
* AWS S3: To securely upload and store videos via presigned url
* AWS Transcribe: For caption generation
* ffmpeg: In order to embed captions in videos
