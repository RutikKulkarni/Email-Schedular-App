# Scheduler App

## Description

This project is a Scheduler App developed in React.js using TypeScript. Users can perform CRUD operations on email schedules, including creating, updating, and deleting schedules. The app features a clean design implemented based on the Figma design provided.

## Live Demo

[Scheduler App Live Demo](https://schedular-app.vercel.app/)

## Features

- Create, Read, Update, and Delete (CRUD) operations on email schedules.
- List view with search functionality.
- Popover for schedule form.
- Form with inputs for title, description, subject, and dropdowns for time and frequency.
- Frequency options: Weekly, Monthly, and Daily.
- Dynamic rendering of the repeat field based on frequency.
- Backend implemented using Next.js with a single endpoint `/schedules`.
- Endpoints:
  - `GET /schedules` - Return a list of all schedules.
  - `GET /schedules?search=sampletitle` - Return filtered list based on title.
  - `GET /schedules/:id` - Return specific schedule.
  - `PATCH /schedules/:id` - Update specific schedule.
  - `DELETE /schedules/:id` - Delete specific schedule.
  - `POST /schedules` - Create a new schedule.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/schedular-app.git
   ```

2. Install dependencies:

   ```bash
   cd schedular-app
   npm install
   ```

## Usage

1. Run the app:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Design

[Design]([https://schedular-app.vercel.app/](https://www.figma.com/file/OrULleUfeA207X0woruVrb/Dataplant-Test?type=design&mode=)https://www.figma.com/file/OrULleUfeA207X0woruVrb/Dataplant-Test?type=design&mode=)
