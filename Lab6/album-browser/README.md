# Album Browser

An Angular application for browsing albums and photos, built for Lab 6 (Routing & HTTP).

## Features

- **Routing**: Multi-page navigation (Home, About, Albums).
- **HTTP**: Data fetching from JSONPlaceholder REST API.
- **Service Layer**: Centralized API communication.
- **CRUD**: Implementation of Read, Update (simulated), and Delete (simulated) operations.
- **Responsive Design**: Modern UI with a responsive photo grid.
- **Docker**: Containerized deployment support.

## Project Structure

- `src/app/components`: UI Components (Home, About, Albums, AlbumDetail, AlbumPhotos).
- `src/app/services`: `AlbumService` for API calls.
- `src/app/models`: TypeScript interfaces for `Album` and `Photo`.
- `src/app/app.routes.ts`: Routing configuration.

## How to Run Local

1. `cd lab6/album-browser`
2. `npm install`
3. `npm start` (or `ng serve`)
4. Open `http://localhost:4200`

## How to Run with Docker

1. `cd lab6/album-browser`
2. `docker-compose up --build`
3. Open `http://localhost:4200`
